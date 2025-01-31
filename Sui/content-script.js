"use strict";
(() => {
  // src/utils/flags.ts
  var IS_EXTENSION = true;

  // src/utils/extension/index.ts
  function getBrowser() {
    if (!IS_EXTENSION) {
      throw new Error("Attempted to access `browser` outside of an extension build.");
    }
    if ("chrome" in globalThis) {
      return globalThis.chrome;
    }
    if ("browser" in globalThis) {
      return globalThis.browser;
    }
    throw new Error("Did not find extension global");
  }

  // src/utils/events/constants.ts
  var TRPC_REQUEST = "@trpc/request";
  var TRPC_RESPONSE = "@trpc/response";
  var EXTENSION_CONTEXT_READY = `@extension/extension-context-ready`;
  var WALLET_STATE_CHANGED = "@apps/wallet-state-changed";

  // src/utils/events/emitters/extension.ts
  function createExtensionEmitter(opts) {
    const browser = getBrowser();
    const all = /* @__PURE__ */ new Map();
    const eventQueue = [];
    let isReady = !opts?.queueUntilReady;
    browser.runtime.onMessage.addListener((message, sender) => {
      if (isReady) {
        const handlers = all.get(message.eventName) ?? [];
        handlers.forEach((handler) => {
          handler(message.data, sender);
        });
      } else {
        eventQueue.push({
          eventName: message.eventName,
          event: message.data,
          sender
        });
      }
    });
    return {
      on(eventName, handler) {
        const handlers = all.get(eventName);
        if (handlers) {
          handlers.push(handler);
        } else {
          all.set(eventName, [handler]);
        }
      },
      off(eventName, handler) {
        const handlers = all.get(eventName);
        if (handlers) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        }
      },
      emit(eventName, data, tabId) {
        if (eventName === EXTENSION_CONTEXT_READY && !isReady) {
          isReady = true;
          while (eventQueue.length > 0) {
            const event = eventQueue.shift();
            if (event) {
              const handlers = all.get(event.eventName) ?? [];
              handlers.forEach((handler) => {
                handler(event.event, event.sender);
              });
            }
          }
          return;
        }
        const message = {
          eventName,
          data
        };
        if (tabId) {
          browser.tabs.sendMessage(tabId, message);
        } else {
          browser.runtime.sendMessage(message);
        }
      }
    };
  }

  // src/utils/events/emitters/window.ts
  function createWindowEmitter() {
    const handlers = /* @__PURE__ */ new Map();
    return {
      on(eventName, handler) {
        const onEventFired = (event) => {
          if (!(event instanceof CustomEvent))
            return;
          handler(event.detail);
        };
        globalThis.addEventListener(eventName, onEventFired);
        if (!handlers.has(eventName)) {
          handlers.set(eventName, /* @__PURE__ */ new Map());
        }
        handlers.get(eventName).set(handler, onEventFired);
      },
      off(eventName, handler) {
        const onEventFired = handlers.get(eventName)?.get(handler);
        if (onEventFired) {
          globalThis.removeEventListener(eventName, onEventFired);
        }
      },
      emit(eventName, data) {
        globalThis.dispatchEvent(
          new CustomEvent(eventName, {
            detail: data
          })
        );
      }
    };
  }

  // src/content-script/relayMessages.ts
  function relayMessages() {
    const windowEmitter = createWindowEmitter();
    const extensionEmitter = createExtensionEmitter();
    windowEmitter.on(TRPC_REQUEST, (request) => {
      if (!getBrowser().runtime.id) {
        console.error("The extension reloaded, you need to refresh your current tab!");
        return;
      }
      extensionEmitter.emit(TRPC_REQUEST, request);
    });
    extensionEmitter.on(WALLET_STATE_CHANGED, (event) => {
      windowEmitter.emit(WALLET_STATE_CHANGED, event);
    });
    extensionEmitter.on(TRPC_RESPONSE, (event) => {
      windowEmitter.emit(TRPC_RESPONSE, event);
    });
  }

  // src/content-script/index.ts
  (function injectScript(scriptFileName) {
    const container = document.head || document.documentElement;
    const scriptEl = document.createElement("script");
    scriptEl.setAttribute("src", getBrowser().runtime.getURL(scriptFileName));
    container.insertBefore(scriptEl, container.firstElementChild);
    container.removeChild(scriptEl);
  })("dapp-interface.js");
  relayMessages();
})();
