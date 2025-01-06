import{a as I}from"./chunk-ROF5SDVA.js";import{l as f}from"./chunk-2NGYUYTC.js";import{M as h,o as s}from"./chunk-WIQ4WVKX.js";import{a as y}from"./chunk-7X4NV6OJ.js";import{f as W,h as u,n as g}from"./chunk-3KENBVE7.js";u();g();var e=W(y());var C=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${r=>r.color};
  height: ${r=>r.width}px;
  min-width: ${r=>r.width}px;
  border-radius: 6px;
`,L=s.img`
  border-radius: ${r=>r.shape==="square"?"0":"50%"};
  height: ${r=>r.width}px;
  width: ${r=>r.width}px;
`,v=e.default.memo(({alt:r,backgroundColor:x="#222",className:n,defaultIcon:b,iconUrl:a,localImageSource:i,questionMarkWidth:k,shape:c="circle",width:o})=>{let[q,w]=(0,e.useState)(!1),[l,P]=(0,e.useState)(!1),$=()=>{w(!0)},E=()=>{P(!0)},t=a;a&&o?t=f(a,o,o):i&&(t=i);let d=q?"clear":x,m=t?e.default.createElement(L,{src:t,alt:r,width:o,shape:c,loading:"lazy",onLoad:$,onError:E}):null,p=b||e.default.createElement(h,{width:k});return c==="square"?e.default.createElement(C,{className:n,color:d,width:o},t&&!l?m:p):e.default.createElement(I,{className:n,color:d,diameter:o},t&&!l?m:p)});export{v as a};
//# sourceMappingURL=chunk-7UTGLKC7.js.map
