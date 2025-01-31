"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js
  var init_dirname = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js"() {
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/process.js
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  function hrtime(previousTimestamp) {
    var baseNow = Math.floor((Date.now() - _performance.now()) * 1e-3);
    var clocktime = _performance.now() * 1e-3;
    var seconds = Math.floor(clocktime) + baseNow;
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += nanoPerSec;
      }
    }
    return [seconds, nanoseconds];
  }
  var env, _performance, nowOffset, nanoPerSec;
  var init_process = __esm({
    "node_modules/@jspm/core/nodelibs/browser/process.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      env = {
        PATH: "/usr/bin",
        LANG: typeof navigator !== "undefined" ? navigator.language + ".UTF-8" : void 0,
        PWD: "/",
        HOME: "/home",
        TMP: "/tmp"
      };
      _performance = {
        now: typeof performance !== "undefined" ? performance.now.bind(performance) : void 0,
        timing: typeof performance !== "undefined" ? performance.timing : void 0
      };
      if (_performance.now === void 0) {
        nowOffset = Date.now();
        if (_performance.timing && _performance.timing.navigationStart) {
          nowOffset = _performance.timing.navigationStart;
        }
        _performance.now = () => Date.now() - nowOffset;
      }
      nanoPerSec = 1e9;
      hrtime.bigint = function(time) {
        var diff = hrtime(time);
        if (typeof BigInt === "undefined") {
          return diff[0] * nanoPerSec + diff[1];
        }
        return BigInt(diff[0] * nanoPerSec) + BigInt(diff[1]);
      };
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/process.js
  var init_process2 = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/process.js"() {
      init_process();
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/chunk-DtuTasat.js
  function dew$2() {
    if (_dewExec$2)
      return exports$2;
    _dewExec$2 = true;
    exports$2.byteLength = byteLength;
    exports$2.toByteArray = toByteArray;
    exports$2.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
    return exports$2;
  }
  function dew$1() {
    if (_dewExec$1)
      return exports$1;
    _dewExec$1 = true;
    exports$1.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports$1.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
    return exports$1;
  }
  function dew() {
    if (_dewExec)
      return exports;
    _dewExec = true;
    const base64 = dew$2();
    const ieee754 = dew$1();
    const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer3;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    const K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = {
          foo: function() {
            return 42;
          }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer3.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer3.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function Buffer3(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer3.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer3.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b)
        return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    Buffer3.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer3.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer3.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer3.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer3.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer3.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer3.alloc(+length);
    }
    Buffer3.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    };
    Buffer3.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array))
        a = Buffer3.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer3.from(b, b.offset, b.byteLength);
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b)
        return 0;
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer3.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer3.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer3.alloc(0);
      }
      let i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      const buffer = Buffer3.allocUnsafe(length);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer3.isBuffer(buf))
              buf = Buffer3.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos);
          }
        } else if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer3.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0)
        return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer3.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer3.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer3.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer3.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
    Buffer3.prototype.equals = function equals(b) {
      if (!Buffer3.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer3.compare(this, b) === 0;
    };
    Buffer3.prototype.inspect = function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
    }
    Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer3.from(target, target.offset, target.byteLength);
      }
      if (!Buffer3.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer3.from(val, encoding);
      }
      if (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i;
            if (i - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i;
        }
      }
      return -1;
    }
    Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i;
      for (i = 0; i < length; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer3.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer3.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    const MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len)
        end = len;
      let out = "";
      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer3.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer3.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer3.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }
      return len;
    };
    Buffer3.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    const errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
      if (name) {
        return `${name} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E("ERR_INVALID_ARG_TYPE", function(name, actual) {
      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E("ERR_OUT_OF_RANGE", function(str, range, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    }, RangeError);
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE("offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE("offset", `>= ${0} and <= ${length}`, value);
    }
    const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i;
      for (i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length)
          break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    const hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
    return exports;
  }
  var exports$2, _dewExec$2, exports$1, _dewExec$1, exports, _dewExec;
  var init_chunk_DtuTasat = __esm({
    "node_modules/@jspm/core/nodelibs/browser/chunk-DtuTasat.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      exports$2 = {};
      _dewExec$2 = false;
      exports$1 = {};
      _dewExec$1 = false;
      exports = {};
      _dewExec = false;
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/buffer.js
  var exports2, Buffer2, INSPECT_MAX_BYTES, kMaxLength;
  var init_buffer = __esm({
    "node_modules/@jspm/core/nodelibs/browser/buffer.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      init_chunk_DtuTasat();
      exports2 = dew();
      exports2["Buffer"];
      exports2["SlowBuffer"];
      exports2["INSPECT_MAX_BYTES"];
      exports2["kMaxLength"];
      Buffer2 = exports2.Buffer;
      INSPECT_MAX_BYTES = exports2.INSPECT_MAX_BYTES;
      kMaxLength = exports2.kMaxLength;
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js
  var init_buffer2 = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js"() {
      init_buffer();
    }
  });

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var ReactVersion = "18.2.0";
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: null
          };
          var ReactCurrentActQueue = {
            current: null,
            // Used to reproduce behavior of `batchedUpdates` in legacy mode.
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false
          };
          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
          }
          function warn(format) {
            {
              {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                printWarning("warn", format, args);
              }
            }
          }
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function(publicInstance) {
              return false;
            },
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var assign = Object.assign;
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
              throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement2(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              self = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (element === null || element === void 0) {
              throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName;
            var props = assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
          }
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              {
                checkKeyStringCoercion(element.key);
              }
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                  return c;
                });
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  {
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                      checkKeyStringCoercion(mappedChild.key);
                    }
                  }
                  mappedChild = cloneAndReplaceKey(
                    mappedChild,
                    // Keep both the (mapped) and old keys if they differ, just as
                    // traverseAllChildren used to do for objects as children
                    escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                      // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                      // eslint-disable-next-line react-internal/safe-string-coercion
                      escapeUserProvidedKey("" + mappedChild.key) + "/"
                    ) : "") + childKey
                  );
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
            return subtreeCount;
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          function onlyChild(children) {
            if (!isValidElement(children)) {
              throw new Error("React.Children.only expected to receive a single React element child.");
            }
            return children;
          }
          function createContext5(defaultValue) {
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null,
              // Add these to use same hidden class in VM as ServerContext
              _defaultValue: null,
              _globalName: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              thenable.then(function(moduleObject2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = moduleObject2;
                }
              }, function(error2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
              if (payload._status === Uninitialized) {
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
              }
            }
            if (payload._status === Resolved) {
              var moduleObject = payload._result;
              {
                if (moduleObject === void 0) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                }
              }
              {
                if (!("default" in moduleObject)) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                }
              }
              return moduleObject.default;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              // We use these fields to store the result.
              _status: Uninitialized,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!render.name && !render.displayName) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!type.name && !type.displayName) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            {
              if (dispatcher === null) {
                error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext5(Context) {
            var dispatcher = resolveDispatcher();
            {
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context);
          }
          function useState6(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef2(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect7(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useInsertionEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create, deps);
          }
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback4(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo5(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
          }
          function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
          }
          function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
          }
          function useSyncExternalStore4(subscribe, getSnapshot, getServerSnapshot) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement2.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
              ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
            }
            try {
              scope();
            } finally {
              ReactCurrentBatchConfig.transition = prevTransition;
              {
                if (prevTransition === null && currentTransition._updatedFibers) {
                  var updatedFibersCount = currentTransition._updatedFibers.size;
                  if (updatedFibersCount > 10) {
                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                  }
                  currentTransition._updatedFibers.clear();
                }
              }
            }
          }
          var didWarnAboutMessageChannel = false;
          var enqueueTaskImpl = null;
          function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
              try {
                var requireString = ("require" + Math.random()).slice(0, 7);
                var nodeRequire = module && module[requireString];
                enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
              } catch (_err) {
                enqueueTaskImpl = function(callback) {
                  {
                    if (didWarnAboutMessageChannel === false) {
                      didWarnAboutMessageChannel = true;
                      if (typeof MessageChannel === "undefined") {
                        error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                      }
                    }
                  }
                  var channel = new MessageChannel();
                  channel.port1.onmessage = callback;
                  channel.port2.postMessage(void 0);
                };
              }
            }
            return enqueueTaskImpl(task);
          }
          var actScopeDepth = 0;
          var didWarnNoAwaitAct = false;
          function act(callback) {
            {
              var prevActScopeDepth = actScopeDepth;
              actScopeDepth++;
              if (ReactCurrentActQueue.current === null) {
                ReactCurrentActQueue.current = [];
              }
              var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
              var result;
              try {
                ReactCurrentActQueue.isBatchingLegacy = true;
                result = callback();
                if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                  var queue = ReactCurrentActQueue.current;
                  if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                  }
                }
              } catch (error2) {
                popActScope(prevActScopeDepth);
                throw error2;
              } finally {
                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
              }
              if (result !== null && typeof result === "object" && typeof result.then === "function") {
                var thenableResult = result;
                var wasAwaited = false;
                var thenable = {
                  then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue2) {
                      popActScope(prevActScopeDepth);
                      if (actScopeDepth === 0) {
                        recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                      } else {
                        resolve(returnValue2);
                      }
                    }, function(error2) {
                      popActScope(prevActScopeDepth);
                      reject(error2);
                    });
                  }
                };
                {
                  if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                    Promise.resolve().then(function() {
                    }).then(function() {
                      if (!wasAwaited) {
                        didWarnNoAwaitAct = true;
                        error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                      }
                    });
                  }
                }
                return thenable;
              } else {
                var returnValue = result;
                popActScope(prevActScopeDepth);
                if (actScopeDepth === 0) {
                  var _queue = ReactCurrentActQueue.current;
                  if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                  }
                  var _thenable = {
                    then: function(resolve, reject) {
                      if (ReactCurrentActQueue.current === null) {
                        ReactCurrentActQueue.current = [];
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                      } else {
                        resolve(returnValue);
                      }
                    }
                  };
                  return _thenable;
                } else {
                  var _thenable2 = {
                    then: function(resolve, reject) {
                      resolve(returnValue);
                    }
                  };
                  return _thenable2;
                }
              }
            }
          }
          function popActScope(prevActScopeDepth) {
            {
              if (prevActScopeDepth !== actScopeDepth - 1) {
                error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
              }
              actScopeDepth = prevActScopeDepth;
            }
          }
          function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
            {
              var queue = ReactCurrentActQueue.current;
              if (queue !== null) {
                try {
                  flushActQueue(queue);
                  enqueueTask(function() {
                    if (queue.length === 0) {
                      ReactCurrentActQueue.current = null;
                      resolve(returnValue);
                    } else {
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    }
                  });
                } catch (error2) {
                  reject(error2);
                }
              } else {
                resolve(returnValue);
              }
            }
          }
          var isFlushing = false;
          function flushActQueue(queue) {
            {
              if (!isFlushing) {
                isFlushing = true;
                var i = 0;
                try {
                  for (; i < queue.length; i++) {
                    var callback = queue[i];
                    do {
                      callback = callback(true);
                    } while (callback !== null);
                  }
                  queue.length = 0;
                } catch (error2) {
                  queue = queue.slice(i + 1);
                  throw error2;
                } finally {
                  isFlushing = false;
                }
              }
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports3.Children = Children;
          exports3.Component = Component;
          exports3.Fragment = REACT_FRAGMENT_TYPE;
          exports3.Profiler = REACT_PROFILER_TYPE;
          exports3.PureComponent = PureComponent;
          exports3.StrictMode = REACT_STRICT_MODE_TYPE;
          exports3.Suspense = REACT_SUSPENSE_TYPE;
          exports3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports3.cloneElement = cloneElement$1;
          exports3.createContext = createContext5;
          exports3.createElement = createElement$1;
          exports3.createFactory = createFactory;
          exports3.createRef = createRef;
          exports3.forwardRef = forwardRef;
          exports3.isValidElement = isValidElement;
          exports3.lazy = lazy;
          exports3.memo = memo;
          exports3.startTransition = startTransition;
          exports3.unstable_act = act;
          exports3.useCallback = useCallback4;
          exports3.useContext = useContext5;
          exports3.useDebugValue = useDebugValue;
          exports3.useDeferredValue = useDeferredValue;
          exports3.useEffect = useEffect7;
          exports3.useId = useId;
          exports3.useImperativeHandle = useImperativeHandle;
          exports3.useInsertionEffect = useInsertionEffect;
          exports3.useLayoutEffect = useLayoutEffect;
          exports3.useMemo = useMemo5;
          exports3.useReducer = useReducer;
          exports3.useRef = useRef2;
          exports3.useState = useState6;
          exports3.useSyncExternalStore = useSyncExternalStore4;
          exports3.useTransition = useTransition;
          exports3.version = ReactVersion;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.development.js
  var require_react_jsx_runtime_development = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.development.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      if (true) {
        (function() {
          "use strict";
          var React12 = require_react();
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactSharedInternals = React12.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var assign = Object.assign;
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown;
          var specialPropRefWarningShown;
          var didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function warnIfStringRefCannotBeAutoConverted(config, self) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          function defineKeyPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingKey = function() {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingKey.isReactWarning = true;
              Object.defineProperty(props, "key", {
                get: warnAboutAccessingKey,
                configurable: true
              });
            }
          }
          function defineRefPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingRef = function() {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingRef.isReactWarning = true;
              Object.defineProperty(props, "ref", {
                get: warnAboutAccessingRef,
                configurable: true
              });
            }
          }
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function jsxDEV(type, config, maybeKey, source, self) {
            {
              var propName;
              var props = {};
              var key = null;
              var ref = null;
              if (maybeKey !== void 0) {
                {
                  checkKeyStringCoercion(maybeKey);
                }
                key = "" + maybeKey;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config, self);
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
              if (type && type.defaultProps) {
                var defaultProps = type.defaultProps;
                for (propName in defaultProps) {
                  if (props[propName] === void 0) {
                    props[propName] = defaultProps[propName];
                  }
                }
              }
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
              return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
            }
          }
          var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function isValidElement(object) {
            {
              return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }
          }
          function getDeclarationErrorAddendum() {
            {
              if (ReactCurrentOwner$1.current) {
                var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
                if (name) {
                  return "\n\nCheck the render method of `" + name + "`.";
                }
              }
              return "";
            }
          }
          function getSourceInfoErrorAddendum(source) {
            {
              if (source !== void 0) {
                var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                var lineNumber = source.lineNumber;
                return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
              }
              return "";
            }
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            {
              var info = getDeclarationErrorAddendum();
              if (!info) {
                var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                if (parentName) {
                  info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                }
              }
              return info;
            }
          }
          function validateExplicitKey(element, parentType) {
            {
              if (!element._store || element._store.validated || element.key != null) {
                return;
              }
              element._store.validated = true;
              var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
              if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
              }
              ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
              var childOwner = "";
              if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
              }
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            {
              if (typeof node !== "object") {
                return;
              }
              if (isArray(node)) {
                for (var i = 0; i < node.length; i++) {
                  var child = node[i];
                  if (isValidElement(child)) {
                    validateExplicitKey(child, parentType);
                  }
                }
              } else if (isValidElement(node)) {
                if (node._store) {
                  node._store.validated = true;
                }
              } else if (node) {
                var iteratorFn = getIteratorFn(node);
                if (typeof iteratorFn === "function") {
                  if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while (!(step = iterator.next()).done) {
                      if (isValidElement(step.value)) {
                        validateExplicitKey(step.value, parentType);
                      }
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
            {
              var validType = isValidElementType(type);
              if (!validType) {
                var info = "";
                if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                  info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                }
                var sourceInfo = getSourceInfoErrorAddendum(source);
                if (sourceInfo) {
                  info += sourceInfo;
                } else {
                  info += getDeclarationErrorAddendum();
                }
                var typeString;
                if (type === null) {
                  typeString = "null";
                } else if (isArray(type)) {
                  typeString = "array";
                } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                  typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                  info = " Did you accidentally export a JSX literal instead of a component?";
                } else {
                  typeString = typeof type;
                }
                error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
              var element = jsxDEV(type, props, key, source, self);
              if (element == null) {
                return element;
              }
              if (validType) {
                var children = props.children;
                if (children !== void 0) {
                  if (isStaticChildren) {
                    if (isArray(children)) {
                      for (var i = 0; i < children.length; i++) {
                        validateChildKeys(children[i], type);
                      }
                      if (Object.freeze) {
                        Object.freeze(children);
                      }
                    } else {
                      error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                    }
                  } else {
                    validateChildKeys(children, type);
                  }
                }
              }
              if (type === REACT_FRAGMENT_TYPE) {
                validateFragmentProps(element);
              } else {
                validatePropTypes(element);
              }
              return element;
            }
          }
          function jsxWithValidationStatic(type, props, key) {
            {
              return jsxWithValidation(type, props, key, true);
            }
          }
          function jsxWithValidationDynamic(type, props, key) {
            {
              return jsxWithValidation(type, props, key, false);
            }
          }
          var jsx3 = jsxWithValidationDynamic;
          var jsxs = jsxWithValidationStatic;
          exports3.Fragment = REACT_FRAGMENT_TYPE;
          exports3.jsx = jsx3;
          exports3.jsxs = jsxs;
        })();
      }
    }
  });

  // node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_jsx_runtime_development();
      }
    }
  });

  // src/dapp-interface/extension.ts
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@wallet-standard/wallet/lib/esm/register.js
  init_dirname();
  init_buffer2();
  init_process2();
  var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _RegisterWalletEvent_detail;
  function registerWallet(wallet) {
    const callback = ({ register }) => register(wallet);
    try {
      globalThis.dispatchEvent(new RegisterWalletEvent(callback));
    } catch (error) {
      console.error("wallet-standard:register-wallet event could not be dispatched\n", error);
    }
    try {
      globalThis.addEventListener("wallet-standard:app-ready", ({ detail: api }) => callback(api));
    } catch (error) {
      console.error("wallet-standard:app-ready event listener could not be added\n", error);
    }
  }
  var RegisterWalletEvent = class extends Event {
    constructor(callback) {
      super("wallet-standard:register-wallet", {
        bubbles: false,
        cancelable: false,
        composed: false
      });
      _RegisterWalletEvent_detail.set(this, void 0);
      __classPrivateFieldSet(this, _RegisterWalletEvent_detail, callback, "f");
    }
    get detail() {
      return __classPrivateFieldGet(this, _RegisterWalletEvent_detail, "f");
    }
    get type() {
      return "wallet-standard:register-wallet";
    }
    /** @deprecated */
    preventDefault() {
      throw new Error("preventDefault cannot be called");
    }
    /** @deprecated */
    stopImmediatePropagation() {
      throw new Error("stopImmediatePropagation cannot be called");
    }
    /** @deprecated */
    stopPropagation() {
      throw new Error("stopPropagation cannot be called");
    }
  };
  _RegisterWalletEvent_detail = /* @__PURE__ */ new WeakMap();

  // node_modules/@wallet-standard/wallet/lib/esm/util.js
  init_dirname();
  init_buffer2();
  init_process2();
  var __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _ReadonlyWalletAccount_address;
  var _ReadonlyWalletAccount_publicKey;
  var _ReadonlyWalletAccount_chains;
  var _ReadonlyWalletAccount_features;
  var _ReadonlyWalletAccount_label;
  var _ReadonlyWalletAccount_icon;
  var ReadonlyWalletAccount = class _ReadonlyWalletAccount {
    /**
     * Create and freeze a read-only account.
     *
     * @param account Account to copy properties from.
     */
    constructor(account) {
      _ReadonlyWalletAccount_address.set(this, void 0);
      _ReadonlyWalletAccount_publicKey.set(this, void 0);
      _ReadonlyWalletAccount_chains.set(this, void 0);
      _ReadonlyWalletAccount_features.set(this, void 0);
      _ReadonlyWalletAccount_label.set(this, void 0);
      _ReadonlyWalletAccount_icon.set(this, void 0);
      if (new.target === _ReadonlyWalletAccount) {
        Object.freeze(this);
      }
      __classPrivateFieldSet2(this, _ReadonlyWalletAccount_address, account.address, "f");
      __classPrivateFieldSet2(this, _ReadonlyWalletAccount_publicKey, account.publicKey.slice(), "f");
      __classPrivateFieldSet2(this, _ReadonlyWalletAccount_chains, account.chains.slice(), "f");
      __classPrivateFieldSet2(this, _ReadonlyWalletAccount_features, account.features.slice(), "f");
      __classPrivateFieldSet2(this, _ReadonlyWalletAccount_label, account.label, "f");
      __classPrivateFieldSet2(this, _ReadonlyWalletAccount_icon, account.icon, "f");
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.address | WalletAccount::address} */
    get address() {
      return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_address, "f");
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.publicKey | WalletAccount::publicKey} */
    get publicKey() {
      return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_publicKey, "f").slice();
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.chains | WalletAccount::chains} */
    get chains() {
      return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_chains, "f").slice();
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.features | WalletAccount::features} */
    get features() {
      return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_features, "f").slice();
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.label | WalletAccount::label} */
    get label() {
      return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_label, "f");
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.icon | WalletAccount::icon} */
    get icon() {
      return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_icon, "f");
    }
  };
  _ReadonlyWalletAccount_address = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_publicKey = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_chains = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_features = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_label = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_icon = /* @__PURE__ */ new WeakMap();

  // node_modules/@mysten/sui/dist/esm/bcs/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/bcs/dist/esm/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/bcs/dist/esm/b58.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/bs58/src/esm/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/base-x/src/esm/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  function base(ALPHABET2) {
    if (ALPHABET2.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    const BASE_MAP = new Uint8Array(256);
    for (let j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (let i = 0; i < ALPHABET2.length; i++) {
      const x = ALPHABET2.charAt(i);
      const xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    const BASE = ALPHABET2.length;
    const LEADER = ALPHABET2.charAt(0);
    const FACTOR = Math.log(BASE) / Math.log(256);
    const iFACTOR = Math.log(256) / Math.log(BASE);
    function encode(source) {
      if (source instanceof Uint8Array) {
      } else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      let zeroes = 0;
      let length = 0;
      let pbegin = 0;
      const pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      const size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      const b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        let carry = source[pbegin];
        let i = 0;
        for (let it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length = i;
        pbegin++;
      }
      let it2 = size - length;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      let str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET2.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      let psz = 0;
      let zeroes = 0;
      let length = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      const size = (source.length - psz) * FACTOR + 1 >>> 0;
      const b256 = new Uint8Array(size);
      while (source[psz]) {
        let carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        let i = 0;
        for (let it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length = i;
        psz++;
      }
      let it4 = size - length;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      const vch = new Uint8Array(zeroes + (size - it4));
      let j = zeroes;
      while (it4 !== size) {
        vch[j++] = b256[it4++];
      }
      return vch;
    }
    function decode(string) {
      const buffer = decodeUnsafe(string);
      if (buffer) {
        return buffer;
      }
      throw new Error("Non-base" + BASE + " character");
    }
    return {
      encode,
      decodeUnsafe,
      decode
    };
  }
  var esm_default = base;

  // node_modules/bs58/src/esm/index.js
  var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  var esm_default2 = esm_default(ALPHABET);

  // node_modules/@mysten/bcs/dist/esm/b58.js
  var toBase58 = (buffer) => esm_default2.encode(buffer);
  var fromBase58 = (str) => esm_default2.decode(str);

  // node_modules/@mysten/bcs/dist/esm/b64.js
  init_dirname();
  init_buffer2();
  init_process2();
  function fromBase64(base64String2) {
    return Uint8Array.from(atob(base64String2), (char) => char.charCodeAt(0));
  }
  var CHUNK_SIZE = 8192;
  function toBase64(bytes) {
    if (bytes.length < CHUNK_SIZE) {
      return btoa(String.fromCharCode(...bytes));
    }
    let output = "";
    for (var i = 0; i < bytes.length; i += CHUNK_SIZE) {
      const chunk = bytes.slice(i, i + CHUNK_SIZE);
      output += String.fromCharCode(...chunk);
    }
    return btoa(output);
  }
  var toB64 = toBase64;
  var fromB64 = fromBase64;

  // node_modules/@mysten/bcs/dist/esm/bcs-type.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/bcs/dist/esm/hex.js
  init_dirname();
  init_buffer2();
  init_process2();
  function fromHex(hexStr) {
    const normalized = hexStr.startsWith("0x") ? hexStr.slice(2) : hexStr;
    const padded = normalized.length % 2 === 0 ? normalized : `0${normalized}`;
    const intArr = padded.match(/[0-9a-fA-F]{2}/g)?.map((byte) => parseInt(byte, 16)) ?? [];
    if (intArr.length !== padded.length / 2) {
      throw new Error(`Invalid hex string ${hexStr}`);
    }
    return Uint8Array.from(intArr);
  }
  function toHex(bytes) {
    return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");
  }

  // node_modules/@mysten/bcs/dist/esm/reader.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/bcs/dist/esm/uleb.js
  init_dirname();
  init_buffer2();
  init_process2();
  function ulebEncode(num) {
    let arr = [];
    let len = 0;
    if (num === 0) {
      return [0];
    }
    while (num > 0) {
      arr[len] = num & 127;
      if (num >>= 7) {
        arr[len] |= 128;
      }
      len += 1;
    }
    return arr;
  }
  function ulebDecode(arr) {
    let total = 0;
    let shift = 0;
    let len = 0;
    while (true) {
      let byte = arr[len];
      len += 1;
      total |= (byte & 127) << shift;
      if ((byte & 128) === 0) {
        break;
      }
      shift += 7;
    }
    return {
      value: total,
      length: len
    };
  }

  // node_modules/@mysten/bcs/dist/esm/reader.js
  var BcsReader = class {
    /**
     * @param {Uint8Array} data Data to use as a buffer.
     */
    constructor(data) {
      this.bytePosition = 0;
      this.dataView = new DataView(data.buffer);
    }
    /**
     * Shift current cursor position by `bytes`.
     *
     * @param {Number} bytes Number of bytes to
     * @returns {this} Self for possible chaining.
     */
    shift(bytes) {
      this.bytePosition += bytes;
      return this;
    }
    /**
     * Read U8 value from the buffer and shift cursor by 1.
     * @returns
     */
    read8() {
      let value = this.dataView.getUint8(this.bytePosition);
      this.shift(1);
      return value;
    }
    /**
     * Read U16 value from the buffer and shift cursor by 2.
     * @returns
     */
    read16() {
      let value = this.dataView.getUint16(this.bytePosition, true);
      this.shift(2);
      return value;
    }
    /**
     * Read U32 value from the buffer and shift cursor by 4.
     * @returns
     */
    read32() {
      let value = this.dataView.getUint32(this.bytePosition, true);
      this.shift(4);
      return value;
    }
    /**
     * Read U64 value from the buffer and shift cursor by 8.
     * @returns
     */
    read64() {
      let value1 = this.read32();
      let value2 = this.read32();
      let result = value2.toString(16) + value1.toString(16).padStart(8, "0");
      return BigInt("0x" + result).toString(10);
    }
    /**
     * Read U128 value from the buffer and shift cursor by 16.
     */
    read128() {
      let value1 = BigInt(this.read64());
      let value2 = BigInt(this.read64());
      let result = value2.toString(16) + value1.toString(16).padStart(16, "0");
      return BigInt("0x" + result).toString(10);
    }
    /**
     * Read U128 value from the buffer and shift cursor by 32.
     * @returns
     */
    read256() {
      let value1 = BigInt(this.read128());
      let value2 = BigInt(this.read128());
      let result = value2.toString(16) + value1.toString(16).padStart(32, "0");
      return BigInt("0x" + result).toString(10);
    }
    /**
     * Read `num` number of bytes from the buffer and shift cursor by `num`.
     * @param num Number of bytes to read.
     */
    readBytes(num) {
      let start = this.bytePosition + this.dataView.byteOffset;
      let value = new Uint8Array(this.dataView.buffer, start, num);
      this.shift(num);
      return value;
    }
    /**
     * Read ULEB value - an integer of varying size. Used for enum indexes and
     * vector lengths.
     * @returns {Number} The ULEB value.
     */
    readULEB() {
      let start = this.bytePosition + this.dataView.byteOffset;
      let buffer = new Uint8Array(this.dataView.buffer, start);
      let { value, length } = ulebDecode(buffer);
      this.shift(length);
      return value;
    }
    /**
     * Read a BCS vector: read a length and then apply function `cb` X times
     * where X is the length of the vector, defined as ULEB in BCS bytes.
     * @param cb Callback to process elements of vector.
     * @returns {Array<Any>} Array of the resulting values, returned by callback.
     */
    readVec(cb) {
      let length = this.readULEB();
      let result = [];
      for (let i = 0; i < length; i++) {
        result.push(cb(this, i, length));
      }
      return result;
    }
  };

  // node_modules/@mysten/bcs/dist/esm/writer.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/bcs/dist/esm/utils.js
  init_dirname();
  init_buffer2();
  init_process2();
  function encodeStr(data, encoding) {
    switch (encoding) {
      case "base58":
        return toBase58(data);
      case "base64":
        return toBase64(data);
      case "hex":
        return toHex(data);
      default:
        throw new Error("Unsupported encoding, supported values are: base64, hex");
    }
  }
  function splitGenericParameters(str, genericSeparators = ["<", ">"]) {
    const [left, right] = genericSeparators;
    const tok = [];
    let word = "";
    let nestedAngleBrackets = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === left) {
        nestedAngleBrackets++;
      }
      if (char === right) {
        nestedAngleBrackets--;
      }
      if (nestedAngleBrackets === 0 && char === ",") {
        tok.push(word.trim());
        word = "";
        continue;
      }
      word += char;
    }
    tok.push(word.trim());
    return tok;
  }

  // node_modules/@mysten/bcs/dist/esm/writer.js
  var BcsWriter = class {
    constructor({
      initialSize = 1024,
      maxSize = Infinity,
      allocateSize = 1024
    } = {}) {
      this.bytePosition = 0;
      this.size = initialSize;
      this.maxSize = maxSize;
      this.allocateSize = allocateSize;
      this.dataView = new DataView(new ArrayBuffer(initialSize));
    }
    ensureSizeOrGrow(bytes) {
      const requiredSize = this.bytePosition + bytes;
      if (requiredSize > this.size) {
        const nextSize = Math.min(this.maxSize, this.size + this.allocateSize);
        if (requiredSize > nextSize) {
          throw new Error(
            `Attempting to serialize to BCS, but buffer does not have enough size. Allocated size: ${this.size}, Max size: ${this.maxSize}, Required size: ${requiredSize}`
          );
        }
        this.size = nextSize;
        const nextBuffer = new ArrayBuffer(this.size);
        new Uint8Array(nextBuffer).set(new Uint8Array(this.dataView.buffer));
        this.dataView = new DataView(nextBuffer);
      }
    }
    /**
     * Shift current cursor position by `bytes`.
     *
     * @param {Number} bytes Number of bytes to
     * @returns {this} Self for possible chaining.
     */
    shift(bytes) {
      this.bytePosition += bytes;
      return this;
    }
    /**
     * Write a U8 value into a buffer and shift cursor position by 1.
     * @param {Number} value Value to write.
     * @returns {this}
     */
    write8(value) {
      this.ensureSizeOrGrow(1);
      this.dataView.setUint8(this.bytePosition, Number(value));
      return this.shift(1);
    }
    /**
     * Write a U16 value into a buffer and shift cursor position by 2.
     * @param {Number} value Value to write.
     * @returns {this}
     */
    write16(value) {
      this.ensureSizeOrGrow(2);
      this.dataView.setUint16(this.bytePosition, Number(value), true);
      return this.shift(2);
    }
    /**
     * Write a U32 value into a buffer and shift cursor position by 4.
     * @param {Number} value Value to write.
     * @returns {this}
     */
    write32(value) {
      this.ensureSizeOrGrow(4);
      this.dataView.setUint32(this.bytePosition, Number(value), true);
      return this.shift(4);
    }
    /**
     * Write a U64 value into a buffer and shift cursor position by 8.
     * @param {bigint} value Value to write.
     * @returns {this}
     */
    write64(value) {
      toLittleEndian(BigInt(value), 8).forEach((el) => this.write8(el));
      return this;
    }
    /**
     * Write a U128 value into a buffer and shift cursor position by 16.
     *
     * @param {bigint} value Value to write.
     * @returns {this}
     */
    write128(value) {
      toLittleEndian(BigInt(value), 16).forEach((el) => this.write8(el));
      return this;
    }
    /**
     * Write a U256 value into a buffer and shift cursor position by 16.
     *
     * @param {bigint} value Value to write.
     * @returns {this}
     */
    write256(value) {
      toLittleEndian(BigInt(value), 32).forEach((el) => this.write8(el));
      return this;
    }
    /**
     * Write a ULEB value into a buffer and shift cursor position by number of bytes
     * written.
     * @param {Number} value Value to write.
     * @returns {this}
     */
    writeULEB(value) {
      ulebEncode(value).forEach((el) => this.write8(el));
      return this;
    }
    /**
     * Write a vector into a buffer by first writing the vector length and then calling
     * a callback on each passed value.
     *
     * @param {Array<Any>} vector Array of elements to write.
     * @param {WriteVecCb} cb Callback to call on each element of the vector.
     * @returns {this}
     */
    writeVec(vector, cb) {
      this.writeULEB(vector.length);
      Array.from(vector).forEach((el, i) => cb(this, el, i, vector.length));
      return this;
    }
    /**
     * Adds support for iterations over the object.
     * @returns {Uint8Array}
     */
    *[Symbol.iterator]() {
      for (let i = 0; i < this.bytePosition; i++) {
        yield this.dataView.getUint8(i);
      }
      return this.toBytes();
    }
    /**
     * Get underlying buffer taking only value bytes (in case initial buffer size was bigger).
     * @returns {Uint8Array} Resulting bcs.
     */
    toBytes() {
      return new Uint8Array(this.dataView.buffer.slice(0, this.bytePosition));
    }
    /**
     * Represent data as 'hex' or 'base64'
     * @param encoding Encoding to use: 'base64' or 'hex'
     */
    toString(encoding) {
      return encodeStr(this.toBytes(), encoding);
    }
  };
  function toLittleEndian(bigint, size) {
    let result = new Uint8Array(size);
    let i = 0;
    while (bigint > 0) {
      result[i] = Number(bigint % BigInt(256));
      bigint = bigint / BigInt(256);
      i += 1;
    }
    return result;
  }

  // node_modules/@mysten/bcs/dist/esm/bcs-type.js
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var _write;
  var _serialize;
  var _schema;
  var _bytes;
  var _BcsType = class _BcsType2 {
    constructor(options) {
      __privateAdd(this, _write);
      __privateAdd(this, _serialize);
      this.name = options.name;
      this.read = options.read;
      this.serializedSize = options.serializedSize ?? (() => null);
      __privateSet(this, _write, options.write);
      __privateSet(this, _serialize, options.serialize ?? ((value, options2) => {
        const writer = new BcsWriter({
          initialSize: this.serializedSize(value) ?? void 0,
          ...options2
        });
        __privateGet(this, _write).call(this, value, writer);
        return writer.toBytes();
      }));
      this.validate = options.validate ?? (() => {
      });
    }
    write(value, writer) {
      this.validate(value);
      __privateGet(this, _write).call(this, value, writer);
    }
    serialize(value, options) {
      this.validate(value);
      return new SerializedBcs(this, __privateGet(this, _serialize).call(this, value, options));
    }
    parse(bytes) {
      const reader = new BcsReader(bytes);
      return this.read(reader);
    }
    fromHex(hex) {
      return this.parse(fromHex(hex));
    }
    fromBase58(b64) {
      return this.parse(fromBase58(b64));
    }
    fromBase64(b64) {
      return this.parse(fromBase64(b64));
    }
    transform({
      name,
      input,
      output,
      validate
    }) {
      return new _BcsType2({
        name: name ?? this.name,
        read: (reader) => output(this.read(reader)),
        write: (value, writer) => __privateGet(this, _write).call(this, input(value), writer),
        serializedSize: (value) => this.serializedSize(input(value)),
        serialize: (value, options) => __privateGet(this, _serialize).call(this, input(value), options),
        validate: (value) => {
          validate?.(value);
          this.validate(input(value));
        }
      });
    }
  };
  _write = /* @__PURE__ */ new WeakMap();
  _serialize = /* @__PURE__ */ new WeakMap();
  var BcsType = _BcsType;
  var SERIALIZED_BCS_BRAND = Symbol.for("@mysten/serialized-bcs");
  var SerializedBcs = class {
    constructor(type, schema) {
      __privateAdd(this, _schema);
      __privateAdd(this, _bytes);
      __privateSet(this, _schema, type);
      __privateSet(this, _bytes, schema);
    }
    // Used to brand SerializedBcs so that they can be identified, even between multiple copies
    // of the @mysten/bcs package are installed
    get [SERIALIZED_BCS_BRAND]() {
      return true;
    }
    toBytes() {
      return __privateGet(this, _bytes);
    }
    toHex() {
      return toHex(__privateGet(this, _bytes));
    }
    toBase64() {
      return toBase64(__privateGet(this, _bytes));
    }
    toBase58() {
      return toBase58(__privateGet(this, _bytes));
    }
    parse() {
      return __privateGet(this, _schema).parse(__privateGet(this, _bytes));
    }
  };
  _schema = /* @__PURE__ */ new WeakMap();
  _bytes = /* @__PURE__ */ new WeakMap();
  function fixedSizeBcsType({
    size,
    ...options
  }) {
    return new BcsType({
      ...options,
      serializedSize: () => size
    });
  }
  function uIntBcsType({
    readMethod,
    writeMethod,
    ...options
  }) {
    return fixedSizeBcsType({
      ...options,
      read: (reader) => reader[readMethod](),
      write: (value, writer) => writer[writeMethod](value),
      validate: (value) => {
        if (value < 0 || value > options.maxValue) {
          throw new TypeError(
            `Invalid ${options.name} value: ${value}. Expected value in range 0-${options.maxValue}`
          );
        }
        options.validate?.(value);
      }
    });
  }
  function bigUIntBcsType({
    readMethod,
    writeMethod,
    ...options
  }) {
    return fixedSizeBcsType({
      ...options,
      read: (reader) => reader[readMethod](),
      write: (value, writer) => writer[writeMethod](BigInt(value)),
      validate: (val) => {
        const value = BigInt(val);
        if (value < 0 || value > options.maxValue) {
          throw new TypeError(
            `Invalid ${options.name} value: ${value}. Expected value in range 0-${options.maxValue}`
          );
        }
        options.validate?.(value);
      }
    });
  }
  function dynamicSizeBcsType({
    serialize,
    ...options
  }) {
    const type = new BcsType({
      ...options,
      serialize,
      write: (value, writer) => {
        for (const byte of type.serialize(value).toBytes()) {
          writer.write8(byte);
        }
      }
    });
    return type;
  }
  function stringLikeBcsType({
    toBytes,
    fromBytes,
    ...options
  }) {
    return new BcsType({
      ...options,
      read: (reader) => {
        const length = reader.readULEB();
        const bytes = reader.readBytes(length);
        return fromBytes(bytes);
      },
      write: (hex, writer) => {
        const bytes = toBytes(hex);
        writer.writeULEB(bytes.length);
        for (let i = 0; i < bytes.length; i++) {
          writer.write8(bytes[i]);
        }
      },
      serialize: (value) => {
        const bytes = toBytes(value);
        const size = ulebEncode(bytes.length);
        const result = new Uint8Array(size.length + bytes.length);
        result.set(size, 0);
        result.set(bytes, size.length);
        return result;
      },
      validate: (value) => {
        if (typeof value !== "string") {
          throw new TypeError(`Invalid ${options.name} value: ${value}. Expected string`);
        }
        options.validate?.(value);
      }
    });
  }
  function lazyBcsType(cb) {
    let lazyType = null;
    function getType() {
      if (!lazyType) {
        lazyType = cb();
      }
      return lazyType;
    }
    return new BcsType({
      name: "lazy",
      read: (data) => getType().read(data),
      serializedSize: (value) => getType().serializedSize(value),
      write: (value, writer) => getType().write(value, writer),
      serialize: (value, options) => getType().serialize(value, options).toBytes()
    });
  }

  // node_modules/@mysten/bcs/dist/esm/bcs.js
  init_dirname();
  init_buffer2();
  init_process2();
  var bcs = {
    /**
     * Creates a BcsType that can be used to read and write an 8-bit unsigned integer.
     * @example
     * bcs.u8().serialize(255).toBytes() // Uint8Array [ 255 ]
     */
    u8(options) {
      return uIntBcsType({
        name: "u8",
        readMethod: "read8",
        writeMethod: "write8",
        size: 1,
        maxValue: 2 ** 8 - 1,
        ...options
      });
    },
    /**
     * Creates a BcsType that can be used to read and write a 16-bit unsigned integer.
     * @example
     * bcs.u16().serialize(65535).toBytes() // Uint8Array [ 255, 255 ]
     */
    u16(options) {
      return uIntBcsType({
        name: "u16",
        readMethod: "read16",
        writeMethod: "write16",
        size: 2,
        maxValue: 2 ** 16 - 1,
        ...options
      });
    },
    /**
     * Creates a BcsType that can be used to read and write a 32-bit unsigned integer.
     * @example
     * bcs.u32().serialize(4294967295).toBytes() // Uint8Array [ 255, 255, 255, 255 ]
     */
    u32(options) {
      return uIntBcsType({
        name: "u32",
        readMethod: "read32",
        writeMethod: "write32",
        size: 4,
        maxValue: 2 ** 32 - 1,
        ...options
      });
    },
    /**
     * Creates a BcsType that can be used to read and write a 64-bit unsigned integer.
     * @example
     * bcs.u64().serialize(1).toBytes() // Uint8Array [ 1, 0, 0, 0, 0, 0, 0, 0 ]
     */
    u64(options) {
      return bigUIntBcsType({
        name: "u64",
        readMethod: "read64",
        writeMethod: "write64",
        size: 8,
        maxValue: 2n ** 64n - 1n,
        ...options
      });
    },
    /**
     * Creates a BcsType that can be used to read and write a 128-bit unsigned integer.
     * @example
     * bcs.u128().serialize(1).toBytes() // Uint8Array [ 1, ..., 0 ]
     */
    u128(options) {
      return bigUIntBcsType({
        name: "u128",
        readMethod: "read128",
        writeMethod: "write128",
        size: 16,
        maxValue: 2n ** 128n - 1n,
        ...options
      });
    },
    /**
     * Creates a BcsType that can be used to read and write a 256-bit unsigned integer.
     * @example
     * bcs.u256().serialize(1).toBytes() // Uint8Array [ 1, ..., 0 ]
     */
    u256(options) {
      return bigUIntBcsType({
        name: "u256",
        readMethod: "read256",
        writeMethod: "write256",
        size: 32,
        maxValue: 2n ** 256n - 1n,
        ...options
      });
    },
    /**
     * Creates a BcsType that can be used to read and write boolean values.
     * @example
     * bcs.bool().serialize(true).toBytes() // Uint8Array [ 1 ]
     */
    bool(options) {
      return fixedSizeBcsType({
        name: "bool",
        size: 1,
        read: (reader) => reader.read8() === 1,
        write: (value, writer) => writer.write8(value ? 1 : 0),
        ...options,
        validate: (value) => {
          options?.validate?.(value);
          if (typeof value !== "boolean") {
            throw new TypeError(`Expected boolean, found ${typeof value}`);
          }
        }
      });
    },
    /**
     * Creates a BcsType that can be used to read and write unsigned LEB encoded integers
     * @example
     *
     */
    uleb128(options) {
      return dynamicSizeBcsType({
        name: "uleb128",
        read: (reader) => reader.readULEB(),
        serialize: (value) => {
          return Uint8Array.from(ulebEncode(value));
        },
        ...options
      });
    },
    /**
     * Creates a BcsType representing a fixed length byte array
     * @param size The number of bytes this types represents
     * @example
     * bcs.bytes(3).serialize(new Uint8Array([1, 2, 3])).toBytes() // Uint8Array [1, 2, 3]
     */
    bytes(size, options) {
      return fixedSizeBcsType({
        name: `bytes[${size}]`,
        size,
        read: (reader) => reader.readBytes(size),
        write: (value, writer) => {
          const array = new Uint8Array(value);
          for (let i = 0; i < size; i++) {
            writer.write8(array[i] ?? 0);
          }
        },
        ...options,
        validate: (value) => {
          options?.validate?.(value);
          if (!value || typeof value !== "object" || !("length" in value)) {
            throw new TypeError(`Expected array, found ${typeof value}`);
          }
          if (value.length !== size) {
            throw new TypeError(`Expected array of length ${size}, found ${value.length}`);
          }
        }
      });
    },
    /**
     * Creates a BcsType that can ser/de string values.  Strings will be UTF-8 encoded
     * @example
     * bcs.string().serialize('a').toBytes() // Uint8Array [ 1, 97 ]
     */
    string(options) {
      return stringLikeBcsType({
        name: "string",
        toBytes: (value) => new TextEncoder().encode(value),
        fromBytes: (bytes) => new TextDecoder().decode(bytes),
        ...options
      });
    },
    /**
     * Creates a BcsType that represents a fixed length array of a given type
     * @param size The number of elements in the array
     * @param type The BcsType of each element in the array
     * @example
     * bcs.fixedArray(3, bcs.u8()).serialize([1, 2, 3]).toBytes() // Uint8Array [ 1, 2, 3 ]
     */
    fixedArray(size, type, options) {
      return new BcsType({
        name: `${type.name}[${size}]`,
        read: (reader) => {
          const result = new Array(size);
          for (let i = 0; i < size; i++) {
            result[i] = type.read(reader);
          }
          return result;
        },
        write: (value, writer) => {
          for (const item of value) {
            type.write(item, writer);
          }
        },
        ...options,
        validate: (value) => {
          options?.validate?.(value);
          if (!value || typeof value !== "object" || !("length" in value)) {
            throw new TypeError(`Expected array, found ${typeof value}`);
          }
          if (value.length !== size) {
            throw new TypeError(`Expected array of length ${size}, found ${value.length}`);
          }
        }
      });
    },
    /**
     * Creates a BcsType representing an optional value
     * @param type The BcsType of the optional value
     * @example
     * bcs.option(bcs.u8()).serialize(null).toBytes() // Uint8Array [ 0 ]
     * bcs.option(bcs.u8()).serialize(1).toBytes() // Uint8Array [ 1, 1 ]
     */
    option(type) {
      return bcs.enum(`Option<${type.name}>`, {
        None: null,
        Some: type
      }).transform({
        input: (value) => {
          if (value == null) {
            return { None: true };
          }
          return { Some: value };
        },
        output: (value) => {
          if (value.$kind === "Some") {
            return value.Some;
          }
          return null;
        }
      });
    },
    /**
     * Creates a BcsType representing a variable length vector of a given type
     * @param type The BcsType of each element in the vector
     *
     * @example
     * bcs.vector(bcs.u8()).toBytes([1, 2, 3]) // Uint8Array [ 3, 1, 2, 3 ]
     */
    vector(type, options) {
      return new BcsType({
        name: `vector<${type.name}>`,
        read: (reader) => {
          const length = reader.readULEB();
          const result = new Array(length);
          for (let i = 0; i < length; i++) {
            result[i] = type.read(reader);
          }
          return result;
        },
        write: (value, writer) => {
          writer.writeULEB(value.length);
          for (const item of value) {
            type.write(item, writer);
          }
        },
        ...options,
        validate: (value) => {
          options?.validate?.(value);
          if (!value || typeof value !== "object" || !("length" in value)) {
            throw new TypeError(`Expected array, found ${typeof value}`);
          }
        }
      });
    },
    /**
     * Creates a BcsType representing a tuple of a given set of types
     * @param types The BcsTypes for each element in the tuple
     *
     * @example
     * const tuple = bcs.tuple([bcs.u8(), bcs.string(), bcs.bool()])
     * tuple.serialize([1, 'a', true]).toBytes() // Uint8Array [ 1, 1, 97, 1 ]
     */
    tuple(types, options) {
      return new BcsType({
        name: `(${types.map((t) => t.name).join(", ")})`,
        serializedSize: (values) => {
          let total = 0;
          for (let i = 0; i < types.length; i++) {
            const size = types[i].serializedSize(values[i]);
            if (size == null) {
              return null;
            }
            total += size;
          }
          return total;
        },
        read: (reader) => {
          const result = [];
          for (const type of types) {
            result.push(type.read(reader));
          }
          return result;
        },
        write: (value, writer) => {
          for (let i = 0; i < types.length; i++) {
            types[i].write(value[i], writer);
          }
        },
        ...options,
        validate: (value) => {
          options?.validate?.(value);
          if (!Array.isArray(value)) {
            throw new TypeError(`Expected array, found ${typeof value}`);
          }
          if (value.length !== types.length) {
            throw new TypeError(`Expected array of length ${types.length}, found ${value.length}`);
          }
        }
      });
    },
    /**
     * Creates a BcsType representing a struct of a given set of fields
     * @param name The name of the struct
     * @param fields The fields of the struct. The order of the fields affects how data is serialized and deserialized
     *
     * @example
     * const struct = bcs.struct('MyStruct', {
     *  a: bcs.u8(),
     *  b: bcs.string(),
     * })
     * struct.serialize({ a: 1, b: 'a' }).toBytes() // Uint8Array [ 1, 1, 97 ]
     */
    struct(name, fields, options) {
      const canonicalOrder = Object.entries(fields);
      return new BcsType({
        name,
        serializedSize: (values) => {
          let total = 0;
          for (const [field, type] of canonicalOrder) {
            const size = type.serializedSize(values[field]);
            if (size == null) {
              return null;
            }
            total += size;
          }
          return total;
        },
        read: (reader) => {
          const result = {};
          for (const [field, type] of canonicalOrder) {
            result[field] = type.read(reader);
          }
          return result;
        },
        write: (value, writer) => {
          for (const [field, type] of canonicalOrder) {
            type.write(value[field], writer);
          }
        },
        ...options,
        validate: (value) => {
          options?.validate?.(value);
          if (typeof value !== "object" || value == null) {
            throw new TypeError(`Expected object, found ${typeof value}`);
          }
        }
      });
    },
    /**
     * Creates a BcsType representing an enum of a given set of options
     * @param name The name of the enum
     * @param values The values of the enum. The order of the values affects how data is serialized and deserialized.
     * null can be used to represent a variant with no data.
     *
     * @example
     * const enum = bcs.enum('MyEnum', {
     *   A: bcs.u8(),
     *   B: bcs.string(),
     *   C: null,
     * })
     * enum.serialize({ A: 1 }).toBytes() // Uint8Array [ 0, 1 ]
     * enum.serialize({ B: 'a' }).toBytes() // Uint8Array [ 1, 1, 97 ]
     * enum.serialize({ C: true }).toBytes() // Uint8Array [ 2 ]
     */
    enum(name, values, options) {
      const canonicalOrder = Object.entries(values);
      return new BcsType({
        name,
        read: (reader) => {
          const index = reader.readULEB();
          const enumEntry = canonicalOrder[index];
          if (!enumEntry) {
            throw new TypeError(`Unknown value ${index} for enum ${name}`);
          }
          const [kind, type] = enumEntry;
          return {
            [kind]: type?.read(reader) ?? true,
            $kind: kind
          };
        },
        write: (value, writer) => {
          const [name2, val] = Object.entries(value).filter(
            ([name3]) => Object.hasOwn(values, name3)
          )[0];
          for (let i = 0; i < canonicalOrder.length; i++) {
            const [optionName, optionType] = canonicalOrder[i];
            if (optionName === name2) {
              writer.writeULEB(i);
              optionType?.write(val, writer);
              return;
            }
          }
        },
        ...options,
        validate: (value) => {
          options?.validate?.(value);
          if (typeof value !== "object" || value == null) {
            throw new TypeError(`Expected object, found ${typeof value}`);
          }
          const keys = Object.keys(value).filter(
            (k) => value[k] !== void 0 && Object.hasOwn(values, k)
          );
          if (keys.length !== 1) {
            throw new TypeError(
              `Expected object with one key, but found ${keys.length} for type ${name}}`
            );
          }
          const [variant] = keys;
          if (!Object.hasOwn(values, variant)) {
            throw new TypeError(`Invalid enum variant ${variant}`);
          }
        }
      });
    },
    /**
     * Creates a BcsType representing a map of a given key and value type
     * @param keyType The BcsType of the key
     * @param valueType The BcsType of the value
     * @example
     * const map = bcs.map(bcs.u8(), bcs.string())
     * map.serialize(new Map([[2, 'a']])).toBytes() // Uint8Array [ 1, 2, 1, 97 ]
     */
    map(keyType, valueType) {
      return bcs.vector(bcs.tuple([keyType, valueType])).transform({
        name: `Map<${keyType.name}, ${valueType.name}>`,
        input: (value) => {
          return [...value.entries()];
        },
        output: (value) => {
          const result = /* @__PURE__ */ new Map();
          for (const [key, val] of value) {
            result.set(key, val);
          }
          return result;
        }
      });
    },
    /**
     * Creates a BcsType that wraps another BcsType which is lazily evaluated. This is useful for creating recursive types.
     * @param cb A callback that returns the BcsType
     */
    lazy(cb) {
      return lazyBcsType(cb);
    }
  };

  // node_modules/@mysten/sui/dist/esm/bcs/bcs.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/sui/dist/esm/utils/sui-types.js
  init_dirname();
  init_buffer2();
  init_process2();
  var SUI_ADDRESS_LENGTH = 32;
  function isValidSuiAddress(value) {
    return isHex(value) && getHexByteLength(value) === SUI_ADDRESS_LENGTH;
  }
  function normalizeSuiAddress(value, forceAdd0x = false) {
    let address = value.toLowerCase();
    if (!forceAdd0x && address.startsWith("0x")) {
      address = address.slice(2);
    }
    return `0x${address.padStart(SUI_ADDRESS_LENGTH * 2, "0")}`;
  }
  function isHex(value) {
    return /^(0x|0X)?[a-fA-F0-9]+$/.test(value) && value.length % 2 === 0;
  }
  function getHexByteLength(value) {
    return /^(0x|0X)/.test(value) ? (value.length - 2) / 2 : value.length / 2;
  }

  // node_modules/@mysten/sui/dist/esm/bcs/type-tag-serializer.js
  init_dirname();
  init_buffer2();
  init_process2();
  var VECTOR_REGEX = /^vector<(.+)>$/;
  var STRUCT_REGEX = /^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;
  var TypeTagSerializer = class _TypeTagSerializer {
    static parseFromStr(str, normalizeAddress = false) {
      if (str === "address") {
        return { address: null };
      } else if (str === "bool") {
        return { bool: null };
      } else if (str === "u8") {
        return { u8: null };
      } else if (str === "u16") {
        return { u16: null };
      } else if (str === "u32") {
        return { u32: null };
      } else if (str === "u64") {
        return { u64: null };
      } else if (str === "u128") {
        return { u128: null };
      } else if (str === "u256") {
        return { u256: null };
      } else if (str === "signer") {
        return { signer: null };
      }
      const vectorMatch = str.match(VECTOR_REGEX);
      if (vectorMatch) {
        return {
          vector: _TypeTagSerializer.parseFromStr(vectorMatch[1], normalizeAddress)
        };
      }
      const structMatch = str.match(STRUCT_REGEX);
      if (structMatch) {
        const address = normalizeAddress ? normalizeSuiAddress(structMatch[1]) : structMatch[1];
        return {
          struct: {
            address,
            module: structMatch[2],
            name: structMatch[3],
            typeParams: structMatch[5] === void 0 ? [] : _TypeTagSerializer.parseStructTypeArgs(structMatch[5], normalizeAddress)
          }
        };
      }
      throw new Error(`Encountered unexpected token when parsing type args for ${str}`);
    }
    static parseStructTypeArgs(str, normalizeAddress = false) {
      return splitGenericParameters(str).map(
        (tok) => _TypeTagSerializer.parseFromStr(tok, normalizeAddress)
      );
    }
    static tagToString(tag) {
      if ("bool" in tag) {
        return "bool";
      }
      if ("u8" in tag) {
        return "u8";
      }
      if ("u16" in tag) {
        return "u16";
      }
      if ("u32" in tag) {
        return "u32";
      }
      if ("u64" in tag) {
        return "u64";
      }
      if ("u128" in tag) {
        return "u128";
      }
      if ("u256" in tag) {
        return "u256";
      }
      if ("address" in tag) {
        return "address";
      }
      if ("signer" in tag) {
        return "signer";
      }
      if ("vector" in tag) {
        return `vector<${_TypeTagSerializer.tagToString(tag.vector)}>`;
      }
      if ("struct" in tag) {
        const struct = tag.struct;
        const typeParams = struct.typeParams.map(_TypeTagSerializer.tagToString).join(", ");
        return `${struct.address}::${struct.module}::${struct.name}${typeParams ? `<${typeParams}>` : ""}`;
      }
      throw new Error("Invalid TypeTag");
    }
  };

  // node_modules/@mysten/sui/dist/esm/bcs/bcs.js
  function unsafe_u64(options) {
    return bcs.u64({
      name: "unsafe_u64",
      ...options
    }).transform({
      input: (val) => val,
      output: (val) => Number(val)
    });
  }
  function optionEnum(type) {
    return bcs.enum("Option", {
      None: null,
      Some: type
    });
  }
  var Address = bcs.bytes(SUI_ADDRESS_LENGTH).transform({
    validate: (val) => {
      const address = typeof val === "string" ? val : toHex(val);
      if (!address || !isValidSuiAddress(normalizeSuiAddress(address))) {
        throw new Error(`Invalid Sui address ${address}`);
      }
    },
    input: (val) => typeof val === "string" ? fromHex(normalizeSuiAddress(val)) : val,
    output: (val) => normalizeSuiAddress(toHex(val))
  });
  var ObjectDigest = bcs.vector(bcs.u8()).transform({
    name: "ObjectDigest",
    input: (value) => fromBase58(value),
    output: (value) => toBase58(new Uint8Array(value)),
    validate: (value) => {
      if (fromBase58(value).length !== 32) {
        throw new Error("ObjectDigest must be 32 bytes");
      }
    }
  });
  var SuiObjectRef = bcs.struct("SuiObjectRef", {
    objectId: Address,
    version: bcs.u64(),
    digest: ObjectDigest
  });
  var SharedObjectRef = bcs.struct("SharedObjectRef", {
    objectId: Address,
    initialSharedVersion: bcs.u64(),
    mutable: bcs.bool()
  });
  var ObjectArg = bcs.enum("ObjectArg", {
    ImmOrOwnedObject: SuiObjectRef,
    SharedObject: SharedObjectRef,
    Receiving: SuiObjectRef
  });
  var CallArg = bcs.enum("CallArg", {
    Pure: bcs.struct("Pure", {
      bytes: bcs.vector(bcs.u8()).transform({
        input: (val) => typeof val === "string" ? fromBase64(val) : val,
        output: (val) => toBase64(new Uint8Array(val))
      })
    }),
    Object: ObjectArg
  });
  var InnerTypeTag = bcs.enum("TypeTag", {
    bool: null,
    u8: null,
    u64: null,
    u128: null,
    address: null,
    signer: null,
    vector: bcs.lazy(() => InnerTypeTag),
    struct: bcs.lazy(() => StructTag),
    u16: null,
    u32: null,
    u256: null
  });
  var TypeTag = InnerTypeTag.transform({
    input: (typeTag) => typeof typeTag === "string" ? TypeTagSerializer.parseFromStr(typeTag, true) : typeTag,
    output: (typeTag) => TypeTagSerializer.tagToString(typeTag)
  });
  var Argument = bcs.enum("Argument", {
    GasCoin: null,
    Input: bcs.u16(),
    Result: bcs.u16(),
    NestedResult: bcs.tuple([bcs.u16(), bcs.u16()])
  });
  var ProgrammableMoveCall = bcs.struct("ProgrammableMoveCall", {
    package: Address,
    module: bcs.string(),
    function: bcs.string(),
    typeArguments: bcs.vector(TypeTag),
    arguments: bcs.vector(Argument)
  });
  var Command = bcs.enum("Command", {
    /**
     * A Move Call - any public Move function can be called via
     * this transaction. The results can be used that instant to pass
     * into the next transaction.
     */
    MoveCall: ProgrammableMoveCall,
    /**
     * Transfer vector of objects to a receiver.
     */
    TransferObjects: bcs.struct("TransferObjects", {
      objects: bcs.vector(Argument),
      address: Argument
    }),
    // /**
    //  * Split `amount` from a `coin`.
    //  */
    SplitCoins: bcs.struct("SplitCoins", {
      coin: Argument,
      amounts: bcs.vector(Argument)
    }),
    // /**
    //  * Merge Vector of Coins (`sources`) into a `destination`.
    //  */
    MergeCoins: bcs.struct("MergeCoins", {
      destination: Argument,
      sources: bcs.vector(Argument)
    }),
    // /**
    //  * Publish a Move module.
    //  */
    Publish: bcs.struct("Publish", {
      modules: bcs.vector(
        bcs.vector(bcs.u8()).transform({
          input: (val) => typeof val === "string" ? fromBase64(val) : val,
          output: (val) => toBase64(new Uint8Array(val))
        })
      ),
      dependencies: bcs.vector(Address)
    }),
    // /**
    //  * Build a vector of objects using the input arguments.
    //  * It is impossible to export construct a `vector<T: key>` otherwise,
    //  * so this call serves a utility function.
    //  */
    MakeMoveVec: bcs.struct("MakeMoveVec", {
      type: optionEnum(TypeTag).transform({
        input: (val) => val === null ? {
          None: true
        } : {
          Some: val
        },
        output: (val) => val.Some ?? null
      }),
      elements: bcs.vector(Argument)
    }),
    Upgrade: bcs.struct("Upgrade", {
      modules: bcs.vector(
        bcs.vector(bcs.u8()).transform({
          input: (val) => typeof val === "string" ? fromBase64(val) : val,
          output: (val) => toBase64(new Uint8Array(val))
        })
      ),
      dependencies: bcs.vector(Address),
      package: Address,
      ticket: Argument
    })
  });
  var ProgrammableTransaction = bcs.struct("ProgrammableTransaction", {
    inputs: bcs.vector(CallArg),
    commands: bcs.vector(Command)
  });
  var TransactionKind = bcs.enum("TransactionKind", {
    ProgrammableTransaction,
    ChangeEpoch: null,
    Genesis: null,
    ConsensusCommitPrologue: null
  });
  var TransactionExpiration = bcs.enum("TransactionExpiration", {
    None: null,
    Epoch: unsafe_u64()
  });
  var StructTag = bcs.struct("StructTag", {
    address: Address,
    module: bcs.string(),
    name: bcs.string(),
    typeParams: bcs.vector(InnerTypeTag)
  });
  var GasData = bcs.struct("GasData", {
    payment: bcs.vector(SuiObjectRef),
    owner: Address,
    price: bcs.u64(),
    budget: bcs.u64()
  });
  var TransactionDataV1 = bcs.struct("TransactionDataV1", {
    kind: TransactionKind,
    sender: Address,
    gasData: GasData,
    expiration: TransactionExpiration
  });
  var TransactionData = bcs.enum("TransactionData", {
    V1: TransactionDataV1
  });
  var IntentScope = bcs.enum("IntentScope", {
    TransactionData: null,
    TransactionEffects: null,
    CheckpointSummary: null,
    PersonalMessage: null
  });
  var IntentVersion = bcs.enum("IntentVersion", {
    V0: null
  });
  var AppId = bcs.enum("AppId", {
    Sui: null
  });
  var Intent = bcs.struct("Intent", {
    scope: IntentScope,
    version: IntentVersion,
    appId: AppId
  });
  function IntentMessage(T) {
    return bcs.struct(`IntentMessage<${T.name}>`, {
      intent: Intent,
      value: T
    });
  }
  var CompressedSignature = bcs.enum("CompressedSignature", {
    ED25519: bcs.fixedArray(64, bcs.u8()),
    Secp256k1: bcs.fixedArray(64, bcs.u8()),
    Secp256r1: bcs.fixedArray(64, bcs.u8()),
    ZkLogin: bcs.vector(bcs.u8())
  });
  var PublicKey = bcs.enum("PublicKey", {
    ED25519: bcs.fixedArray(32, bcs.u8()),
    Secp256k1: bcs.fixedArray(33, bcs.u8()),
    Secp256r1: bcs.fixedArray(33, bcs.u8()),
    ZkLogin: bcs.vector(bcs.u8())
  });
  var MultiSigPkMap = bcs.struct("MultiSigPkMap", {
    pubKey: PublicKey,
    weight: bcs.u8()
  });
  var MultiSigPublicKey = bcs.struct("MultiSigPublicKey", {
    pk_map: bcs.vector(MultiSigPkMap),
    threshold: bcs.u16()
  });
  var MultiSig = bcs.struct("MultiSig", {
    sigs: bcs.vector(CompressedSignature),
    bitmap: bcs.u16(),
    multisig_pk: MultiSigPublicKey
  });
  var base64String = bcs.vector(bcs.u8()).transform({
    input: (val) => typeof val === "string" ? fromBase64(val) : val,
    output: (val) => toBase64(new Uint8Array(val))
  });
  var SenderSignedTransaction = bcs.struct("SenderSignedTransaction", {
    intentMessage: IntentMessage(TransactionData),
    txSignatures: bcs.vector(base64String)
  });
  var SenderSignedData = bcs.vector(SenderSignedTransaction, {
    name: "SenderSignedData"
  });
  var PasskeyAuthenticator = bcs.struct("PasskeyAuthenticator", {
    authenticatorData: bcs.vector(bcs.u8()),
    clientDataJson: bcs.string(),
    userSignature: bcs.vector(bcs.u8())
  });

  // node_modules/@mysten/sui/dist/esm/bcs/effects.js
  init_dirname();
  init_buffer2();
  init_process2();
  var PackageUpgradeError = bcs.enum("PackageUpgradeError", {
    UnableToFetchPackage: bcs.struct("UnableToFetchPackage", { packageId: Address }),
    NotAPackage: bcs.struct("NotAPackage", { objectId: Address }),
    IncompatibleUpgrade: null,
    DigestDoesNotMatch: bcs.struct("DigestDoesNotMatch", { digest: bcs.vector(bcs.u8()) }),
    UnknownUpgradePolicy: bcs.struct("UnknownUpgradePolicy", { policy: bcs.u8() }),
    PackageIDDoesNotMatch: bcs.struct("PackageIDDoesNotMatch", {
      packageId: Address,
      ticketId: Address
    })
  });
  var ModuleId = bcs.struct("ModuleId", {
    address: Address,
    name: bcs.string()
  });
  var MoveLocation = bcs.struct("MoveLocation", {
    module: ModuleId,
    function: bcs.u16(),
    instruction: bcs.u16(),
    functionName: bcs.option(bcs.string())
  });
  var CommandArgumentError = bcs.enum("CommandArgumentError", {
    TypeMismatch: null,
    InvalidBCSBytes: null,
    InvalidUsageOfPureArg: null,
    InvalidArgumentToPrivateEntryFunction: null,
    IndexOutOfBounds: bcs.struct("IndexOutOfBounds", { idx: bcs.u16() }),
    SecondaryIndexOutOfBounds: bcs.struct("SecondaryIndexOutOfBounds", {
      resultIdx: bcs.u16(),
      secondaryIdx: bcs.u16()
    }),
    InvalidResultArity: bcs.struct("InvalidResultArity", { resultIdx: bcs.u16() }),
    InvalidGasCoinUsage: null,
    InvalidValueUsage: null,
    InvalidObjectByValue: null,
    InvalidObjectByMutRef: null,
    SharedObjectOperationNotAllowed: null
  });
  var TypeArgumentError = bcs.enum("TypeArgumentError", {
    TypeNotFound: null,
    ConstraintNotSatisfied: null
  });
  var ExecutionFailureStatus = bcs.enum("ExecutionFailureStatus", {
    InsufficientGas: null,
    InvalidGasObject: null,
    InvariantViolation: null,
    FeatureNotYetSupported: null,
    MoveObjectTooBig: bcs.struct("MoveObjectTooBig", {
      objectSize: bcs.u64(),
      maxObjectSize: bcs.u64()
    }),
    MovePackageTooBig: bcs.struct("MovePackageTooBig", {
      objectSize: bcs.u64(),
      maxObjectSize: bcs.u64()
    }),
    CircularObjectOwnership: bcs.struct("CircularObjectOwnership", { object: Address }),
    InsufficientCoinBalance: null,
    CoinBalanceOverflow: null,
    PublishErrorNonZeroAddress: null,
    SuiMoveVerificationError: null,
    MovePrimitiveRuntimeError: bcs.option(MoveLocation),
    MoveAbort: bcs.tuple([MoveLocation, bcs.u64()]),
    VMVerificationOrDeserializationError: null,
    VMInvariantViolation: null,
    FunctionNotFound: null,
    ArityMismatch: null,
    TypeArityMismatch: null,
    NonEntryFunctionInvoked: null,
    CommandArgumentError: bcs.struct("CommandArgumentError", {
      argIdx: bcs.u16(),
      kind: CommandArgumentError
    }),
    TypeArgumentError: bcs.struct("TypeArgumentError", {
      argumentIdx: bcs.u16(),
      kind: TypeArgumentError
    }),
    UnusedValueWithoutDrop: bcs.struct("UnusedValueWithoutDrop", {
      resultIdx: bcs.u16(),
      secondaryIdx: bcs.u16()
    }),
    InvalidPublicFunctionReturnType: bcs.struct("InvalidPublicFunctionReturnType", {
      idx: bcs.u16()
    }),
    InvalidTransferObject: null,
    EffectsTooLarge: bcs.struct("EffectsTooLarge", { currentSize: bcs.u64(), maxSize: bcs.u64() }),
    PublishUpgradeMissingDependency: null,
    PublishUpgradeDependencyDowngrade: null,
    PackageUpgradeError: bcs.struct("PackageUpgradeError", { upgradeError: PackageUpgradeError }),
    WrittenObjectsTooLarge: bcs.struct("WrittenObjectsTooLarge", {
      currentSize: bcs.u64(),
      maxSize: bcs.u64()
    }),
    CertificateDenied: null,
    SuiMoveVerificationTimedout: null,
    SharedObjectOperationNotAllowed: null,
    InputObjectDeleted: null,
    ExecutionCancelledDueToSharedObjectCongestion: bcs.struct(
      "ExecutionCancelledDueToSharedObjectCongestion",
      {
        congestedObjects: bcs.vector(Address)
      }
    ),
    AddressDeniedForCoin: bcs.struct("AddressDeniedForCoin", {
      address: Address,
      coinType: bcs.string()
    }),
    CoinTypeGlobalPause: bcs.struct("CoinTypeGlobalPause", { coinType: bcs.string() }),
    ExecutionCancelledDueToRandomnessUnavailable: null
  });
  var ExecutionStatus = bcs.enum("ExecutionStatus", {
    Success: null,
    Failed: bcs.struct("ExecutionFailed", {
      error: ExecutionFailureStatus,
      command: bcs.option(bcs.u64())
    })
  });
  var GasCostSummary = bcs.struct("GasCostSummary", {
    computationCost: bcs.u64(),
    storageCost: bcs.u64(),
    storageRebate: bcs.u64(),
    nonRefundableStorageFee: bcs.u64()
  });
  var Owner = bcs.enum("Owner", {
    AddressOwner: Address,
    ObjectOwner: Address,
    Shared: bcs.struct("Shared", {
      initialSharedVersion: bcs.u64()
    }),
    Immutable: null
  });
  var TransactionEffectsV1 = bcs.struct("TransactionEffectsV1", {
    status: ExecutionStatus,
    executedEpoch: bcs.u64(),
    gasUsed: GasCostSummary,
    modifiedAtVersions: bcs.vector(bcs.tuple([Address, bcs.u64()])),
    sharedObjects: bcs.vector(SuiObjectRef),
    transactionDigest: ObjectDigest,
    created: bcs.vector(bcs.tuple([SuiObjectRef, Owner])),
    mutated: bcs.vector(bcs.tuple([SuiObjectRef, Owner])),
    unwrapped: bcs.vector(bcs.tuple([SuiObjectRef, Owner])),
    deleted: bcs.vector(SuiObjectRef),
    unwrappedThenDeleted: bcs.vector(SuiObjectRef),
    wrapped: bcs.vector(SuiObjectRef),
    gasObject: bcs.tuple([SuiObjectRef, Owner]),
    eventsDigest: bcs.option(ObjectDigest),
    dependencies: bcs.vector(ObjectDigest)
  });
  var VersionDigest = bcs.tuple([bcs.u64(), ObjectDigest]);
  var ObjectIn = bcs.enum("ObjectIn", {
    NotExist: null,
    Exist: bcs.tuple([VersionDigest, Owner])
  });
  var ObjectOut = bcs.enum("ObjectOut", {
    NotExist: null,
    ObjectWrite: bcs.tuple([ObjectDigest, Owner]),
    PackageWrite: VersionDigest
  });
  var IDOperation = bcs.enum("IDOperation", {
    None: null,
    Created: null,
    Deleted: null
  });
  var EffectsObjectChange = bcs.struct("EffectsObjectChange", {
    inputState: ObjectIn,
    outputState: ObjectOut,
    idOperation: IDOperation
  });
  var UnchangedSharedKind = bcs.enum("UnchangedSharedKind", {
    ReadOnlyRoot: VersionDigest,
    MutateDeleted: bcs.u64(),
    ReadDeleted: bcs.u64(),
    Cancelled: bcs.u64(),
    PerEpochConfig: null
  });
  var TransactionEffectsV2 = bcs.struct("TransactionEffectsV2", {
    status: ExecutionStatus,
    executedEpoch: bcs.u64(),
    gasUsed: GasCostSummary,
    transactionDigest: ObjectDigest,
    gasObjectIndex: bcs.option(bcs.u32()),
    eventsDigest: bcs.option(ObjectDigest),
    dependencies: bcs.vector(ObjectDigest),
    lamportVersion: bcs.u64(),
    changedObjects: bcs.vector(bcs.tuple([Address, EffectsObjectChange])),
    unchangedSharedObjects: bcs.vector(bcs.tuple([Address, UnchangedSharedKind])),
    auxDataDigest: bcs.option(ObjectDigest)
  });
  var TransactionEffects = bcs.enum("TransactionEffects", {
    V1: TransactionEffectsV1,
    V2: TransactionEffectsV2
  });

  // node_modules/@mysten/sui/dist/esm/bcs/index.js
  var suiBcs = {
    ...bcs,
    U8: bcs.u8(),
    U16: bcs.u16(),
    U32: bcs.u32(),
    U64: bcs.u64(),
    U128: bcs.u128(),
    U256: bcs.u256(),
    ULEB128: bcs.uleb128(),
    Bool: bcs.bool(),
    String: bcs.string(),
    Address,
    AppId,
    Argument,
    CallArg,
    CompressedSignature,
    GasData,
    Intent,
    IntentMessage,
    IntentScope,
    IntentVersion,
    MultiSig,
    MultiSigPkMap,
    MultiSigPublicKey,
    ObjectArg,
    ObjectDigest,
    ProgrammableMoveCall,
    ProgrammableTransaction,
    PublicKey,
    SenderSignedData,
    SenderSignedTransaction,
    SharedObjectRef,
    StructTag,
    SuiObjectRef,
    Command,
    TransactionData,
    TransactionDataV1,
    TransactionExpiration,
    TransactionKind,
    TypeTag,
    TransactionEffects,
    PasskeyAuthenticator
  };

  // node_modules/@mysten/sui/dist/esm/utils/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@mysten/wallet-standard/dist/esm/chains.js
  init_dirname();
  init_buffer2();
  init_process2();
  var SUI_DEVNET_CHAIN = "sui:devnet";
  var SUI_TESTNET_CHAIN = "sui:testnet";
  var SUI_LOCALNET_CHAIN = "sui:localnet";
  var SUI_MAINNET_CHAIN = "sui:mainnet";
  var SUI_CHAINS = [
    SUI_DEVNET_CHAIN,
    SUI_TESTNET_CHAIN,
    SUI_LOCALNET_CHAIN,
    SUI_MAINNET_CHAIN
  ];
  function isSuiChain(chain) {
    return SUI_CHAINS.includes(chain);
  }

  // node_modules/@trpc/client/dist/index.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/createTRPCUntypedClient.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/internals/TRPCUntypedClient.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/observable/index.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/observable/observable.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function observable(subscribe) {
    const self = {
      subscribe(observer) {
        let teardownRef = null;
        let isDone = false;
        let unsubscribed = false;
        let teardownImmediately = false;
        function unsubscribe() {
          if (teardownRef === null) {
            teardownImmediately = true;
            return;
          }
          if (unsubscribed) {
            return;
          }
          unsubscribed = true;
          if (typeof teardownRef === "function") {
            teardownRef();
          } else if (teardownRef) {
            teardownRef.unsubscribe();
          }
        }
        teardownRef = subscribe({
          next(value) {
            if (isDone) {
              return;
            }
            observer.next?.(value);
          },
          error(err) {
            if (isDone) {
              return;
            }
            isDone = true;
            observer.error?.(err);
            unsubscribe();
          },
          complete() {
            if (isDone) {
              return;
            }
            isDone = true;
            observer.complete?.();
            unsubscribe();
          }
        });
        if (teardownImmediately) {
          unsubscribe();
        }
        return {
          unsubscribe
        };
      },
      pipe(...operations) {
        return operations.reduce(pipeReducer, self);
      }
    };
    return self;
  }
  function pipeReducer(prev, fn) {
    return fn(prev);
  }
  function observableToPromise(observable2) {
    const ac = new AbortController();
    const promise = new Promise((resolve, reject) => {
      let isDone = false;
      function onDone() {
        if (isDone) {
          return;
        }
        isDone = true;
        obs$.unsubscribe();
      }
      ac.signal.addEventListener("abort", () => {
        reject(ac.signal.reason);
      });
      const obs$ = observable2.subscribe({
        next(data) {
          isDone = true;
          resolve(data);
          onDone();
        },
        error(data) {
          reject(data);
        },
        complete() {
          ac.abort();
          onDone();
        }
      });
    });
    return promise;
  }

  // node_modules/@trpc/server/dist/observable/operators.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function share(_opts) {
    return (source) => {
      let refCount = 0;
      let subscription = null;
      const observers = [];
      function startIfNeeded() {
        if (subscription) {
          return;
        }
        subscription = source.subscribe({
          next(value) {
            for (const observer of observers) {
              observer.next?.(value);
            }
          },
          error(error) {
            for (const observer of observers) {
              observer.error?.(error);
            }
          },
          complete() {
            for (const observer of observers) {
              observer.complete?.();
            }
          }
        });
      }
      function resetIfNeeded() {
        if (refCount === 0 && subscription) {
          const _sub = subscription;
          subscription = null;
          _sub.unsubscribe();
        }
      }
      return observable((subscriber) => {
        refCount++;
        observers.push(subscriber);
        startIfNeeded();
        return {
          unsubscribe() {
            refCount--;
            resetIfNeeded();
            const index = observers.findIndex((v) => v === subscriber);
            if (index > -1) {
              observers.splice(index, 1);
            }
          }
        };
      });
    };
  }
  function tap(observer) {
    return (source) => {
      return observable((destination) => {
        return source.subscribe({
          next(value) {
            observer.next?.(value);
            destination.next(value);
          },
          error(error) {
            observer.error?.(error);
            destination.error(error);
          },
          complete() {
            observer.complete?.();
            destination.complete();
          }
        });
      });
    };
  }

  // node_modules/@trpc/client/dist/links/internals/createChain.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function createChain(opts) {
    return observable((observer) => {
      function execute(index = 0, op = opts.op) {
        const next = opts.links[index];
        if (!next) {
          throw new Error("No more links to execute - did you forget to add an ending link?");
        }
        const subscription = next({
          op,
          next(nextOp) {
            const nextObserver = execute(index + 1, nextOp);
            return nextObserver;
          }
        });
        return subscription;
      }
      const obs$ = execute();
      return obs$.subscribe(observer);
    });
  }

  // node_modules/@trpc/client/dist/TRPCClientError.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/createProxy.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var _memo;
  var _cacheKey;
  var noop = () => {
  };
  var freezeIfAvailable = (obj) => {
    if (Object.freeze) {
      Object.freeze(obj);
    }
  };
  function createInnerProxy(callback, path, memo) {
    const cacheKey = path.join(".");
    (_memo = memo)[_cacheKey = cacheKey] ?? (_memo[_cacheKey] = new Proxy(noop, {
      get(_obj, key) {
        if (typeof key !== "string" || key === "then") {
          return void 0;
        }
        return createInnerProxy(callback, [
          ...path,
          key
        ], memo);
      },
      apply(_1, _2, args) {
        const lastOfPath = path[path.length - 1];
        let opts = {
          args,
          path
        };
        if (lastOfPath === "call") {
          opts = {
            args: args.length >= 2 ? [
              args[1]
            ] : [],
            path: path.slice(0, -1)
          };
        } else if (lastOfPath === "apply") {
          opts = {
            args: args.length >= 2 ? args[1] : [],
            path: path.slice(0, -1)
          };
        }
        freezeIfAvailable(opts.args);
        freezeIfAvailable(opts.path);
        return callback(opts);
      }
    }));
    return memo[cacheKey];
  }
  var createRecursiveProxy = (callback) => createInnerProxy(callback, [], /* @__PURE__ */ Object.create(null));
  var createFlatProxy = (callback) => {
    return new Proxy(noop, {
      get(_obj, name) {
        if (typeof name !== "string" || name === "then") {
          return void 0;
        }
        return callback(name);
      }
    });
  };

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/error/formatter.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var defaultFormatter = ({ shape }) => {
    return shape;
  };

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/error/getErrorShape.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/http/getHTTPStatusCode.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/rpc/codes.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var unsetMarker = Symbol();
  function mergeWithoutOverrides(obj1, ...objs) {
    const newObj = Object.assign(/* @__PURE__ */ Object.create(null), obj1);
    for (const overrides of objs) {
      for (const key in overrides) {
        if (key in newObj && newObj[key] !== overrides[key]) {
          throw new Error(`Duplicate key ${key}`);
        }
        newObj[key] = overrides[key];
      }
    }
    return newObj;
  }
  function isObject(value) {
    return !!value && !Array.isArray(value) && typeof value === "object";
  }
  function isFunction(fn) {
    return typeof fn === "function";
  }
  function omitPrototype(obj) {
    return Object.assign(/* @__PURE__ */ Object.create(null), obj);
  }
  var asyncIteratorsSupported = typeof Symbol === "function" && !!Symbol.asyncIterator;
  function isAsyncIterable(value) {
    return asyncIteratorsSupported && isObject(value) && Symbol.asyncIterator in value;
  }

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var UnknownCauseError = class extends Error {
  };
  function getCauseFromUnknown(cause) {
    if (cause instanceof Error) {
      return cause;
    }
    const type = typeof cause;
    if (type === "undefined" || type === "function" || cause === null) {
      return void 0;
    }
    if (type !== "object") {
      return new Error(String(cause));
    }
    if (isObject(cause)) {
      const err = new UnknownCauseError();
      for (const key in cause) {
        err[key] = cause[key];
      }
      return err;
    }
    return void 0;
  }
  function getTRPCErrorFromUnknown(cause) {
    if (cause instanceof TRPCError) {
      return cause;
    }
    if (cause instanceof Error && cause.name === "TRPCError") {
      return cause;
    }
    const trpcError = new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      cause
    });
    if (cause instanceof Error && cause.stack) {
      trpcError.stack = cause.stack;
    }
    return trpcError;
  }
  var TRPCError = class extends Error {
    constructor(opts) {
      const cause = getCauseFromUnknown(opts.cause);
      const message = opts.message ?? cause?.message ?? opts.code;
      super(message, {
        cause
      });
      this.code = opts.code;
      this.name = "TRPCError";
      if (!this.cause) {
        this.cause = cause;
      }
    }
  };

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/http/batchStreamFormatter.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/http/contentType.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/http/parseConnectionParams.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/http/contentTypeParsers.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/http/formDataToObject.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/http/resolveResponse.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/jsonl.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/createDeferred.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/createReadableStream.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var cancelledStreamSymbol = Symbol();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/sse.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/tracked.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var trackedSymbol = Symbol();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/asyncIterable.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/promiseTimer.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/withPing.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var PING_SYM = Symbol("ping");

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/transformer.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function getDataTransformer(transformer) {
    if ("input" in transformer) {
      return transformer;
    }
    return {
      input: transformer,
      output: transformer
    };
  }
  var defaultTransformer = {
    input: {
      serialize: (obj) => obj,
      deserialize: (obj) => obj
    },
    output: {
      serialize: (obj) => obj,
      deserialize: (obj) => obj
    }
  };
  function transformResultInner(response, transformer) {
    if ("error" in response) {
      const error = transformer.deserialize(response.error);
      return {
        ok: false,
        error: {
          ...response,
          error
        }
      };
    }
    const result = {
      ...response.result,
      ...(!response.result.type || response.result.type === "data") && {
        type: "data",
        data: transformer.deserialize(response.result.data)
      }
    };
    return {
      ok: true,
      result
    };
  }
  var TransformResultError = class extends Error {
    constructor() {
      super("Unable to transform response from server");
    }
  };
  function transformResult(response, transformer) {
    let result;
    try {
      result = transformResultInner(response, transformer);
    } catch (err) {
      throw new TransformResultError();
    }
    if (!result.ok && (!isObject(result.error.error) || typeof result.error.error["code"] !== "number")) {
      throw new TransformResultError();
    }
    if (result.ok && !isObject(result.result)) {
      throw new TransformResultError();
    }
    return result;
  }

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/http/toURL.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/initTRPC.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/middleware.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var middlewareMarker = "middlewareMarker";
  function createMiddlewareFactory() {
    function createMiddlewareInner(middlewares) {
      return {
        _middlewares: middlewares,
        unstable_pipe(middlewareBuilderOrFn) {
          const pipedMiddleware = "_middlewares" in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [
            middlewareBuilderOrFn
          ];
          return createMiddlewareInner([
            ...middlewares,
            ...pipedMiddleware
          ]);
        }
      };
    }
    function createMiddleware(fn) {
      return createMiddlewareInner([
        fn
      ]);
    }
    return createMiddleware;
  }
  function createInputMiddleware(parse) {
    const inputMiddleware = async function inputValidatorMiddleware(opts) {
      let parsedInput;
      const rawInput = await opts.getRawInput();
      try {
        parsedInput = await parse(rawInput);
      } catch (cause) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          cause
        });
      }
      const combinedInput = isObject(opts.input) && isObject(parsedInput) ? {
        ...opts.input,
        ...parsedInput
      } : parsedInput;
      return opts.next({
        input: combinedInput
      });
    };
    inputMiddleware._type = "input";
    return inputMiddleware;
  }
  function createOutputMiddleware(parse) {
    const outputMiddleware = async function outputValidatorMiddleware({ next }) {
      const result = await next();
      if (!result.ok) {
        return result;
      }
      try {
        const data = await parse(result.data);
        return {
          ...result,
          data
        };
      } catch (cause) {
        throw new TRPCError({
          message: "Output validation failed",
          code: "INTERNAL_SERVER_ERROR",
          cause
        });
      }
    };
    outputMiddleware._type = "output";
    return outputMiddleware;
  }

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/procedureBuilder.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/parser.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function getParseFn(procedureParser) {
    const parser = procedureParser;
    if (typeof parser === "function" && typeof parser.assert === "function") {
      return parser.assert.bind(parser);
    }
    if (typeof parser === "function") {
      return parser;
    }
    if (typeof parser.parseAsync === "function") {
      return parser.parseAsync.bind(parser);
    }
    if (typeof parser.parse === "function") {
      return parser.parse.bind(parser);
    }
    if (typeof parser.validateSync === "function") {
      return parser.validateSync.bind(parser);
    }
    if (typeof parser.create === "function") {
      return parser.create.bind(parser);
    }
    if (typeof parser.assert === "function") {
      return (value) => {
        parser.assert(value);
        return value;
      };
    }
    throw new Error("Could not find a validator fn");
  }

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/procedureBuilder.mjs
  function createNewBuilder(def1, def2) {
    const { middlewares = [], inputs, meta, ...rest } = def2;
    return createBuilder({
      ...mergeWithoutOverrides(def1, rest),
      inputs: [
        ...def1.inputs,
        ...inputs ?? []
      ],
      middlewares: [
        ...def1.middlewares,
        ...middlewares
      ],
      meta: def1.meta && meta ? {
        ...def1.meta,
        ...meta
      } : meta ?? def1.meta
    });
  }
  function createBuilder(initDef = {}) {
    const _def = {
      procedure: true,
      inputs: [],
      middlewares: [],
      ...initDef
    };
    const builder = {
      _def,
      input(input) {
        const parser = getParseFn(input);
        return createNewBuilder(_def, {
          inputs: [
            input
          ],
          middlewares: [
            createInputMiddleware(parser)
          ]
        });
      },
      output(output) {
        const parser = getParseFn(output);
        return createNewBuilder(_def, {
          output,
          middlewares: [
            createOutputMiddleware(parser)
          ]
        });
      },
      meta(meta) {
        return createNewBuilder(_def, {
          meta
        });
      },
      use(middlewareBuilderOrFn) {
        const middlewares = "_middlewares" in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [
          middlewareBuilderOrFn
        ];
        return createNewBuilder(_def, {
          middlewares
        });
      },
      unstable_concat(builder2) {
        return createNewBuilder(_def, builder2._def);
      },
      query(resolver) {
        return createResolver({
          ..._def,
          type: "query"
        }, resolver);
      },
      mutation(resolver) {
        return createResolver({
          ..._def,
          type: "mutation"
        }, resolver);
      },
      subscription(resolver) {
        return createResolver({
          ..._def,
          type: "subscription"
        }, resolver);
      },
      experimental_caller(caller) {
        return createNewBuilder(_def, {
          caller
        });
      }
    };
    return builder;
  }
  function createResolver(_defIn, resolver) {
    const finalBuilder = createNewBuilder(_defIn, {
      resolver,
      middlewares: [
        async function resolveMiddleware(opts) {
          const data = await resolver(opts);
          return {
            marker: middlewareMarker,
            ok: true,
            data,
            ctx: opts.ctx
          };
        }
      ]
    });
    const _def = {
      ...finalBuilder._def,
      type: _defIn.type,
      experimental_caller: Boolean(finalBuilder._def.caller),
      meta: finalBuilder._def.meta,
      $types: null
    };
    const invoke = createProcedureCaller(finalBuilder._def);
    const callerOverride = finalBuilder._def.caller;
    if (!callerOverride) {
      return invoke;
    }
    const callerWrapper = async (...args) => {
      return await callerOverride({
        args,
        invoke,
        _def
      });
    };
    callerWrapper._def = _def;
    return callerWrapper;
  }
  var codeblock = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/v11/server/server-side-calls
`.trim();
  async function callRecursive(index, _def, opts) {
    try {
      const middleware = _def.middlewares[index];
      const result = await middleware({
        ...opts,
        meta: _def.meta,
        input: opts.input,
        next(_nextOpts) {
          const nextOpts = _nextOpts;
          return callRecursive(index + 1, _def, {
            ...opts,
            ctx: nextOpts?.ctx ? {
              ...opts.ctx,
              ...nextOpts.ctx
            } : opts.ctx,
            input: nextOpts && "input" in nextOpts ? nextOpts.input : opts.input,
            getRawInput: nextOpts?.getRawInput ?? opts.getRawInput
          });
        }
      });
      return result;
    } catch (cause) {
      return {
        ok: false,
        error: getTRPCErrorFromUnknown(cause),
        marker: middlewareMarker
      };
    }
  }
  function createProcedureCaller(_def) {
    async function procedure(opts) {
      if (!opts || !("getRawInput" in opts)) {
        throw new Error(codeblock);
      }
      const result = await callRecursive(0, _def, opts);
      if (!result) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "No result from middlewares - did you forget to `return next()`?"
        });
      }
      if (!result.ok) {
        throw result.error;
      }
      return result.data;
    }
    procedure._def = _def;
    return procedure;
  }

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/rootConfig.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var isServerDefault = typeof globalThis === "undefined" || "Deno" in globalThis || // eslint-disable-next-line @typescript-eslint/dot-notation
  globalThis.process?.env?.["NODE_ENV"] === "test" || !!globalThis.process?.env?.["JEST_WORKER_ID"] || !!globalThis.process?.env?.["VITEST_WORKER_ID"];

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/router.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function isRouter(procedureOrRouter) {
    return procedureOrRouter._def && "router" in procedureOrRouter._def;
  }
  var emptyRouter = {
    _ctx: null,
    _errorShape: null,
    _meta: null,
    queries: {},
    mutations: {},
    subscriptions: {},
    errorFormatter: defaultFormatter,
    transformer: defaultTransformer
  };
  var reservedWords = [
    /**
    * Then is a reserved word because otherwise we can't return a promise that returns a Proxy
    * since JS will think that `.then` is something that exists
    */
    "then",
    /**
    * `fn.call()` and `fn.apply()` are reserved words because otherwise we can't call a function using `.call` or `.apply`
    */
    "call",
    "apply"
  ];
  function createRouterFactory(config) {
    function createRouterInner(input) {
      const reservedWordsUsed = new Set(Object.keys(input).filter((v) => reservedWords.includes(v)));
      if (reservedWordsUsed.size > 0) {
        throw new Error("Reserved words used in `router({})` call: " + Array.from(reservedWordsUsed).join(", "));
      }
      const procedures = omitPrototype({});
      function step(from, path = []) {
        const aggregate = omitPrototype({});
        for (const [key, item] of Object.entries(from ?? {})) {
          if (isRouter(item)) {
            aggregate[key] = step(item._def.record, [
              ...path,
              key
            ]);
            continue;
          }
          if (!isProcedure(item)) {
            aggregate[key] = step(item, [
              ...path,
              key
            ]);
            continue;
          }
          const newPath = [
            ...path,
            key
          ].join(".");
          if (procedures[newPath]) {
            throw new Error(`Duplicate key: ${newPath}`);
          }
          procedures[newPath] = item;
          aggregate[key] = item;
        }
        return aggregate;
      }
      const record = step(input);
      const _def = {
        _config: config,
        router: true,
        procedures,
        ...emptyRouter,
        record
      };
      return {
        ...record,
        _def,
        createCaller: createCallerFactory()({
          _def
        })
      };
    }
    return createRouterInner;
  }
  function isProcedure(procedureOrRouter) {
    return typeof procedureOrRouter === "function";
  }
  function createCallerFactory() {
    return function createCallerInner(router) {
      const _def = router._def;
      return function createCaller(ctxOrCallback, opts) {
        return createRecursiveProxy(async ({ path, args }) => {
          const fullPath = path.join(".");
          if (path.length === 1 && path[0] === "_def") {
            return _def;
          }
          const procedure = _def.procedures[fullPath];
          let ctx = void 0;
          try {
            ctx = isFunction(ctxOrCallback) ? await Promise.resolve(ctxOrCallback()) : ctxOrCallback;
            return await procedure({
              path: fullPath,
              getRawInput: async () => args[0],
              ctx,
              type: procedure._def.type,
              signal: opts?.signal
            });
          } catch (cause) {
            opts?.onError?.({
              ctx,
              error: getTRPCErrorFromUnknown(cause),
              input: args[0],
              path: fullPath,
              type: procedure._def.type
            });
            throw cause;
          }
        });
      };
    };
  }
  function mergeRouters(...routerList) {
    const record = mergeWithoutOverrides({}, ...routerList.map((r) => r._def.record));
    const errorFormatter = routerList.reduce((currentErrorFormatter, nextRouter) => {
      if (nextRouter._def._config.errorFormatter && nextRouter._def._config.errorFormatter !== defaultFormatter) {
        if (currentErrorFormatter !== defaultFormatter && currentErrorFormatter !== nextRouter._def._config.errorFormatter) {
          throw new Error("You seem to have several error formatters");
        }
        return nextRouter._def._config.errorFormatter;
      }
      return currentErrorFormatter;
    }, defaultFormatter);
    const transformer = routerList.reduce((prev, current) => {
      if (current._def._config.transformer && current._def._config.transformer !== defaultTransformer) {
        if (prev !== defaultTransformer && prev !== current._def._config.transformer) {
          throw new Error("You seem to have several transformers");
        }
        return current._def._config.transformer;
      }
      return prev;
    }, defaultTransformer);
    const router = createRouterFactory({
      errorFormatter,
      transformer,
      isDev: routerList.every((r) => r._def._config.isDev),
      allowOutsideOfServer: routerList.every((r) => r._def._config.allowOutsideOfServer),
      isServer: routerList.every((r) => r._def._config.isServer),
      $types: routerList[0]?._def._config.$types
    })(record);
    return router;
  }

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/initTRPC.mjs
  var TRPCBuilder = class _TRPCBuilder {
    /**
    * Add a context shape as a generic to the root object
    * @see https://trpc.io/docs/v11/server/context
    */
    context() {
      return new _TRPCBuilder();
    }
    /**
    * Add a meta shape as a generic to the root object
    * @see https://trpc.io/docs/v11/quickstart
    */
    meta() {
      return new _TRPCBuilder();
    }
    /**
    * Create the root object
    * @see https://trpc.io/docs/v11/server/routers#initialize-trpc
    */
    create(opts) {
      const config = {
        transformer: getDataTransformer(opts?.transformer ?? defaultTransformer),
        isDev: opts?.isDev ?? // eslint-disable-next-line @typescript-eslint/dot-notation
        globalThis.process?.env["NODE_ENV"] !== "production",
        allowOutsideOfServer: opts?.allowOutsideOfServer ?? false,
        errorFormatter: opts?.errorFormatter ?? defaultFormatter,
        isServer: opts?.isServer ?? isServerDefault,
        /**
        * These are just types, they can't be used at runtime
        * @internal
        */
        $types: null,
        experimental: opts?.experimental ?? {}
      };
      {
        const isServer2 = opts?.isServer ?? isServerDefault;
        if (!isServer2 && opts?.allowOutsideOfServer !== true) {
          throw new Error(`You're trying to use @trpc/server in a non-server environment. This is not supported by default.`);
        }
      }
      return {
        /**
        * Your router config
        * @internal
        */
        _config: config,
        /**
        * Builder object for creating procedures
        * @see https://trpc.io/docs/v11/server/procedures
        */
        procedure: createBuilder({
          meta: opts?.defaultMeta
        }),
        /**
        * Create reusable middlewares
        * @see https://trpc.io/docs/v11/server/middlewares
        */
        middleware: createMiddlewareFactory(),
        /**
        * Create a router
        * @see https://trpc.io/docs/v11/server/routers
        */
        router: createRouterFactory(config),
        /**
        * Merge Routers
        * @see https://trpc.io/docs/v11/server/merging-routers
        */
        mergeRouters,
        /**
        * Create a server-side caller for a router
        * @see https://trpc.io/docs/v11/server/server-side-calls
        */
        createCallerFactory: createCallerFactory()
      };
    }
  };
  var initTRPC = new TRPCBuilder();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/procedure.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/server/dist/unstable-core-do-not-import/rpc/parseTRPCMessage.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/TRPCClientError.mjs
  function isTRPCClientError(cause) {
    return cause instanceof TRPCClientError || /**
    * @deprecated
    * Delete in next major
    */
    cause instanceof Error && cause.name === "TRPCClientError";
  }
  function isTRPCErrorResponse(obj) {
    return isObject(obj) && isObject(obj["error"]) && typeof obj["error"]["code"] === "number" && typeof obj["error"]["message"] === "string";
  }
  function getMessageFromUnknownError(err, fallback) {
    if (typeof err === "string") {
      return err;
    }
    if (isObject(err) && typeof err["message"] === "string") {
      return err["message"];
    }
    return fallback;
  }
  var TRPCClientError = class _TRPCClientError extends Error {
    static from(_cause, opts = {}) {
      const cause = _cause;
      if (isTRPCClientError(cause)) {
        if (opts.meta) {
          cause.meta = {
            ...cause.meta,
            ...opts.meta
          };
        }
        return cause;
      }
      if (isTRPCErrorResponse(cause)) {
        return new _TRPCClientError(cause.error.message, {
          ...opts,
          result: cause
        });
      }
      return new _TRPCClientError(getMessageFromUnknownError(cause, "Unknown error"), {
        ...opts,
        cause
      });
    }
    constructor(message, opts) {
      const cause = opts?.cause;
      super(message, {
        cause
      });
      this.meta = opts?.meta;
      this.cause = cause;
      this.shape = opts?.result?.error;
      this.data = opts?.result?.error.data;
      this.name = "TRPCClientError";
      Object.setPrototypeOf(this, _TRPCClientError.prototype);
    }
  };

  // node_modules/@trpc/client/dist/internals/TRPCUntypedClient.mjs
  var TRPCUntypedClient = class {
    $request(opts) {
      const chain$ = createChain({
        links: this.links,
        op: {
          ...opts,
          context: opts.context ?? {},
          id: ++this.requestId
        }
      });
      return chain$.pipe(share());
    }
    async requestAsPromise(opts) {
      try {
        const req$ = this.$request(opts);
        const envelope = await observableToPromise(req$);
        const data = envelope.result.data;
        return data;
      } catch (err) {
        throw TRPCClientError.from(err);
      }
    }
    query(path, input, opts) {
      return this.requestAsPromise({
        type: "query",
        path,
        input,
        context: opts?.context,
        signal: opts?.signal
      });
    }
    mutation(path, input, opts) {
      return this.requestAsPromise({
        type: "mutation",
        path,
        input,
        context: opts?.context,
        signal: opts?.signal
      });
    }
    subscription(path, input, opts) {
      const observable$ = this.$request({
        type: "subscription",
        path,
        input,
        context: opts?.context,
        signal: opts.signal
      });
      return observable$.subscribe({
        next(envelope) {
          if (envelope.result.type === "started") {
            opts.onStarted?.({
              context: envelope.context
            });
          } else if (envelope.result.type === "stopped") {
            opts.onStopped?.();
          } else {
            opts.onData?.(envelope.result.data);
          }
        },
        error(err) {
          opts.onError?.(err);
        },
        complete() {
          opts.onComplete?.();
        }
      });
    }
    constructor(opts) {
      this.requestId = 0;
      this.runtime = {};
      this.links = opts.links.map((link) => link(this.runtime));
    }
  };

  // node_modules/@trpc/client/dist/createTRPCUntypedClient.mjs
  function createTRPCUntypedClient(opts) {
    return new TRPCUntypedClient(opts);
  }

  // node_modules/@trpc/client/dist/createTRPCClient.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var clientCallTypeMap = {
    query: "query",
    mutate: "mutation",
    subscribe: "subscription"
  };
  var clientCallTypeToProcedureType = (clientCallType) => {
    return clientCallTypeMap[clientCallType];
  };
  function createTRPCClientProxy(client) {
    const proxy = createRecursiveProxy(({ path, args }) => {
      const pathCopy = [
        ...path
      ];
      const procedureType = clientCallTypeToProcedureType(pathCopy.pop());
      const fullPath = pathCopy.join(".");
      return client[procedureType](fullPath, ...args);
    });
    return createFlatProxy((key) => {
      if (client.hasOwnProperty(key)) {
        return client[key];
      }
      if (key === "__untypedClient") {
        return client;
      }
      return proxy[key];
    });
  }
  function createTRPCClient(opts) {
    const client = new TRPCUntypedClient(opts);
    const proxy = createTRPCClientProxy(client);
    return proxy;
  }
  function getUntypedClient(client) {
    return client.__untypedClient;
  }

  // node_modules/@trpc/client/dist/getFetch.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/links/internals/contentTypes.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/links/httpBatchLink.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/internals/dataLoader.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/internals/signals.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/links/internals/httpUtils.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/internals/transformer.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function getTransformer(transformer) {
    const _transformer = transformer;
    if (!_transformer) {
      return {
        input: {
          serialize: (data) => data,
          deserialize: (data) => data
        },
        output: {
          serialize: (data) => data,
          deserialize: (data) => data
        }
      };
    }
    if ("input" in _transformer) {
      return _transformer;
    }
    return {
      input: _transformer,
      output: _transformer
    };
  }

  // node_modules/@trpc/client/dist/links/httpBatchStreamLink.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/links/httpLink.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/links/loggerLink.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function isFormData2(value) {
    if (typeof FormData === "undefined") {
      return false;
    }
    return value instanceof FormData;
  }
  var palettes = {
    css: {
      query: [
        "72e3ff",
        "3fb0d8"
      ],
      mutation: [
        "c5a3fc",
        "904dfc"
      ],
      subscription: [
        "ff49e1",
        "d83fbe"
      ]
    },
    ansi: {
      regular: {
        // Cyan background, black and white text respectively
        query: [
          "\x1B[30;46m",
          "\x1B[97;46m"
        ],
        // Magenta background, black and white text respectively
        mutation: [
          "\x1B[30;45m",
          "\x1B[97;45m"
        ],
        // Green background, black and white text respectively
        subscription: [
          "\x1B[30;42m",
          "\x1B[97;42m"
        ]
      },
      bold: {
        query: [
          "\x1B[1;30;46m",
          "\x1B[1;97;46m"
        ],
        mutation: [
          "\x1B[1;30;45m",
          "\x1B[1;97;45m"
        ],
        subscription: [
          "\x1B[1;30;42m",
          "\x1B[1;97;42m"
        ]
      }
    }
  };
  function constructPartsAndArgs(opts) {
    const { direction, type, withContext, path, id, input } = opts;
    const parts = [];
    const args = [];
    if (opts.colorMode === "none") {
      parts.push(direction === "up" ? ">>" : "<<", type, `#${id}`, path);
    } else if (opts.colorMode === "ansi") {
      const [lightRegular, darkRegular] = palettes.ansi.regular[type];
      const [lightBold, darkBold] = palettes.ansi.bold[type];
      const reset = "\x1B[0m";
      parts.push(direction === "up" ? lightRegular : darkRegular, direction === "up" ? ">>" : "<<", type, direction === "up" ? lightBold : darkBold, `#${id}`, path, reset);
    } else {
      const [light, dark] = palettes.css[type];
      const css = `
    background-color: #${direction === "up" ? light : dark};
    color: ${direction === "up" ? "black" : "white"};
    padding: 2px;
  `;
      parts.push("%c", direction === "up" ? ">>" : "<<", type, `#${id}`, `%c${path}%c`, "%O");
      args.push(css, `${css}; font-weight: bold;`, `${css}; font-weight: normal;`);
    }
    if (direction === "up") {
      args.push(withContext ? {
        input,
        context: opts.context
      } : {
        input
      });
    } else {
      args.push({
        input,
        result: opts.result,
        elapsedMs: opts.elapsedMs,
        ...withContext && {
          context: opts.context
        }
      });
    }
    return {
      parts,
      args
    };
  }
  var defaultLogger = ({ c = console, colorMode = "css", withContext }) => (props) => {
    const rawInput = props.input;
    const input = isFormData2(rawInput) ? Object.fromEntries(rawInput) : rawInput;
    const { parts, args } = constructPartsAndArgs({
      ...props,
      colorMode,
      input,
      withContext
    });
    const fn = props.direction === "down" && props.result && (props.result instanceof Error || "error" in props.result.result) ? "error" : "log";
    c[fn].apply(null, [
      parts.join(" ")
    ].concat(args));
  };
  function loggerLink(opts = {}) {
    const { enabled = () => true } = opts;
    const colorMode = opts.colorMode ?? (typeof globalThis === "undefined" ? "ansi" : "css");
    const withContext = opts.withContext ?? colorMode === "css";
    const { logger = defaultLogger({
      c: opts.console,
      colorMode,
      withContext
    }) } = opts;
    return () => {
      return ({ op, next }) => {
        return observable((observer) => {
          enabled({
            ...op,
            direction: "up"
          }) && logger({
            ...op,
            direction: "up"
          });
          const requestStartTime = Date.now();
          function logResult(result) {
            const elapsedMs = Date.now() - requestStartTime;
            enabled({
              ...op,
              direction: "down",
              result
            }) && logger({
              ...op,
              direction: "down",
              elapsedMs,
              result
            });
          }
          return next(op).pipe(tap({
            next(result) {
              logResult(result);
            },
            error(result) {
              logResult(result);
            }
          })).subscribe(observer);
        });
      };
    };
  }

  // node_modules/@trpc/client/dist/links/splitLink.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/links/wsLink.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/links/internals/urlWithConnectionParams.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/links/httpSubscriptionLink.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // src/utils/events/constants.ts
  init_dirname();
  init_buffer2();
  init_process2();
  var TRPC_REQUEST = "@trpc/request";
  var TRPC_RESPONSE = "@trpc/response";
  var WALLET_STATE_CHANGED = "@apps/wallet-state-changed";

  // src/utils/events/emitters/window.ts
  init_dirname();
  init_buffer2();
  init_process2();
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

  // src/utils/trpc/index.ts
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/react-query/dist/index.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/react-query/dist/internals/getQueryKey.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@tanstack/react-query/build/modern/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@tanstack/query-core/build/modern/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@tanstack/query-core/build/modern/retryer.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@tanstack/query-core/build/modern/focusManager.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@tanstack/query-core/build/modern/subscribable.js
  init_dirname();
  init_buffer2();
  init_process2();
  var Subscribable = class {
    constructor() {
      this.listeners = /* @__PURE__ */ new Set();
      this.subscribe = this.subscribe.bind(this);
    }
    subscribe(listener) {
      this.listeners.add(listener);
      this.onSubscribe();
      return () => {
        this.listeners.delete(listener);
        this.onUnsubscribe();
      };
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {
    }
    onUnsubscribe() {
    }
  };

  // node_modules/@tanstack/query-core/build/modern/utils.js
  init_dirname();
  init_buffer2();
  init_process2();
  var isServer = typeof globalThis === "undefined" || "Deno" in globalThis;
  function noop3() {
    return void 0;
  }
  function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
  }
  function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
  }
  function resolveStaleTime(staleTime, query) {
    return typeof staleTime === "function" ? staleTime(query) : staleTime;
  }
  function resolveEnabled(enabled, query) {
    return typeof enabled === "function" ? enabled(query) : enabled;
  }
  function hashKey(queryKey) {
    return JSON.stringify(
      queryKey,
      (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
        result[key] = val[key];
        return result;
      }, {}) : val
    );
  }
  function replaceEqualDeep(a, b) {
    if (a === b) {
      return a;
    }
    const array = isPlainArray(a) && isPlainArray(b);
    if (array || isPlainObject(a) && isPlainObject(b)) {
      const aItems = array ? a : Object.keys(a);
      const aSize = aItems.length;
      const bItems = array ? b : Object.keys(b);
      const bSize = bItems.length;
      const copy = array ? [] : {};
      let equalItems = 0;
      for (let i = 0; i < bSize; i++) {
        const key = array ? i : bItems[i];
        if ((!array && aItems.includes(key) || array) && a[key] === void 0 && b[key] === void 0) {
          copy[key] = void 0;
          equalItems++;
        } else {
          copy[key] = replaceEqualDeep(a[key], b[key]);
          if (copy[key] === a[key] && a[key] !== void 0) {
            equalItems++;
          }
        }
      }
      return aSize === bSize && equalItems === aSize ? a : copy;
    }
    return b;
  }
  function shallowEqualObjects(a, b) {
    if (!b || Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }
    for (const key in a) {
      if (a[key] !== b[key]) {
        return false;
      }
    }
    return true;
  }
  function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
  }
  function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
      return false;
    }
    const ctor = o.constructor;
    if (ctor === void 0) {
      return true;
    }
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
      return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
      return false;
    }
    if (Object.getPrototypeOf(o) !== Object.prototype) {
      return false;
    }
    return true;
  }
  function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
  }
  function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") {
      return options.structuralSharing(prevData, data);
    } else if (options.structuralSharing !== false) {
      if (true) {
        try {
          return replaceEqualDeep(prevData, data);
        } catch (error) {
          console.error(
            `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`
          );
        }
      }
      return replaceEqualDeep(prevData, data);
    }
    return data;
  }
  function addToEnd(items, item, max = 0) {
    const newItems = [...items, item];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
  }
  function addToStart(items, item, max = 0) {
    const newItems = [item, ...items];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
  }
  var skipToken = Symbol();
  function ensureQueryFn(options, fetchOptions) {
    if (true) {
      if (options.queryFn === skipToken) {
        console.error(
          `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`
        );
      }
    }
    if (!options.queryFn && fetchOptions?.initialPromise) {
      return () => fetchOptions.initialPromise;
    }
    if (!options.queryFn || options.queryFn === skipToken) {
      return () => Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
    }
    return options.queryFn;
  }

  // node_modules/@tanstack/query-core/build/modern/focusManager.js
  var FocusManager = class extends Subscribable {
    #focused;
    #cleanup;
    #setup;
    constructor() {
      super();
      this.#setup = (onFocus) => {
        if (!isServer && globalThis.addEventListener) {
          const listener = () => onFocus();
          globalThis.addEventListener("visibilitychange", listener, false);
          return () => {
            globalThis.removeEventListener("visibilitychange", listener);
          };
        }
        return;
      };
    }
    onSubscribe() {
      if (!this.#cleanup) {
        this.setEventListener(this.#setup);
      }
    }
    onUnsubscribe() {
      if (!this.hasListeners()) {
        this.#cleanup?.();
        this.#cleanup = void 0;
      }
    }
    setEventListener(setup) {
      this.#setup = setup;
      this.#cleanup?.();
      this.#cleanup = setup((focused) => {
        if (typeof focused === "boolean") {
          this.setFocused(focused);
        } else {
          this.onFocus();
        }
      });
    }
    setFocused(focused) {
      const changed = this.#focused !== focused;
      if (changed) {
        this.#focused = focused;
        this.onFocus();
      }
    }
    onFocus() {
      const isFocused = this.isFocused();
      this.listeners.forEach((listener) => {
        listener(isFocused);
      });
    }
    isFocused() {
      if (typeof this.#focused === "boolean") {
        return this.#focused;
      }
      return globalThis.document?.visibilityState !== "hidden";
    }
  };
  var focusManager = new FocusManager();

  // node_modules/@tanstack/query-core/build/modern/onlineManager.js
  init_dirname();
  init_buffer2();
  init_process2();
  var OnlineManager = class extends Subscribable {
    #online = true;
    #cleanup;
    #setup;
    constructor() {
      super();
      this.#setup = (onOnline) => {
        if (!isServer && globalThis.addEventListener) {
          const onlineListener = () => onOnline(true);
          const offlineListener = () => onOnline(false);
          globalThis.addEventListener("online", onlineListener, false);
          globalThis.addEventListener("offline", offlineListener, false);
          return () => {
            globalThis.removeEventListener("online", onlineListener);
            globalThis.removeEventListener("offline", offlineListener);
          };
        }
        return;
      };
    }
    onSubscribe() {
      if (!this.#cleanup) {
        this.setEventListener(this.#setup);
      }
    }
    onUnsubscribe() {
      if (!this.hasListeners()) {
        this.#cleanup?.();
        this.#cleanup = void 0;
      }
    }
    setEventListener(setup) {
      this.#setup = setup;
      this.#cleanup?.();
      this.#cleanup = setup(this.setOnline.bind(this));
    }
    setOnline(online) {
      const changed = this.#online !== online;
      if (changed) {
        this.#online = online;
        this.listeners.forEach((listener) => {
          listener(online);
        });
      }
    }
    isOnline() {
      return this.#online;
    }
  };
  var onlineManager = new OnlineManager();

  // node_modules/@tanstack/query-core/build/modern/thenable.js
  init_dirname();
  init_buffer2();
  init_process2();
  function pendingThenable() {
    let resolve;
    let reject;
    const thenable = new Promise((_resolve, _reject) => {
      resolve = _resolve;
      reject = _reject;
    });
    thenable.status = "pending";
    thenable.catch(() => {
    });
    function finalize(data) {
      Object.assign(thenable, data);
      delete thenable.resolve;
      delete thenable.reject;
    }
    thenable.resolve = (value) => {
      finalize({
        status: "fulfilled",
        value
      });
      resolve(value);
    };
    thenable.reject = (reason) => {
      finalize({
        status: "rejected",
        reason
      });
      reject(reason);
    };
    return thenable;
  }

  // node_modules/@tanstack/query-core/build/modern/retryer.js
  function canFetch(networkMode) {
    return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
  }

  // node_modules/@tanstack/query-core/build/modern/query.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@tanstack/query-core/build/modern/notifyManager.js
  init_dirname();
  init_buffer2();
  init_process2();
  function createNotifyManager() {
    let queue = [];
    let transactions = 0;
    let notifyFn = (callback) => {
      callback();
    };
    let batchNotifyFn = (callback) => {
      callback();
    };
    let scheduleFn = (cb) => setTimeout(cb, 0);
    const schedule = (callback) => {
      if (transactions) {
        queue.push(callback);
      } else {
        scheduleFn(() => {
          notifyFn(callback);
        });
      }
    };
    const flush = () => {
      const originalQueue = queue;
      queue = [];
      if (originalQueue.length) {
        scheduleFn(() => {
          batchNotifyFn(() => {
            originalQueue.forEach((callback) => {
              notifyFn(callback);
            });
          });
        });
      }
    };
    return {
      batch: (callback) => {
        let result;
        transactions++;
        try {
          result = callback();
        } finally {
          transactions--;
          if (!transactions) {
            flush();
          }
        }
        return result;
      },
      /**
       * All calls to the wrapped function will be batched.
       */
      batchCalls: (callback) => {
        return (...args) => {
          schedule(() => {
            callback(...args);
          });
        };
      },
      schedule,
      /**
       * Use this method to set a custom notify function.
       * This can be used to for example wrap notifications with `React.act` while running tests.
       */
      setNotifyFunction: (fn) => {
        notifyFn = fn;
      },
      /**
       * Use this method to set a custom function to batch notifications together into a single tick.
       * By default React Query will use the batch function provided by ReactDOM or React Native.
       */
      setBatchNotifyFunction: (fn) => {
        batchNotifyFn = fn;
      },
      setScheduler: (fn) => {
        scheduleFn = fn;
      }
    };
  }
  var notifyManager = createNotifyManager();

  // node_modules/@tanstack/query-core/build/modern/query.js
  function fetchState(data, options) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
      ...data === void 0 && {
        error: null,
        status: "pending"
      }
    };
  }

  // node_modules/@tanstack/query-core/build/modern/mutation.js
  init_dirname();
  init_buffer2();
  init_process2();
  function getDefaultState() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: false,
      status: "idle",
      variables: void 0,
      submittedAt: 0
    };
  }

  // node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
  init_dirname();
  init_buffer2();
  init_process2();
  function infiniteQueryBehavior(pages) {
    return {
      onFetch: (context, query) => {
        const options = context.options;
        const direction = context.fetchOptions?.meta?.fetchMore?.direction;
        const oldPages = context.state.data?.pages || [];
        const oldPageParams = context.state.data?.pageParams || [];
        let result = { pages: [], pageParams: [] };
        let currentPage = 0;
        const fetchFn = async () => {
          let cancelled = false;
          const addSignalProperty = (object) => {
            Object.defineProperty(object, "signal", {
              enumerable: true,
              get: () => {
                if (context.signal.aborted) {
                  cancelled = true;
                } else {
                  context.signal.addEventListener("abort", () => {
                    cancelled = true;
                  });
                }
                return context.signal;
              }
            });
          };
          const queryFn = ensureQueryFn(context.options, context.fetchOptions);
          const fetchPage = async (data, param, previous) => {
            if (cancelled) {
              return Promise.reject();
            }
            if (param == null && data.pages.length) {
              return Promise.resolve(data);
            }
            const queryFnContext = {
              queryKey: context.queryKey,
              pageParam: param,
              direction: previous ? "backward" : "forward",
              meta: context.options.meta
            };
            addSignalProperty(queryFnContext);
            const page = await queryFn(
              queryFnContext
            );
            const { maxPages } = context.options;
            const addTo = previous ? addToStart : addToEnd;
            return {
              pages: addTo(data.pages, page, maxPages),
              pageParams: addTo(data.pageParams, param, maxPages)
            };
          };
          if (direction && oldPages.length) {
            const previous = direction === "backward";
            const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
            const oldData = {
              pages: oldPages,
              pageParams: oldPageParams
            };
            const param = pageParamFn(options, oldData);
            result = await fetchPage(oldData, param, previous);
          } else {
            const remainingPages = pages ?? oldPages.length;
            do {
              const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
              if (currentPage > 0 && param == null) {
                break;
              }
              result = await fetchPage(result, param);
              currentPage++;
            } while (currentPage < remainingPages);
          }
          return result;
        };
        if (context.options.persister) {
          context.fetchFn = () => {
            return context.options.persister?.(
              fetchFn,
              {
                queryKey: context.queryKey,
                meta: context.options.meta,
                signal: context.signal
              },
              query
            );
          };
        } else {
          context.fetchFn = fetchFn;
        }
      }
    };
  }
  function getNextPageParam(options, { pages, pageParams }) {
    const lastIndex = pages.length - 1;
    return pages.length > 0 ? options.getNextPageParam(
      pages[lastIndex],
      pages,
      pageParams[lastIndex],
      pageParams
    ) : void 0;
  }
  function getPreviousPageParam(options, { pages, pageParams }) {
    return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
  }
  function hasNextPage(options, data) {
    if (!data)
      return false;
    return getNextPageParam(options, data) != null;
  }
  function hasPreviousPage(options, data) {
    if (!data || !options.getPreviousPageParam)
      return false;
    return getPreviousPageParam(options, data) != null;
  }

  // node_modules/@tanstack/query-core/build/modern/queryObserver.js
  init_dirname();
  init_buffer2();
  init_process2();
  var QueryObserver = class extends Subscribable {
    constructor(client, options) {
      super();
      this.options = options;
      this.#client = client;
      this.#selectError = null;
      this.#currentThenable = pendingThenable();
      if (!this.options.experimental_prefetchInRender) {
        this.#currentThenable.reject(
          new Error("experimental_prefetchInRender feature flag is not enabled")
        );
      }
      this.bindMethods();
      this.setOptions(options);
    }
    #client;
    #currentQuery = void 0;
    #currentQueryInitialState = void 0;
    #currentResult = void 0;
    #currentResultState;
    #currentResultOptions;
    #currentThenable;
    #selectError;
    #selectFn;
    #selectResult;
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    #lastQueryWithDefinedData;
    #staleTimeoutId;
    #refetchIntervalId;
    #currentRefetchInterval;
    #trackedProps = /* @__PURE__ */ new Set();
    bindMethods() {
      this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
      if (this.listeners.size === 1) {
        this.#currentQuery.addObserver(this);
        if (shouldFetchOnMount(this.#currentQuery, this.options)) {
          this.#executeFetch();
        } else {
          this.updateResult();
        }
        this.#updateTimers();
      }
    }
    onUnsubscribe() {
      if (!this.hasListeners()) {
        this.destroy();
      }
    }
    shouldFetchOnReconnect() {
      return shouldFetchOn(
        this.#currentQuery,
        this.options,
        this.options.refetchOnReconnect
      );
    }
    shouldFetchOnWindowFocus() {
      return shouldFetchOn(
        this.#currentQuery,
        this.options,
        this.options.refetchOnWindowFocus
      );
    }
    destroy() {
      this.listeners = /* @__PURE__ */ new Set();
      this.#clearStaleTimeout();
      this.#clearRefetchInterval();
      this.#currentQuery.removeObserver(this);
    }
    setOptions(options, notifyOptions) {
      const prevOptions = this.options;
      const prevQuery = this.#currentQuery;
      this.options = this.#client.defaultQueryOptions(options);
      if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, this.#currentQuery) !== "boolean") {
        throw new Error(
          "Expected enabled to be a boolean or a callback that returns a boolean"
        );
      }
      this.#updateQuery();
      this.#currentQuery.setOptions(this.options);
      if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
        this.#client.getQueryCache().notify({
          type: "observerOptionsUpdated",
          query: this.#currentQuery,
          observer: this
        });
      }
      const mounted = this.hasListeners();
      if (mounted && shouldFetchOptionally(
        this.#currentQuery,
        prevQuery,
        this.options,
        prevOptions
      )) {
        this.#executeFetch();
      }
      this.updateResult(notifyOptions);
      if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || resolveStaleTime(this.options.staleTime, this.#currentQuery) !== resolveStaleTime(prevOptions.staleTime, this.#currentQuery))) {
        this.#updateStaleTimeout();
      }
      const nextRefetchInterval = this.#computeRefetchInterval();
      if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
        this.#updateRefetchInterval(nextRefetchInterval);
      }
    }
    getOptimisticResult(options) {
      const query = this.#client.getQueryCache().build(this.#client, options);
      const result = this.createResult(query, options);
      if (shouldAssignObserverCurrentProperties(this, result)) {
        this.#currentResult = result;
        this.#currentResultOptions = this.options;
        this.#currentResultState = this.#currentQuery.state;
      }
      return result;
    }
    getCurrentResult() {
      return this.#currentResult;
    }
    trackResult(result, onPropTracked) {
      const trackedResult = {};
      Object.keys(result).forEach((key) => {
        Object.defineProperty(trackedResult, key, {
          configurable: false,
          enumerable: true,
          get: () => {
            this.trackProp(key);
            onPropTracked?.(key);
            return result[key];
          }
        });
      });
      return trackedResult;
    }
    trackProp(key) {
      this.#trackedProps.add(key);
    }
    getCurrentQuery() {
      return this.#currentQuery;
    }
    refetch({ ...options } = {}) {
      return this.fetch({
        ...options
      });
    }
    fetchOptimistic(options) {
      const defaultedOptions = this.#client.defaultQueryOptions(options);
      const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
      return query.fetch().then(() => this.createResult(query, defaultedOptions));
    }
    fetch(fetchOptions) {
      return this.#executeFetch({
        ...fetchOptions,
        cancelRefetch: fetchOptions.cancelRefetch ?? true
      }).then(() => {
        this.updateResult();
        return this.#currentResult;
      });
    }
    #executeFetch(fetchOptions) {
      this.#updateQuery();
      let promise = this.#currentQuery.fetch(
        this.options,
        fetchOptions
      );
      if (!fetchOptions?.throwOnError) {
        promise = promise.catch(noop3);
      }
      return promise;
    }
    #updateStaleTimeout() {
      this.#clearStaleTimeout();
      const staleTime = resolveStaleTime(
        this.options.staleTime,
        this.#currentQuery
      );
      if (isServer || this.#currentResult.isStale || !isValidTimeout(staleTime)) {
        return;
      }
      const time = timeUntilStale(this.#currentResult.dataUpdatedAt, staleTime);
      const timeout = time + 1;
      this.#staleTimeoutId = setTimeout(() => {
        if (!this.#currentResult.isStale) {
          this.updateResult();
        }
      }, timeout);
    }
    #computeRefetchInterval() {
      return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
    }
    #updateRefetchInterval(nextInterval) {
      this.#clearRefetchInterval();
      this.#currentRefetchInterval = nextInterval;
      if (isServer || resolveEnabled(this.options.enabled, this.#currentQuery) === false || !isValidTimeout(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
        return;
      }
      this.#refetchIntervalId = setInterval(() => {
        if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
          this.#executeFetch();
        }
      }, this.#currentRefetchInterval);
    }
    #updateTimers() {
      this.#updateStaleTimeout();
      this.#updateRefetchInterval(this.#computeRefetchInterval());
    }
    #clearStaleTimeout() {
      if (this.#staleTimeoutId) {
        clearTimeout(this.#staleTimeoutId);
        this.#staleTimeoutId = void 0;
      }
    }
    #clearRefetchInterval() {
      if (this.#refetchIntervalId) {
        clearInterval(this.#refetchIntervalId);
        this.#refetchIntervalId = void 0;
      }
    }
    createResult(query, options) {
      const prevQuery = this.#currentQuery;
      const prevOptions = this.options;
      const prevResult = this.#currentResult;
      const prevResultState = this.#currentResultState;
      const prevResultOptions = this.#currentResultOptions;
      const queryChange = query !== prevQuery;
      const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
      const { state } = query;
      let newState = { ...state };
      let isPlaceholderData = false;
      let data;
      if (options._optimisticResults) {
        const mounted = this.hasListeners();
        const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
        const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
        if (fetchOnMount || fetchOptionally) {
          newState = {
            ...newState,
            ...fetchState(state.data, query.options)
          };
        }
        if (options._optimisticResults === "isRestoring") {
          newState.fetchStatus = "idle";
        }
      }
      let { error, errorUpdatedAt, status } = newState;
      if (options.select && newState.data !== void 0) {
        if (prevResult && newState.data === prevResultState?.data && options.select === this.#selectFn) {
          data = this.#selectResult;
        } else {
          try {
            this.#selectFn = options.select;
            data = options.select(newState.data);
            data = replaceData(prevResult?.data, data, options);
            this.#selectResult = data;
            this.#selectError = null;
          } catch (selectError) {
            this.#selectError = selectError;
          }
        }
      } else {
        data = newState.data;
      }
      if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
        let placeholderData;
        if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
          placeholderData = prevResult.data;
        } else {
          placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
            this.#lastQueryWithDefinedData?.state.data,
            this.#lastQueryWithDefinedData
          ) : options.placeholderData;
          if (options.select && placeholderData !== void 0) {
            try {
              placeholderData = options.select(placeholderData);
              this.#selectError = null;
            } catch (selectError) {
              this.#selectError = selectError;
            }
          }
        }
        if (placeholderData !== void 0) {
          status = "success";
          data = replaceData(
            prevResult?.data,
            placeholderData,
            options
          );
          isPlaceholderData = true;
        }
      }
      if (this.#selectError) {
        error = this.#selectError;
        data = this.#selectResult;
        errorUpdatedAt = Date.now();
        status = "error";
      }
      const isFetching = newState.fetchStatus === "fetching";
      const isPending = status === "pending";
      const isError = status === "error";
      const isLoading = isPending && isFetching;
      const hasData = data !== void 0;
      const result = {
        status,
        fetchStatus: newState.fetchStatus,
        isPending,
        isSuccess: status === "success",
        isError,
        isInitialLoading: isLoading,
        isLoading,
        data,
        dataUpdatedAt: newState.dataUpdatedAt,
        error,
        errorUpdatedAt,
        failureCount: newState.fetchFailureCount,
        failureReason: newState.fetchFailureReason,
        errorUpdateCount: newState.errorUpdateCount,
        isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
        isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
        isFetching,
        isRefetching: isFetching && !isPending,
        isLoadingError: isError && !hasData,
        isPaused: newState.fetchStatus === "paused",
        isPlaceholderData,
        isRefetchError: isError && hasData,
        isStale: isStale(query, options),
        refetch: this.refetch,
        promise: this.#currentThenable
      };
      const nextResult = result;
      if (this.options.experimental_prefetchInRender) {
        const finalizeThenableIfPossible = (thenable) => {
          if (nextResult.status === "error") {
            thenable.reject(nextResult.error);
          } else if (nextResult.data !== void 0) {
            thenable.resolve(nextResult.data);
          }
        };
        const recreateThenable = () => {
          const pending = this.#currentThenable = nextResult.promise = pendingThenable();
          finalizeThenableIfPossible(pending);
        };
        const prevThenable = this.#currentThenable;
        switch (prevThenable.status) {
          case "pending":
            if (query.queryHash === prevQuery.queryHash) {
              finalizeThenableIfPossible(prevThenable);
            }
            break;
          case "fulfilled":
            if (nextResult.status === "error" || nextResult.data !== prevThenable.value) {
              recreateThenable();
            }
            break;
          case "rejected":
            if (nextResult.status !== "error" || nextResult.error !== prevThenable.reason) {
              recreateThenable();
            }
            break;
        }
      }
      return nextResult;
    }
    updateResult(notifyOptions) {
      const prevResult = this.#currentResult;
      const nextResult = this.createResult(this.#currentQuery, this.options);
      this.#currentResultState = this.#currentQuery.state;
      this.#currentResultOptions = this.options;
      if (this.#currentResultState.data !== void 0) {
        this.#lastQueryWithDefinedData = this.#currentQuery;
      }
      if (shallowEqualObjects(nextResult, prevResult)) {
        return;
      }
      this.#currentResult = nextResult;
      const defaultNotifyOptions = {};
      const shouldNotifyListeners = () => {
        if (!prevResult) {
          return true;
        }
        const { notifyOnChangeProps } = this.options;
        const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
        if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
          return true;
        }
        const includedProps = new Set(
          notifyOnChangePropsValue ?? this.#trackedProps
        );
        if (this.options.throwOnError) {
          includedProps.add("error");
        }
        return Object.keys(this.#currentResult).some((key) => {
          const typedKey = key;
          const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
          return changed && includedProps.has(typedKey);
        });
      };
      if (notifyOptions?.listeners !== false && shouldNotifyListeners()) {
        defaultNotifyOptions.listeners = true;
      }
      this.#notify({ ...defaultNotifyOptions, ...notifyOptions });
    }
    #updateQuery() {
      const query = this.#client.getQueryCache().build(this.#client, this.options);
      if (query === this.#currentQuery) {
        return;
      }
      const prevQuery = this.#currentQuery;
      this.#currentQuery = query;
      this.#currentQueryInitialState = query.state;
      if (this.hasListeners()) {
        prevQuery?.removeObserver(this);
        query.addObserver(this);
      }
    }
    onQueryUpdate() {
      this.updateResult();
      if (this.hasListeners()) {
        this.#updateTimers();
      }
    }
    #notify(notifyOptions) {
      notifyManager.batch(() => {
        if (notifyOptions.listeners) {
          this.listeners.forEach((listener) => {
            listener(this.#currentResult);
          });
        }
        this.#client.getQueryCache().notify({
          query: this.#currentQuery,
          type: "observerResultsUpdated"
        });
      });
    }
  };
  function shouldLoadOnMount(query, options) {
    return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
  }
  function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
  }
  function shouldFetchOn(query, options, field) {
    if (resolveEnabled(options.enabled, query) !== false) {
      const value = typeof field === "function" ? field(query) : field;
      return value === "always" || value !== false && isStale(query, options);
    }
    return false;
  }
  function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
  }
  function isStale(query, options) {
    return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
  }
  function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
      return true;
    }
    return false;
  }

  // node_modules/@tanstack/query-core/build/modern/queriesObserver.js
  init_dirname();
  init_buffer2();
  init_process2();
  function difference(array1, array2) {
    return array1.filter((x) => !array2.includes(x));
  }
  function replaceAt(array, index, value) {
    const copy = array.slice(0);
    copy[index] = value;
    return copy;
  }
  var QueriesObserver = class extends Subscribable {
    #client;
    #result;
    #queries;
    #options;
    #observers;
    #combinedResult;
    #lastCombine;
    #lastResult;
    constructor(client, queries, options) {
      super();
      this.#client = client;
      this.#options = options;
      this.#queries = [];
      this.#observers = [];
      this.#result = [];
      this.setQueries(queries);
    }
    onSubscribe() {
      if (this.listeners.size === 1) {
        this.#observers.forEach((observer) => {
          observer.subscribe((result) => {
            this.#onUpdate(observer, result);
          });
        });
      }
    }
    onUnsubscribe() {
      if (!this.listeners.size) {
        this.destroy();
      }
    }
    destroy() {
      this.listeners = /* @__PURE__ */ new Set();
      this.#observers.forEach((observer) => {
        observer.destroy();
      });
    }
    setQueries(queries, options, notifyOptions) {
      this.#queries = queries;
      this.#options = options;
      notifyManager.batch(() => {
        const prevObservers = this.#observers;
        const newObserverMatches = this.#findMatchingObservers(this.#queries);
        newObserverMatches.forEach(
          (match) => match.observer.setOptions(match.defaultedQueryOptions, notifyOptions)
        );
        const newObservers = newObserverMatches.map((match) => match.observer);
        const newResult = newObservers.map(
          (observer) => observer.getCurrentResult()
        );
        const hasIndexChange = newObservers.some(
          (observer, index) => observer !== prevObservers[index]
        );
        if (prevObservers.length === newObservers.length && !hasIndexChange) {
          return;
        }
        this.#observers = newObservers;
        this.#result = newResult;
        if (!this.hasListeners()) {
          return;
        }
        difference(prevObservers, newObservers).forEach((observer) => {
          observer.destroy();
        });
        difference(newObservers, prevObservers).forEach((observer) => {
          observer.subscribe((result) => {
            this.#onUpdate(observer, result);
          });
        });
        this.#notify();
      });
    }
    getCurrentResult() {
      return this.#result;
    }
    getQueries() {
      return this.#observers.map((observer) => observer.getCurrentQuery());
    }
    getObservers() {
      return this.#observers;
    }
    getOptimisticResult(queries, combine) {
      const matches = this.#findMatchingObservers(queries);
      const result = matches.map(
        (match) => match.observer.getOptimisticResult(match.defaultedQueryOptions)
      );
      return [
        result,
        (r) => {
          return this.#combineResult(r ?? result, combine);
        },
        () => {
          return matches.map((match, index) => {
            const observerResult = result[index];
            return !match.defaultedQueryOptions.notifyOnChangeProps ? match.observer.trackResult(observerResult, (accessedProp) => {
              matches.forEach((m) => {
                m.observer.trackProp(accessedProp);
              });
            }) : observerResult;
          });
        }
      ];
    }
    #combineResult(input, combine) {
      if (combine) {
        if (!this.#combinedResult || this.#result !== this.#lastResult || combine !== this.#lastCombine) {
          this.#lastCombine = combine;
          this.#lastResult = this.#result;
          this.#combinedResult = replaceEqualDeep(
            this.#combinedResult,
            combine(input)
          );
        }
        return this.#combinedResult;
      }
      return input;
    }
    #findMatchingObservers(queries) {
      const prevObserversMap = new Map(
        this.#observers.map((observer) => [observer.options.queryHash, observer])
      );
      const observers = [];
      queries.forEach((options) => {
        const defaultedOptions = this.#client.defaultQueryOptions(options);
        const match = prevObserversMap.get(defaultedOptions.queryHash);
        if (match) {
          observers.push({
            defaultedQueryOptions: defaultedOptions,
            observer: match
          });
        } else {
          const existingObserver = this.#observers.find(
            (o) => o.options.queryHash === defaultedOptions.queryHash
          );
          observers.push({
            defaultedQueryOptions: defaultedOptions,
            observer: existingObserver ?? new QueryObserver(this.#client, defaultedOptions)
          });
        }
      });
      return observers.sort((a, b) => {
        return queries.findIndex(
          (q) => q.queryHash === a.defaultedQueryOptions.queryHash
        ) - queries.findIndex(
          (q) => q.queryHash === b.defaultedQueryOptions.queryHash
        );
      });
    }
    #onUpdate(observer, result) {
      const index = this.#observers.indexOf(observer);
      if (index !== -1) {
        this.#result = replaceAt(this.#result, index, result);
        this.#notify();
      }
    }
    #notify() {
      if (this.hasListeners()) {
        const previousResult = this.#combinedResult;
        const newResult = this.#combineResult(
          this.#result,
          this.#options?.combine
        );
        if (previousResult !== newResult) {
          notifyManager.batch(() => {
            this.listeners.forEach((listener) => {
              listener(this.#result);
            });
          });
        }
      }
    }
  };

  // node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js
  init_dirname();
  init_buffer2();
  init_process2();
  var InfiniteQueryObserver = class extends QueryObserver {
    constructor(client, options) {
      super(client, options);
    }
    bindMethods() {
      super.bindMethods();
      this.fetchNextPage = this.fetchNextPage.bind(this);
      this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
    }
    setOptions(options, notifyOptions) {
      super.setOptions(
        {
          ...options,
          behavior: infiniteQueryBehavior()
        },
        notifyOptions
      );
    }
    getOptimisticResult(options) {
      options.behavior = infiniteQueryBehavior();
      return super.getOptimisticResult(options);
    }
    fetchNextPage(options) {
      return this.fetch({
        ...options,
        meta: {
          fetchMore: { direction: "forward" }
        }
      });
    }
    fetchPreviousPage(options) {
      return this.fetch({
        ...options,
        meta: {
          fetchMore: { direction: "backward" }
        }
      });
    }
    createResult(query, options) {
      const { state } = query;
      const parentResult = super.createResult(query, options);
      const { isFetching, isRefetching, isError, isRefetchError } = parentResult;
      const fetchDirection = state.fetchMeta?.fetchMore?.direction;
      const isFetchNextPageError = isError && fetchDirection === "forward";
      const isFetchingNextPage = isFetching && fetchDirection === "forward";
      const isFetchPreviousPageError = isError && fetchDirection === "backward";
      const isFetchingPreviousPage = isFetching && fetchDirection === "backward";
      const result = {
        ...parentResult,
        fetchNextPage: this.fetchNextPage,
        fetchPreviousPage: this.fetchPreviousPage,
        hasNextPage: hasNextPage(options, state.data),
        hasPreviousPage: hasPreviousPage(options, state.data),
        isFetchNextPageError,
        isFetchingNextPage,
        isFetchPreviousPageError,
        isFetchingPreviousPage,
        isRefetchError: isRefetchError && !isFetchNextPageError && !isFetchPreviousPageError,
        isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
      };
      return result;
    }
  };

  // node_modules/@tanstack/query-core/build/modern/mutationObserver.js
  init_dirname();
  init_buffer2();
  init_process2();
  var MutationObserver = class extends Subscribable {
    #client;
    #currentResult = void 0;
    #currentMutation;
    #mutateOptions;
    constructor(client, options) {
      super();
      this.#client = client;
      this.setOptions(options);
      this.bindMethods();
      this.#updateResult();
    }
    bindMethods() {
      this.mutate = this.mutate.bind(this);
      this.reset = this.reset.bind(this);
    }
    setOptions(options) {
      const prevOptions = this.options;
      this.options = this.#client.defaultMutationOptions(options);
      if (!shallowEqualObjects(this.options, prevOptions)) {
        this.#client.getMutationCache().notify({
          type: "observerOptionsUpdated",
          mutation: this.#currentMutation,
          observer: this
        });
      }
      if (prevOptions?.mutationKey && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
        this.reset();
      } else if (this.#currentMutation?.state.status === "pending") {
        this.#currentMutation.setOptions(this.options);
      }
    }
    onUnsubscribe() {
      if (!this.hasListeners()) {
        this.#currentMutation?.removeObserver(this);
      }
    }
    onMutationUpdate(action) {
      this.#updateResult();
      this.#notify(action);
    }
    getCurrentResult() {
      return this.#currentResult;
    }
    reset() {
      this.#currentMutation?.removeObserver(this);
      this.#currentMutation = void 0;
      this.#updateResult();
      this.#notify();
    }
    mutate(variables, options) {
      this.#mutateOptions = options;
      this.#currentMutation?.removeObserver(this);
      this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
      this.#currentMutation.addObserver(this);
      return this.#currentMutation.execute(variables);
    }
    #updateResult() {
      const state = this.#currentMutation?.state ?? getDefaultState();
      this.#currentResult = {
        ...state,
        isPending: state.status === "pending",
        isSuccess: state.status === "success",
        isError: state.status === "error",
        isIdle: state.status === "idle",
        mutate: this.mutate,
        reset: this.reset
      };
    }
    #notify(action) {
      notifyManager.batch(() => {
        if (this.#mutateOptions && this.hasListeners()) {
          const variables = this.#currentResult.variables;
          const context = this.#currentResult.context;
          if (action?.type === "success") {
            this.#mutateOptions.onSuccess?.(action.data, variables, context);
            this.#mutateOptions.onSettled?.(action.data, null, variables, context);
          } else if (action?.type === "error") {
            this.#mutateOptions.onError?.(action.error, variables, context);
            this.#mutateOptions.onSettled?.(
              void 0,
              action.error,
              variables,
              context
            );
          }
        }
        this.listeners.forEach((listener) => {
          listener(this.#currentResult);
        });
      });
    }
  };

  // node_modules/@tanstack/react-query/build/modern/useQueries.js
  init_dirname();
  init_buffer2();
  init_process2();
  var React5 = __toESM(require_react(), 1);

  // node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
  init_dirname();
  init_buffer2();
  init_process2();
  var React = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var QueryClientContext = React.createContext(
    void 0
  );
  var useQueryClient = (queryClient) => {
    const client = React.useContext(QueryClientContext);
    if (queryClient) {
      return queryClient;
    }
    if (!client) {
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return client;
  };

  // node_modules/@tanstack/react-query/build/modern/isRestoring.js
  init_dirname();
  init_buffer2();
  init_process2();
  var React2 = __toESM(require_react(), 1);
  var IsRestoringContext = React2.createContext(false);
  var useIsRestoring = () => React2.useContext(IsRestoringContext);
  var IsRestoringProvider = IsRestoringContext.Provider;

  // node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
  init_dirname();
  init_buffer2();
  init_process2();
  var React3 = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  function createValue() {
    let isReset = false;
    return {
      clearReset: () => {
        isReset = false;
      },
      reset: () => {
        isReset = true;
      },
      isReset: () => {
        return isReset;
      }
    };
  }
  var QueryErrorResetBoundaryContext = React3.createContext(createValue());
  var useQueryErrorResetBoundary = () => React3.useContext(QueryErrorResetBoundaryContext);

  // node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
  init_dirname();
  init_buffer2();
  init_process2();
  var React4 = __toESM(require_react(), 1);

  // node_modules/@tanstack/react-query/build/modern/utils.js
  init_dirname();
  init_buffer2();
  init_process2();
  function shouldThrowError(throwError, params) {
    if (typeof throwError === "function") {
      return throwError(...params);
    }
    return !!throwError;
  }
  function noop4() {
  }

  // node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
  var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
    if (options.suspense || options.throwOnError) {
      if (!errorResetBoundary.isReset()) {
        options.retryOnMount = false;
      }
    }
  };
  var useClearResetErrorBoundary = (errorResetBoundary) => {
    React4.useEffect(() => {
      errorResetBoundary.clearReset();
    }, [errorResetBoundary]);
  };
  var getHasError = ({
    result,
    errorResetBoundary,
    throwOnError,
    query
  }) => {
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && shouldThrowError(throwOnError, [result.error, query]);
  };

  // node_modules/@tanstack/react-query/build/modern/suspense.js
  init_dirname();
  init_buffer2();
  init_process2();
  var defaultThrowOnError = (_error, query) => query.state.data === void 0;
  var ensureSuspenseTimers = (defaultedOptions) => {
    if (defaultedOptions.suspense) {
      if (defaultedOptions.staleTime === void 0) {
        defaultedOptions.staleTime = 1e3;
      }
      if (typeof defaultedOptions.gcTime === "number") {
        defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, 1e3);
      }
    }
  };
  var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
  var shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
  var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
    errorResetBoundary.clearReset();
  });

  // node_modules/@tanstack/react-query/build/modern/useQueries.js
  function useQueries({
    queries,
    ...options
  }, queryClient) {
    const client = useQueryClient(queryClient);
    const isRestoring = useIsRestoring();
    const errorResetBoundary = useQueryErrorResetBoundary();
    const defaultedQueries = React5.useMemo(
      () => queries.map((opts) => {
        const defaultedOptions = client.defaultQueryOptions(
          opts
        );
        defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
        return defaultedOptions;
      }),
      [queries, client, isRestoring]
    );
    defaultedQueries.forEach((query) => {
      ensureSuspenseTimers(query);
      ensurePreventErrorBoundaryRetry(query, errorResetBoundary);
    });
    useClearResetErrorBoundary(errorResetBoundary);
    const [observer] = React5.useState(
      () => new QueriesObserver(
        client,
        defaultedQueries,
        options
      )
    );
    const [optimisticResult, getCombinedResult, trackResult] = observer.getOptimisticResult(
      defaultedQueries,
      options.combine
    );
    React5.useSyncExternalStore(
      React5.useCallback(
        (onStoreChange) => isRestoring ? () => void 0 : observer.subscribe(notifyManager.batchCalls(onStoreChange)),
        [observer, isRestoring]
      ),
      () => observer.getCurrentResult(),
      () => observer.getCurrentResult()
    );
    React5.useEffect(() => {
      observer.setQueries(
        defaultedQueries,
        options,
        {
          listeners: false
        }
      );
    }, [defaultedQueries, options, observer]);
    const shouldAtLeastOneSuspend = optimisticResult.some(
      (result, index) => shouldSuspend(defaultedQueries[index], result)
    );
    const suspensePromises = shouldAtLeastOneSuspend ? optimisticResult.flatMap((result, index) => {
      const opts = defaultedQueries[index];
      if (opts) {
        const queryObserver = new QueryObserver(client, opts);
        if (shouldSuspend(opts, result)) {
          return fetchOptimistic(opts, queryObserver, errorResetBoundary);
        } else if (willFetch(result, isRestoring)) {
          void fetchOptimistic(opts, queryObserver, errorResetBoundary);
        }
      }
      return [];
    }) : [];
    if (suspensePromises.length > 0) {
      throw Promise.all(suspensePromises);
    }
    const firstSingleResultWhichShouldThrow = optimisticResult.find(
      (result, index) => {
        const query = defaultedQueries[index];
        return query && getHasError({
          result,
          errorResetBoundary,
          throwOnError: query.throwOnError,
          query: client.getQueryCache().get(query.queryHash)
        });
      }
    );
    if (firstSingleResultWhichShouldThrow?.error) {
      throw firstSingleResultWhichShouldThrow.error;
    }
    return getCombinedResult(trackResult());
  }

  // node_modules/@tanstack/react-query/build/modern/useQuery.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
  init_dirname();
  init_buffer2();
  init_process2();
  var React6 = __toESM(require_react(), 1);
  function useBaseQuery(options, Observer, queryClient) {
    if (true) {
      if (typeof options !== "object" || Array.isArray(options)) {
        throw new Error(
          'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
        );
      }
    }
    const client = useQueryClient(queryClient);
    const isRestoring = useIsRestoring();
    const errorResetBoundary = useQueryErrorResetBoundary();
    const defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(
      defaultedOptions
    );
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    ensureSuspenseTimers(defaultedOptions);
    ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary);
    useClearResetErrorBoundary(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = React6.useState(
      () => new Observer(
        client,
        defaultedOptions
      )
    );
    const result = observer.getOptimisticResult(defaultedOptions);
    React6.useSyncExternalStore(
      React6.useCallback(
        (onStoreChange) => {
          const unsubscribe = isRestoring ? () => void 0 : observer.subscribe(notifyManager.batchCalls(onStoreChange));
          observer.updateResult();
          return unsubscribe;
        },
        [observer, isRestoring]
      ),
      () => observer.getCurrentResult(),
      () => observer.getCurrentResult()
    );
    React6.useEffect(() => {
      observer.setOptions(defaultedOptions, { listeners: false });
    }, [defaultedOptions, observer]);
    if (shouldSuspend(defaultedOptions, result)) {
      throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
    }
    if (getHasError({
      result,
      errorResetBoundary,
      throwOnError: defaultedOptions.throwOnError,
      query: client.getQueryCache().get(defaultedOptions.queryHash)
    })) {
      throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(
      defaultedOptions,
      result
    );
    if (defaultedOptions.experimental_prefetchInRender && !isServer && willFetch(result, isRestoring)) {
      const promise = isNewCacheEntry ? (
        // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        fetchOptimistic(defaultedOptions, observer, errorResetBoundary)
      ) : (
        // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        client.getQueryCache().get(defaultedOptions.queryHash)?.promise
      );
      promise?.catch(noop4).finally(() => {
        if (!observer.hasListeners()) {
          observer.updateResult();
        }
      });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
  }

  // node_modules/@tanstack/react-query/build/modern/useQuery.js
  function useQuery(options, queryClient) {
    return useBaseQuery(options, QueryObserver, queryClient);
  }

  // node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js
  init_dirname();
  init_buffer2();
  init_process2();
  function useSuspenseQuery(options, queryClient) {
    if (true) {
      if (options.queryFn === skipToken) {
        console.error("skipToken is not allowed for useSuspenseQuery");
      }
    }
    return useBaseQuery(
      {
        ...options,
        enabled: true,
        suspense: true,
        throwOnError: defaultThrowOnError,
        placeholderData: void 0
      },
      QueryObserver,
      queryClient
    );
  }

  // node_modules/@tanstack/react-query/build/modern/useSuspenseInfiniteQuery.js
  init_dirname();
  init_buffer2();
  init_process2();
  function useSuspenseInfiniteQuery(options, queryClient) {
    if (true) {
      if (options.queryFn === skipToken) {
        console.error("skipToken is not allowed for useSuspenseInfiniteQuery");
      }
    }
    return useBaseQuery(
      {
        ...options,
        enabled: true,
        suspense: true,
        throwOnError: defaultThrowOnError
      },
      InfiniteQueryObserver,
      queryClient
    );
  }

  // node_modules/@tanstack/react-query/build/modern/useSuspenseQueries.js
  init_dirname();
  init_buffer2();
  init_process2();
  function useSuspenseQueries(options, queryClient) {
    return useQueries(
      {
        ...options,
        queries: options.queries.map((query) => {
          if (true) {
            if (query.queryFn === skipToken) {
              console.error("skipToken is not allowed for useSuspenseQueries");
            }
          }
          return {
            ...query,
            suspense: true,
            throwOnError: defaultThrowOnError,
            enabled: true,
            placeholderData: void 0
          };
        })
      },
      queryClient
    );
  }

  // node_modules/@tanstack/react-query/build/modern/usePrefetchQuery.js
  init_dirname();
  init_buffer2();
  init_process2();
  function usePrefetchQuery(options, queryClient) {
    const client = useQueryClient(queryClient);
    if (!client.getQueryState(options.queryKey)) {
      client.prefetchQuery(options);
    }
  }

  // node_modules/@tanstack/react-query/build/modern/usePrefetchInfiniteQuery.js
  init_dirname();
  init_buffer2();
  init_process2();
  function usePrefetchInfiniteQuery(options, queryClient) {
    const client = useQueryClient(queryClient);
    if (!client.getQueryState(options.queryKey)) {
      client.prefetchInfiniteQuery(options);
    }
  }

  // node_modules/@tanstack/react-query/build/modern/queryOptions.js
  init_dirname();
  init_buffer2();
  init_process2();
  function queryOptions(options) {
    return options;
  }

  // node_modules/@tanstack/react-query/build/modern/infiniteQueryOptions.js
  init_dirname();
  init_buffer2();
  init_process2();
  function infiniteQueryOptions(options) {
    return options;
  }

  // node_modules/@tanstack/react-query/build/modern/useMutation.js
  init_dirname();
  init_buffer2();
  init_process2();
  var React7 = __toESM(require_react(), 1);
  function useMutation(options, queryClient) {
    const client = useQueryClient(queryClient);
    const [observer] = React7.useState(
      () => new MutationObserver(
        client,
        options
      )
    );
    React7.useEffect(() => {
      observer.setOptions(options);
    }, [observer, options]);
    const result = React7.useSyncExternalStore(
      React7.useCallback(
        (onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)),
        [observer]
      ),
      () => observer.getCurrentResult(),
      () => observer.getCurrentResult()
    );
    const mutate = React7.useCallback(
      (variables, mutateOptions) => {
        observer.mutate(variables, mutateOptions).catch(noop4);
      },
      [observer]
    );
    if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
      throw result.error;
    }
    return { ...result, mutate, mutateAsync: result.mutate };
  }

  // node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js
  init_dirname();
  init_buffer2();
  init_process2();
  function useInfiniteQuery(options, queryClient) {
    return useBaseQuery(
      options,
      InfiniteQueryObserver,
      queryClient
    );
  }

  // node_modules/@trpc/react-query/dist/internals/getQueryKey.mjs
  function getQueryKeyInternal(path, input, type) {
    const splitPath = path.flatMap((part) => part.split("."));
    if (!input && (!type || type === "any")) {
      return splitPath.length ? [
        splitPath
      ] : [];
    }
    if (type === "infinite" && isObject(input) && ("direction" in input || "cursor" in input)) {
      const { cursor: _, direction: __, ...inputWithoutCursorAndDirection } = input;
      return [
        splitPath,
        {
          input: inputWithoutCursorAndDirection,
          type: "infinite"
        }
      ];
    }
    return [
      splitPath,
      {
        ...typeof input !== "undefined" && input !== skipToken && {
          input
        },
        ...type && type !== "any" && {
          type
        }
      }
    ];
  }
  function getMutationKeyInternal(path) {
    return getQueryKeyInternal(path, void 0, "any");
  }

  // node_modules/@trpc/react-query/dist/createTRPCReact.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var React11 = __toESM(require_react(), 1);

  // node_modules/@trpc/react-query/dist/shared/proxy/decorationProxy.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function createReactDecoration(hooks) {
    return createRecursiveProxy(({ path, args }) => {
      const pathCopy = [
        ...path
      ];
      const lastArg = pathCopy.pop();
      if (lastArg === "useMutation") {
        return hooks[lastArg](pathCopy, ...args);
      }
      if (lastArg === "_def") {
        return {
          path: pathCopy
        };
      }
      const [input, ...rest] = args;
      const opts = rest[0] || {};
      return hooks[lastArg](pathCopy, input, opts);
    });
  }

  // node_modules/@trpc/react-query/dist/shared/proxy/utilsProxy.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/react-query/dist/internals/context.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var React8 = __toESM(require_react(), 1);
  var contextProps = [
    "client",
    "ssrContext",
    "ssrState",
    "abortOnUnmount"
  ];
  var TRPCContext = React8.createContext?.(null);

  // node_modules/@trpc/react-query/dist/shared/proxy/utilsProxy.mjs
  var getQueryType = (utilName) => {
    switch (utilName) {
      case "queryOptions":
      case "fetch":
      case "ensureData":
      case "prefetch":
      case "getData":
      case "setData":
      case "setQueriesData":
        return "query";
      case "infiniteQueryOptions":
      case "fetchInfinite":
      case "prefetchInfinite":
      case "getInfiniteData":
      case "setInfiniteData":
        return "infinite";
      case "setMutationDefaults":
      case "getMutationDefaults":
      case "isMutating":
      case "cancel":
      case "invalidate":
      case "refetch":
      case "reset":
        return "any";
    }
  };
  function createRecursiveUtilsProxy(context) {
    return createRecursiveProxy((opts) => {
      const path = [
        ...opts.path
      ];
      const utilName = path.pop();
      const args = [
        ...opts.args
      ];
      const input = args.shift();
      const queryType = getQueryType(utilName);
      const queryKey = getQueryKeyInternal(path, input, queryType);
      const contextMap = {
        infiniteQueryOptions: () => context.infiniteQueryOptions(path, queryKey, args[0]),
        queryOptions: () => context.queryOptions(path, queryKey, ...args),
        /**
        * DecorateQueryProcedure
        */
        fetch: () => context.fetchQuery(queryKey, ...args),
        fetchInfinite: () => context.fetchInfiniteQuery(queryKey, args[0]),
        prefetch: () => context.prefetchQuery(queryKey, ...args),
        prefetchInfinite: () => context.prefetchInfiniteQuery(queryKey, args[0]),
        ensureData: () => context.ensureQueryData(queryKey, ...args),
        invalidate: () => context.invalidateQueries(queryKey, ...args),
        reset: () => context.resetQueries(queryKey, ...args),
        refetch: () => context.refetchQueries(queryKey, ...args),
        cancel: () => context.cancelQuery(queryKey, ...args),
        setData: () => {
          context.setQueryData(queryKey, args[0], args[1]);
        },
        setQueriesData: () => context.setQueriesData(queryKey, args[0], args[1], args[2]),
        setInfiniteData: () => {
          context.setInfiniteQueryData(queryKey, args[0], args[1]);
        },
        getData: () => context.getQueryData(queryKey),
        getInfiniteData: () => context.getInfiniteQueryData(queryKey),
        /**
        * DecorateMutationProcedure
        */
        setMutationDefaults: () => context.setMutationDefaults(getMutationKeyInternal(path), input),
        getMutationDefaults: () => context.getMutationDefaults(getMutationKeyInternal(path)),
        isMutating: () => context.isMutating({
          mutationKey: getMutationKeyInternal(path)
        })
      };
      return contextMap[utilName]();
    });
  }
  function createReactQueryUtils(context) {
    const clientProxy = createTRPCClientProxy(context.client);
    const proxy = createRecursiveUtilsProxy(context);
    return createFlatProxy((key) => {
      const contextName = key;
      if (contextName === "client") {
        return clientProxy;
      }
      if (contextProps.includes(contextName)) {
        return context[contextName];
      }
      return proxy[key];
    });
  }

  // node_modules/@trpc/react-query/dist/shared/hooks/createHooksInternal.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var React10 = __toESM(require_react(), 1);

  // node_modules/@trpc/react-query/dist/internals/getClientArgs.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function getClientArgs(queryKey, opts, infiniteParams) {
    const path = queryKey[0];
    let input = queryKey[1]?.input;
    if (infiniteParams) {
      input = {
        ...input ?? {},
        ...infiniteParams.pageParam ? {
          cursor: infiniteParams.pageParam
        } : {},
        direction: infiniteParams.direction
      };
    }
    return [
      path.join("."),
      input,
      opts?.trpc
    ];
  }

  // node_modules/@trpc/react-query/dist/internals/trpcResult.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var React9 = __toESM(require_react(), 1);
  function createTRPCOptionsResult(value) {
    const path = value.path.join(".");
    return {
      path
    };
  }
  function useHookResult(value) {
    const result = createTRPCOptionsResult(value);
    return React9.useMemo(() => result, [
      result
    ]);
  }
  async function buildQueryFromAsyncIterable(asyncIterable, queryClient, queryKey) {
    const queryCache = queryClient.getQueryCache();
    const query = queryCache.build(queryClient, {
      queryKey
    });
    query.setState({
      data: [],
      status: "success"
    });
    const aggregate = [];
    for await (const value of asyncIterable) {
      aggregate.push(value);
      query.setState({
        data: [
          ...aggregate
        ]
      });
    }
    return aggregate;
  }

  // node_modules/@trpc/react-query/dist/utils/createUtilityFunctions.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function createUtilityFunctions(opts) {
    const { client, queryClient } = opts;
    const untypedClient = client instanceof TRPCUntypedClient ? client : getUntypedClient(client);
    return {
      infiniteQueryOptions: (path, queryKey, opts2) => {
        const inputIsSkipToken = queryKey[1]?.input === skipToken;
        const queryFn = async (queryFnContext) => {
          const actualOpts = {
            ...opts2,
            trpc: {
              ...opts2?.trpc,
              ...opts2?.trpc?.abortOnUnmount ? {
                signal: queryFnContext.signal
              } : {
                signal: null
              }
            }
          };
          const result = await untypedClient.query(...getClientArgs(queryKey, actualOpts, {
            direction: queryFnContext.direction,
            pageParam: queryFnContext.pageParam
          }));
          return result;
        };
        return Object.assign(infiniteQueryOptions({
          ...opts2,
          initialData: opts2?.initialData,
          queryKey,
          queryFn: inputIsSkipToken ? skipToken : queryFn,
          initialPageParam: opts2?.initialCursor ?? null
        }), {
          trpc: createTRPCOptionsResult({
            path
          })
        });
      },
      queryOptions: (path, queryKey, opts2) => {
        const inputIsSkipToken = queryKey[1]?.input === skipToken;
        const queryFn = async (queryFnContext) => {
          const actualOpts = {
            ...opts2,
            trpc: {
              ...opts2?.trpc,
              ...opts2?.trpc?.abortOnUnmount ? {
                signal: queryFnContext.signal
              } : {
                signal: null
              }
            }
          };
          const result = await untypedClient.query(...getClientArgs(queryKey, actualOpts));
          if (isAsyncIterable(result)) {
            return buildQueryFromAsyncIterable(result, queryClient, queryKey);
          }
          return result;
        };
        return Object.assign(queryOptions({
          ...opts2,
          initialData: opts2?.initialData,
          queryKey,
          queryFn: inputIsSkipToken ? skipToken : queryFn
        }), {
          trpc: createTRPCOptionsResult({
            path
          })
        });
      },
      fetchQuery: (queryKey, opts2) => {
        return queryClient.fetchQuery({
          ...opts2,
          queryKey,
          queryFn: () => untypedClient.query(...getClientArgs(queryKey, opts2))
        });
      },
      fetchInfiniteQuery: (queryKey, opts2) => {
        return queryClient.fetchInfiniteQuery({
          ...opts2,
          queryKey,
          queryFn: ({ pageParam, direction }) => {
            return untypedClient.query(...getClientArgs(queryKey, opts2, {
              pageParam,
              direction
            }));
          },
          initialPageParam: opts2?.initialCursor ?? null
        });
      },
      prefetchQuery: (queryKey, opts2) => {
        return queryClient.prefetchQuery({
          ...opts2,
          queryKey,
          queryFn: () => untypedClient.query(...getClientArgs(queryKey, opts2))
        });
      },
      prefetchInfiniteQuery: (queryKey, opts2) => {
        return queryClient.prefetchInfiniteQuery({
          ...opts2,
          queryKey,
          queryFn: ({ pageParam, direction }) => {
            return untypedClient.query(...getClientArgs(queryKey, opts2, {
              pageParam,
              direction
            }));
          },
          initialPageParam: opts2?.initialCursor ?? null
        });
      },
      ensureQueryData: (queryKey, opts2) => {
        return queryClient.ensureQueryData({
          ...opts2,
          queryKey,
          queryFn: () => untypedClient.query(...getClientArgs(queryKey, opts2))
        });
      },
      invalidateQueries: (queryKey, filters, options) => {
        return queryClient.invalidateQueries({
          ...filters,
          queryKey
        }, options);
      },
      resetQueries: (queryKey, filters, options) => {
        return queryClient.resetQueries({
          ...filters,
          queryKey
        }, options);
      },
      refetchQueries: (queryKey, filters, options) => {
        return queryClient.refetchQueries({
          ...filters,
          queryKey
        }, options);
      },
      cancelQuery: (queryKey, options) => {
        return queryClient.cancelQueries({
          queryKey
        }, options);
      },
      setQueryData: (queryKey, updater, options) => {
        return queryClient.setQueryData(queryKey, updater, options);
      },
      // eslint-disable-next-line max-params
      setQueriesData: (queryKey, filters, updater, options) => {
        return queryClient.setQueriesData({
          ...filters,
          queryKey
        }, updater, options);
      },
      getQueryData: (queryKey) => {
        return queryClient.getQueryData(queryKey);
      },
      setInfiniteQueryData: (queryKey, updater, options) => {
        return queryClient.setQueryData(queryKey, updater, options);
      },
      getInfiniteQueryData: (queryKey) => {
        return queryClient.getQueryData(queryKey);
      },
      setMutationDefaults: (mutationKey, options) => {
        const path = mutationKey[0];
        const canonicalMutationFn = (input) => {
          return untypedClient.mutation(...getClientArgs([
            path,
            {
              input
            }
          ], opts));
        };
        return queryClient.setMutationDefaults(mutationKey, typeof options === "function" ? options({
          canonicalMutationFn
        }) : options);
      },
      getMutationDefaults: (mutationKey) => {
        return queryClient.getMutationDefaults(mutationKey);
      },
      isMutating: (filters) => {
        return queryClient.isMutating({
          ...filters,
          exact: true
        });
      }
    };
  }

  // node_modules/@trpc/react-query/dist/shared/proxy/useQueriesProxy.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function createUseQueries(client) {
    return createRecursiveProxy((opts) => {
      const arrayPath = opts.path;
      const dotPath = arrayPath.join(".");
      const [input, _opts] = opts.args;
      const options = {
        queryKey: getQueryKeyInternal(arrayPath, input, "query"),
        queryFn: () => {
          return client.query(dotPath, input, _opts?.trpc);
        },
        ..._opts
      };
      return options;
    });
  }

  // node_modules/@trpc/react-query/dist/shared/hooks/createHooksInternal.mjs
  function createRootHooks(config) {
    const mutationSuccessOverride = config?.overrides?.useMutation?.onSuccess ?? ((options) => options.originalFn());
    const Context = config?.context ?? TRPCContext;
    const createClient = (opts) => {
      return createTRPCUntypedClient(opts);
    };
    const TRPCProvider = (props) => {
      const { abortOnUnmount = false, client, queryClient, ssrContext } = props;
      const [ssrState, setSSRState] = React10.useState(props.ssrState ?? false);
      const fns = React10.useMemo(() => createUtilityFunctions({
        client,
        queryClient
      }), [
        client,
        queryClient
      ]);
      const contextValue = React10.useMemo(() => ({
        abortOnUnmount,
        queryClient,
        client,
        ssrContext: ssrContext ?? null,
        ssrState,
        ...fns
      }), [
        abortOnUnmount,
        client,
        fns,
        queryClient,
        ssrContext,
        ssrState
      ]);
      React10.useEffect(() => {
        setSSRState((state) => state ? "mounted" : false);
      }, []);
      return /* @__PURE__ */ React10.createElement(Context.Provider, {
        value: contextValue
      }, props.children);
    };
    function useContext5() {
      const context = React10.useContext(Context);
      if (!context) {
        throw new Error("Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?");
      }
      return context;
    }
    function useSSRQueryOptionsIfNeeded(queryKey, opts) {
      const { queryClient, ssrState } = useContext5();
      return ssrState && ssrState !== "mounted" && queryClient.getQueryCache().find({
        queryKey
      })?.state.status === "error" ? {
        retryOnMount: false,
        ...opts
      } : opts;
    }
    function useQuery$1(path, input, opts) {
      const context = useContext5();
      const { abortOnUnmount, client, ssrState, queryClient, prefetchQuery } = context;
      const queryKey = getQueryKeyInternal(path, input, "query");
      const defaultOpts = queryClient.getQueryDefaults(queryKey);
      const isInputSkipToken = input === skipToken;
      if (typeof globalThis === "undefined" && ssrState === "prepass" && opts?.trpc?.ssr !== false && (opts?.enabled ?? defaultOpts?.enabled) !== false && !isInputSkipToken && !queryClient.getQueryCache().find({
        queryKey
      })) {
        void prefetchQuery(queryKey, opts);
      }
      const ssrOpts = useSSRQueryOptionsIfNeeded(queryKey, {
        ...defaultOpts,
        ...opts
      });
      const shouldAbortOnUnmount = opts?.trpc?.abortOnUnmount ?? config?.abortOnUnmount ?? abortOnUnmount;
      const hook = useQuery({
        ...ssrOpts,
        queryKey,
        queryFn: isInputSkipToken ? input : async (queryFunctionContext) => {
          const actualOpts = {
            ...ssrOpts,
            trpc: {
              ...ssrOpts?.trpc,
              ...shouldAbortOnUnmount ? {
                signal: queryFunctionContext.signal
              } : {
                signal: null
              }
            }
          };
          const result = await client.query(...getClientArgs(queryKey, actualOpts));
          if (isAsyncIterable(result)) {
            return buildQueryFromAsyncIterable(result, queryClient, queryKey);
          }
          return result;
        }
      }, queryClient);
      hook.trpc = useHookResult({
        path
      });
      return hook;
    }
    function usePrefetchQuery$1(path, input, opts) {
      const context = useContext5();
      const queryKey = getQueryKeyInternal(path, input, "query");
      const isInputSkipToken = input === skipToken;
      const shouldAbortOnUnmount = opts?.trpc?.abortOnUnmount ?? config?.abortOnUnmount ?? context.abortOnUnmount;
      usePrefetchQuery({
        ...opts,
        queryKey,
        queryFn: isInputSkipToken ? input : (queryFunctionContext) => {
          const actualOpts = {
            trpc: {
              ...shouldAbortOnUnmount ? {
                signal: queryFunctionContext.signal
              } : {}
            }
          };
          return context.client.query(...getClientArgs(queryKey, actualOpts));
        }
      });
    }
    function useSuspenseQuery$1(path, input, opts) {
      const context = useContext5();
      const queryKey = getQueryKeyInternal(path, input, "query");
      const shouldAbortOnUnmount = opts?.trpc?.abortOnUnmount ?? config?.abortOnUnmount ?? context.abortOnUnmount;
      const hook = useSuspenseQuery({
        ...opts,
        queryKey,
        queryFn: (queryFunctionContext) => {
          const actualOpts = {
            trpc: {
              ...shouldAbortOnUnmount ? {
                signal: queryFunctionContext.signal
              } : {
                signal: null
              }
            }
          };
          return context.client.query(...getClientArgs(queryKey, actualOpts));
        }
      }, context.queryClient);
      hook.trpc = useHookResult({
        path
      });
      return [
        hook.data,
        hook
      ];
    }
    function useMutation$1(path, opts) {
      const { client, queryClient } = useContext5();
      const mutationKey = getMutationKeyInternal(path);
      const defaultOpts = queryClient.defaultMutationOptions(queryClient.getMutationDefaults(mutationKey));
      const hook = useMutation({
        ...opts,
        mutationKey,
        mutationFn: (input) => {
          return client.mutation(...getClientArgs([
            path,
            {
              input
            }
          ], opts));
        },
        onSuccess(...args) {
          const originalFn = () => opts?.onSuccess?.(...args) ?? defaultOpts?.onSuccess?.(...args);
          return mutationSuccessOverride({
            originalFn,
            queryClient,
            meta: opts?.meta ?? defaultOpts?.meta ?? {}
          });
        }
      }, queryClient);
      hook.trpc = useHookResult({
        path
      });
      return hook;
    }
    function useSubscription(path, input, opts) {
      const enabled = opts?.enabled ?? input !== skipToken;
      const queryKey = hashKey(getQueryKeyInternal(path, input, "any"));
      const { client } = useContext5();
      const optsRef = React10.useRef(opts);
      optsRef.current = opts;
      React10.useEffect(() => {
        if (!enabled) {
          return;
        }
        let isStopped = false;
        const subscription = client.subscription(path.join("."), input ?? void 0, {
          onStarted: () => {
            if (!isStopped) {
              optsRef.current.onStarted?.();
            }
          },
          onData: (data) => {
            if (!isStopped) {
              optsRef.current.onData(data);
            }
          },
          onError: (err) => {
            if (!isStopped) {
              optsRef.current.onError?.(err);
            }
          }
        });
        return () => {
          isStopped = true;
          subscription.unsubscribe();
        };
      }, [
        queryKey,
        enabled
      ]);
    }
    function useInfiniteQuery$1(path, input, opts) {
      const { client, ssrState, prefetchInfiniteQuery, queryClient, abortOnUnmount } = useContext5();
      const queryKey = getQueryKeyInternal(path, input, "infinite");
      const defaultOpts = queryClient.getQueryDefaults(queryKey);
      const isInputSkipToken = input === skipToken;
      if (typeof globalThis === "undefined" && ssrState === "prepass" && opts?.trpc?.ssr !== false && (opts?.enabled ?? defaultOpts?.enabled) !== false && !isInputSkipToken && !queryClient.getQueryCache().find({
        queryKey
      })) {
        void prefetchInfiniteQuery(queryKey, {
          ...defaultOpts,
          ...opts
        });
      }
      const ssrOpts = useSSRQueryOptionsIfNeeded(queryKey, {
        ...defaultOpts,
        ...opts
      });
      const shouldAbortOnUnmount = opts?.trpc?.abortOnUnmount ?? abortOnUnmount;
      const hook = useInfiniteQuery({
        ...ssrOpts,
        initialPageParam: opts.initialCursor ?? null,
        persister: opts.persister,
        queryKey,
        queryFn: isInputSkipToken ? input : (queryFunctionContext) => {
          const actualOpts = {
            ...ssrOpts,
            trpc: {
              ...ssrOpts?.trpc,
              ...shouldAbortOnUnmount ? {
                signal: queryFunctionContext.signal
              } : {
                signal: null
              }
            }
          };
          return client.query(...getClientArgs(queryKey, actualOpts, {
            pageParam: queryFunctionContext.pageParam ?? opts.initialCursor,
            direction: queryFunctionContext.direction
          }));
        }
      }, queryClient);
      hook.trpc = useHookResult({
        path
      });
      return hook;
    }
    function usePrefetchInfiniteQuery$1(path, input, opts) {
      const context = useContext5();
      const queryKey = getQueryKeyInternal(path, input, "infinite");
      const defaultOpts = context.queryClient.getQueryDefaults(queryKey);
      const isInputSkipToken = input === skipToken;
      const ssrOpts = useSSRQueryOptionsIfNeeded(queryKey, {
        ...defaultOpts,
        ...opts
      });
      const shouldAbortOnUnmount = opts?.trpc?.abortOnUnmount ?? context.abortOnUnmount;
      usePrefetchInfiniteQuery({
        ...opts,
        initialPageParam: opts.initialCursor ?? null,
        queryKey,
        queryFn: isInputSkipToken ? input : (queryFunctionContext) => {
          const actualOpts = {
            ...ssrOpts,
            trpc: {
              ...ssrOpts?.trpc,
              ...shouldAbortOnUnmount ? {
                signal: queryFunctionContext.signal
              } : {}
            }
          };
          return context.client.query(...getClientArgs(queryKey, actualOpts, {
            pageParam: queryFunctionContext.pageParam ?? opts.initialCursor,
            direction: queryFunctionContext.direction
          }));
        }
      });
    }
    function useSuspenseInfiniteQuery$1(path, input, opts) {
      const context = useContext5();
      const queryKey = getQueryKeyInternal(path, input, "infinite");
      const defaultOpts = context.queryClient.getQueryDefaults(queryKey);
      const ssrOpts = useSSRQueryOptionsIfNeeded(queryKey, {
        ...defaultOpts,
        ...opts
      });
      const shouldAbortOnUnmount = opts?.trpc?.abortOnUnmount ?? context.abortOnUnmount;
      const hook = useSuspenseInfiniteQuery({
        ...opts,
        initialPageParam: opts.initialCursor ?? null,
        queryKey,
        queryFn: (queryFunctionContext) => {
          const actualOpts = {
            ...ssrOpts,
            trpc: {
              ...ssrOpts?.trpc,
              ...shouldAbortOnUnmount ? {
                signal: queryFunctionContext.signal
              } : {}
            }
          };
          return context.client.query(...getClientArgs(queryKey, actualOpts, {
            pageParam: queryFunctionContext.pageParam ?? opts.initialCursor,
            direction: queryFunctionContext.direction
          }));
        }
      }, context.queryClient);
      hook.trpc = useHookResult({
        path
      });
      return [
        hook.data,
        hook
      ];
    }
    const useQueries$1 = (queriesCallback) => {
      const { ssrState, queryClient, prefetchQuery, client } = useContext5();
      const proxy = createUseQueries(client);
      const queries = queriesCallback(proxy);
      if (typeof globalThis === "undefined" && ssrState === "prepass") {
        for (const query of queries) {
          const queryOption = query;
          if (queryOption.trpc?.ssr !== false && !queryClient.getQueryCache().find({
            queryKey: queryOption.queryKey
          })) {
            void prefetchQuery(queryOption.queryKey, queryOption);
          }
        }
      }
      return useQueries({
        queries: queries.map((query) => ({
          ...query,
          queryKey: query.queryKey
        }))
      }, queryClient);
    };
    const useSuspenseQueries$1 = (queriesCallback) => {
      const { queryClient, client } = useContext5();
      const proxy = createUseQueries(client);
      const queries = queriesCallback(proxy);
      const hook = useSuspenseQueries({
        queries: queries.map((query) => ({
          ...query,
          queryFn: query.queryFn,
          queryKey: query.queryKey
        }))
      }, queryClient);
      return [
        hook.map((h) => h.data),
        hook
      ];
    };
    return {
      Provider: TRPCProvider,
      createClient,
      useContext: useContext5,
      useUtils: useContext5,
      useQuery: useQuery$1,
      usePrefetchQuery: usePrefetchQuery$1,
      useSuspenseQuery: useSuspenseQuery$1,
      useQueries: useQueries$1,
      useSuspenseQueries: useSuspenseQueries$1,
      useMutation: useMutation$1,
      useSubscription,
      useInfiniteQuery: useInfiniteQuery$1,
      usePrefetchInfiniteQuery: usePrefetchInfiniteQuery$1,
      useSuspenseInfiniteQuery: useSuspenseInfiniteQuery$1
    };
  }

  // node_modules/@trpc/react-query/dist/createTRPCReact.mjs
  function createHooksInternal(trpc2) {
    const proxy = createReactDecoration(trpc2);
    return createFlatProxy((key) => {
      if (key === "useContext" || key === "useUtils") {
        return () => {
          const context = trpc2.useUtils();
          return React11.useMemo(() => {
            return createReactQueryUtils(context);
          }, [
            context
          ]);
        };
      }
      if (trpc2.hasOwnProperty(key)) {
        return trpc2[key];
      }
      return proxy[key];
    });
  }
  function createTRPCReact(opts) {
    const hooks = createRootHooks(opts);
    const proxy = createHooksInternal(hooks);
    return proxy;
  }

  // node_modules/@trpc/react-query/dist/createTRPCQueryUtils.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  var import_react = __toESM(require_react(), 1);

  // src/utils/trpc/link/index.ts
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@trpc/client/dist/unstable-internals.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // src/utils/trpc/link/index.ts
  function eventsLink({
    emitter: emitter2,
    ...opts
  }) {
    const transformer = getTransformer(opts.transformer);
    return () => {
      return ({ op }) => {
        return observable((observer) => {
          const listeners = [];
          const { id, type, path } = op;
          if (type === "subscription") {
            throw new Error("Subscriptions are unsupported by `eventsLink`.");
          }
          try {
            const input = transformer.input.serialize(op.input);
            const onMessage = (response) => {
              if (!response)
                return;
              if (!("id" in response) || response.id === null || response.id === void 0)
                return;
              if (id !== response.id)
                return;
              const transformedResult = transformResult(response, transformer.output);
              if (!transformedResult.ok) {
                observer.error(TRPCClientError.from(transformedResult.error));
                return;
              }
              observer.next({
                result: transformedResult.result
              });
              observer.complete();
            };
            emitter2.on(TRPC_RESPONSE, onMessage);
            listeners.push(() => emitter2.off(TRPC_RESPONSE, onMessage));
            emitter2.emit(TRPC_REQUEST, {
              id,
              jsonrpc: void 0,
              method: type,
              params: { path, input }
            });
          } catch (cause) {
            observer.error(
              new TRPCClientError(cause instanceof Error ? cause.message : "Unknown error")
            );
          }
          return () => {
            listeners.forEach((unsub) => unsub());
          };
        });
      };
    };
  }

  // src/utils/trpc/index.ts
  var trpc = createTRPCReact();

  // src/dapp-interface/suiWallet.ts
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/mitt/dist/mitt.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  function mitt_default(n) {
    return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
      var i = n.get(t);
      i ? i.push(e) : n.set(t, [e]);
    }, off: function(t, e) {
      var i = n.get(t);
      i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
    }, emit: function(t, e) {
      var i = n.get(t);
      i && i.slice().map(function(n2) {
        n2(e);
      }), (i = n.get("*")) && i.slice().map(function(n2) {
        n2(t, e);
      });
    } };
  }

  // src/dapp-interface/suiWallet.ts
  var INVALID_CHAIN = `A valid Sui chain identifier was not provided in the request. Please report this issue to the dApp developer.

Examples of valid Sui chain identifiers are 'sui:testnet' and 'sui:mainnet'. Consider using the '@mysten/dapp-kit' package, which provides this value automatically.`;
  var SuiWallet = class {
    #client;
    #events;
    #accounts;
    constructor(client) {
      this.#client = client;
      this.#events = mitt_default();
      this.#accounts = [];
      this.#client.onWalletStateChanged((updatedAccounts) => {
        this.#accounts = updatedAccounts.map(this.#mapAccountInfoToWalletAccount);
        this.#events.emit("change", { accounts: this.#accounts });
      });
    }
    get version() {
      return "1.0.0";
    }
    get name() {
      return "Sui Wallet";
    }
    get icon() {
      return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0iIzRDQTNGRiIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC44MzI3IDEyLjM0MTNWMTIuMzQyMkMxOS42NDgyIDEzLjM2NTMgMjAuMTM2IDE0LjY2MTMgMjAuMTM2IDE2LjA3MDVDMjAuMTM2IDE3LjQ3OTggMTkuNjMzNyAxOC44MTQzIDE4Ljc5NTcgMTkuODQ0M0wxOC43MjM1IDE5LjkzM0wxOC43MDQ1IDE5LjgyMDNDMTguNjg4MiAxOS43MjQ1IDE4LjY2OSAxOS42Mjc1IDE4LjY0NyAxOS41M0MxOC4yMjc3IDE3LjY4NzUgMTYuODYxMiAxNi4xMDc1IDE0LjYxMjUgMTQuODI4MkMxMy4wOTQgMTMuOTY2OCAxMi4yMjQ3IDEyLjkyOTIgMTEuOTk2NSAxMS43NTA4QzExLjg0OSAxMC45ODg1IDExLjk1ODcgMTAuMjIzIDEyLjE3MDUgOS41NjcyNUMxMi4zODIyIDguOTExNzUgMTIuNjk3MiA4LjM2MjUgMTIuOTY0NyA4LjAzMkwxMy44Mzk1IDYuOTYyMjVDMTMuOTkzIDYuNzc0NzUgMTQuMjggNi43NzQ3NSAxNC40MzM1IDYuOTYyMjVMMTguODMzIDEyLjM0MTVMMTguODMyNyAxMi4zNDEzWk0yMC4yMTY1IDExLjI3MjVWMTEuMjcyTDE0LjM1MyA0LjEwMjc1QzE0LjI0MSAzLjk2NTc1IDE0LjAzMTUgMy45NjU3NSAxMy45MTk1IDQuMTAyNzVMOC4wNTYgMTEuMjcyM1YxMS4yNzI4TDguMDM3IDExLjI5NjVDNi45NTgyNSAxMi42MzUzIDYuMzEyNSAxNC4zMzY4IDYuMzEyNSAxNi4xODlDNi4zMTI1IDIwLjUwMjggOS44MTUyNSAyNCAxNC4xMzYzIDI0QzE4LjQ1NzIgMjQgMjEuOTYgMjAuNTAyOCAyMS45NiAxNi4xODlDMjEuOTYgMTQuMzM2OCAyMS4zMTQyIDEyLjYzNTMgMjAuMjM1MiAxMS4yOTYzTDIwLjIxNiAxMS4yNzI1SDIwLjIxNjVaTTkuNDU5MjUgMTIuMzE4TDkuOTgzNzUgMTEuNjc2NUw5Ljk5OTUgMTEuNzk1QzEwLjAxMiAxMS44ODg3IDEwLjAyNzIgMTEuOTgzIDEwLjA0NTIgMTIuMDc3OEMxMC4zODQ1IDEzLjg1ODIgMTEuNTk2NyAxNS4zNDI4IDEzLjYyMzUgMTYuNDkyNUMxNS4zODUyIDE3LjQ5NSAxNi40MTEgMTguNjQ4IDE2LjcwNjUgMTkuOTEyNUMxNi44Mjk4IDIwLjQ0MDMgMTYuODUxNyAyMC45NTk1IDE2Ljc5ODUgMjEuNDEzNUwxNi43OTUyIDIxLjQ0MTVMMTYuNzY5NyAyMS40NTRDMTUuOTc0NyAyMS44NDI1IDE1LjA4MDcgMjIuMDYwNSAxNC4xMzYgMjIuMDYwNUMxMC44MjI1IDIyLjA2MDUgOC4xMzYyNSAxOS4zNzg4IDguMTM2MjUgMTYuMDcwNUM4LjEzNjI1IDE0LjY1MDMgOC42MzE1IDEzLjM0NSA5LjQ1OSAxMi4zMTgzTDkuNDU5MjUgMTIuMzE4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";
    }
    get chains() {
      return SUI_CHAINS;
    }
    get features() {
      return {
        "standard:connect": {
          version: "1.0.0",
          connect: this.#connect
        },
        "standard:disconnect": {
          version: "1.0.0",
          disconnect: this.#disconnect
        },
        "standard:events": {
          version: "1.0.0",
          on: this.#on
        },
        "sui:signAndExecuteTransactionBlock": {
          version: "1.0.0",
          signAndExecuteTransactionBlock: this.#signAndExecuteTransactionBlock
        },
        "sui:signTransactionBlock": {
          version: "1.0.0",
          signTransactionBlock: this.#signTransactionBlock
        },
        "sui:signPersonalMessage": {
          version: "1.0.0",
          signPersonalMessage: this.#signPersonalMessage
        },
        "sui:signAndExecuteTransaction": {
          version: "2.0.0",
          signAndExecuteTransaction: this.#signAndExecuteTransaction
        },
        "sui:signTransaction": {
          version: "2.0.0",
          signTransaction: this.#signTransaction
        }
      };
    }
    get accounts() {
      return this.#accounts;
    }
    #connect = async (input) => {
      const connectedAccounts = await this.#client.connect({ silent: input?.silent ?? false });
      this.#accounts = connectedAccounts.map(this.#mapAccountInfoToWalletAccount);
      if (this.#accounts.length > 0) {
        this.#events.emit("change", { accounts: this.accounts });
      }
      return { accounts: this.#accounts };
    };
    #disconnect = async () => {
      this.#accounts = [];
      this.#events.emit("change", { accounts: this.accounts });
      await this.#client.disconnect();
    };
    #on = (event, listener) => {
      this.#events.on(event, listener);
      return () => this.#events.off(event, listener);
    };
    #signAndExecuteTransactionBlock = async (input) => {
      if (!isSuiChain(input.chain))
        throw new Error(INVALID_CHAIN);
      return await this.#client.signAndExecuteTransactionBlock({
        serializedBytes: input.transactionBlock.serialize(),
        accountAddress: input.account.address,
        requestType: input.requestType,
        options: input.options,
        chain: input.chain
      });
    };
    #signTransactionBlock = async (input) => {
      if (!isSuiChain(input.chain))
        throw new Error(INVALID_CHAIN);
      const result = await this.#client.signTransactionBlock({
        serializedBytes: input.transactionBlock.serialize(),
        accountAddress: input.account.address,
        chain: input.chain
      });
      return { signature: result.signature, transactionBlockBytes: result.bytes };
    };
    #signAndExecuteTransaction = async (input) => {
      if (!isSuiChain(input.chain))
        throw new Error(INVALID_CHAIN);
      const { digest, rawEffects, rawTransaction } = await this.#client.signAndExecuteTransactionBlock({
        serializedBytes: await input.transaction.toJSON(),
        accountAddress: input.account.address,
        chain: input.chain,
        options: {
          showRawEffects: true,
          showRawInput: true
        }
      });
      const [
        {
          txSignatures: [signature],
          intentMessage: { value: bcsTransaction }
        }
      ] = suiBcs.SenderSignedData.parse(fromB64(rawTransaction));
      const bytes = suiBcs.TransactionData.serialize(bcsTransaction).toBase64();
      return {
        digest,
        effects: toB64(new Uint8Array(rawEffects)),
        signature,
        bytes
      };
    };
    #signTransaction = async (input) => {
      if (!isSuiChain(input.chain))
        throw new Error(INVALID_CHAIN);
      const result = await this.#client.signTransactionBlock({
        serializedBytes: await input.transaction.toJSON(),
        accountAddress: input.account.address,
        chain: input.chain
      });
      return { signature: result.signature, bytes: result.bytes };
    };
    #signPersonalMessage = async (input) => {
      return await this.#client.signPersonalMessage({
        serializedBytes: toB64(input.message),
        accountAddress: input.account.address
      });
    };
    #mapAccountInfoToWalletAccount({
      address,
      nickname,
      publicKey,
      chains
    }) {
      return new ReadonlyWalletAccount({
        address,
        label: nickname || void 0,
        publicKey: publicKey ? fromB64(publicKey) : new Uint8Array(),
        chains,
        features: [
          "sui:signTransaction",
          "sui:signAndExecuteTransaction",
          "sui:signTransactionBlock",
          "sui:signAndExecuteTransactionBlock",
          "sui:signPersonalMessage"
        ]
      });
    }
  };

  // src/dapp-interface/extension.ts
  var emitter = createWindowEmitter();
  var trpcClient = createTRPCClient({
    links: [
      loggerLink({
        enabled: (options) => {
          const isErrorResponse = options.direction === "down" && options.result instanceof Error;
          return isErrorResponse || false;
        }
      }),
      eventsLink({
        emitter
      })
    ]
  });
  registerWallet(
    new SuiWallet({
      disconnect: trpcClient.dApp.disconnect.mutate,
      connect: trpcClient.dApp.connect.query,
      signAndExecuteTransactionBlock: trpcClient.dApp.signAndExecuteTransactionBlock.mutate,
      signTransactionBlock: trpcClient.dApp.signTransactionBlock.mutate,
      signPersonalMessage: trpcClient.dApp.signPersonalMessage.mutate,
      onWalletStateChanged: (onData) => {
        emitter.on(WALLET_STATE_CHANGED, async () => {
          const connectedAccounts = await trpcClient.dApp.connect.query({ silent: true });
          return onData(connectedAccounts);
        });
      }
    })
  );
})();
/*! Bundled license information:

@jspm/core/nodelibs/browser/chunk-DtuTasat.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@trpc/server/dist/unstable-core-do-not-import/rpc/parseTRPCMessage.mjs:
  (* istanbul ignore next -- @preserve *)

@trpc/server/dist/unstable-core-do-not-import/rpc/parseTRPCMessage.mjs:
  (* istanbul ignore next -- @preserve *)

@trpc/server/dist/unstable-core-do-not-import/rpc/parseTRPCMessage.mjs:
  (* istanbul ignore next -- @preserve *)

@trpc/server/dist/unstable-core-do-not-import/rpc/parseTRPCMessage.mjs:
  (* istanbul ignore next -- @preserve *)

@trpc/server/dist/unstable-core-do-not-import/rpc/parseTRPCMessage.mjs:
  (* istanbul ignore next -- @preserve *)

@trpc/react-query/dist/shared/hooks/createHooksInternal.mjs:
  (* istanbul ignore next -- @preserve *)
*/
