import{a as v}from"./chunk-24U56MUI.js";import{f as q}from"./chunk-W27Z2YZM.js";import{o as s}from"./chunk-WIQ4WVKX.js";import{a as x,b as R}from"./chunk-UCBZOSRF.js";import{a as M}from"./chunk-BTKBODVJ.js";import{ma as w,u as b}from"./chunk-ALUTR72U.js";import{a as B}from"./chunk-7X4NV6OJ.js";import{f,h as c,n as a}from"./chunk-3KENBVE7.js";c();a();c();a();var k=s.div`
  ${e=>!e.plain&&`
    background-color: ${e.theme?.footer?.backgroundColor??"#2b2b2b"};
    border-top: ${e.theme?.footer?.borderTop??"1px solid #323232"};
    box-shadow: ${e.theme?.footer?.boxShadow??"0px -6px 10px rgba(0, 0, 0, 0.25)"};
  `}
`;var N=s.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > * {
    margin-top: 27px;
  }
`,D=s.div`
  flex: 1;
  overflow: auto;
  padding: 0px 16px;
`,F=s.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  left: 0;
  bottom: 0;
  background: #222222;
`,S=s(k)`
  flex: none;
  padding: 14px 20px;
`,W=s.div`
  padding: 20px;
  height: 100%;
`;c();a();var o=f(B()),p=f(M());var I={isConnected:!1,lastMessage:null,postMessage:w},T=o.default.createContext(I);function Q(){let[e,r]=(0,o.useState)(null),[u,d]=(0,o.useState)(null),{isSidebarOpen:g}=v(),m=n=>{let t=R(n);!t||typeof t.url!="string"||!t.url||!t.req||typeof t.req.method!="string"||!t.req.method||d({...t,url:b(t.url.toString())})};(0,o.useEffect)(()=>{let n;return(async()=>{if(g){let l=i=>{i.name==="popup/sidepanel"&&(r(i),i.onMessage.addListener(m),i.onDisconnect.addListener(()=>{r(null),d(null)}))};p.default.runtime.onConnect.addListener(l)}else{let i=`notification/${(await q()).id}`;n=p.default.runtime.connect({name:i}),r(n),n.onMessage.addListener(m),n.onDisconnect.addListener(()=>{self.close(),r(null),d(null)})}})(),()=>{n?.disconnect()}},[g]);let y=(0,o.useCallback)(n=>{e&&e.postMessage(x(n))},[e]);return[!!e,u,y]}function C(){let e=(0,o.useContext)(T);if(!e)throw new Error("Missing background connection context");return e}function A(){let{lastMessage:e}=C();return e}function V(){let e=A(),{postMessage:r}=C();return(0,o.useCallback)(u=>{if(e){if(e.req.id!==u.id)throw new Error(`Request id: ${e.req.id} does not match response id: ${u.id}`);r(u)}else throw new Error("No request received from the background yet")},[e,r])}export{k as a,N as b,D as c,F as d,S as e,W as f,T as g,Q as h,A as i,V as j};
//# sourceMappingURL=chunk-ELBGM5PY.js.map
