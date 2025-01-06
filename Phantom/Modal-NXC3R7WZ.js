import{a as k}from"./chunk-IVMV7P4T.js";import{c as v}from"./chunk-XYJX6G2K.js";import{U as y,c as u,d as T}from"./chunk-2NGYUYTC.js";import"./chunk-H3FFS4GT.js";import{j as b}from"./chunk-OKP6DFCI.js";import{Z as w,o as e,rb as d}from"./chunk-WIQ4WVKX.js";import{Cc as x}from"./chunk-OUYKWOVO.js";import"./chunk-WFPABEAU.js";import"./chunk-THLBAMDB.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-OYGO47TI.js";import"./chunk-SLQBAOEK.js";import"./chunk-MZZEJ42N.js";import"./chunk-E3NPIRHS.js";import{m as h}from"./chunk-56SJOU6P.js";import"./chunk-ALUTR72U.js";import"./chunk-N7UFQNLW.js";import"./chunk-L3A2KHJO.js";import"./chunk-4P36KWOF.js";import{a as I}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as H,h as f,n as g}from"./chunk-3KENBVE7.js";f();g();var o=H(I());var A=16,D=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  height: 100%;
`,P=e.div`
  overflow: scroll;
`,M=e.div`
  margin: 45px 16px 16px 16px;
  padding-top: 16px;
`,z=e(v)`
  left: ${A}px;
  position: absolute;
`,B=e.div`
  align-items: center;
  background: #222;
  border-bottom: 1px solid #323232;
  display: flex;
  height: 46px;
  padding: ${A}px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,G=e.div`
  display: flex;
  flex: 1;
  justify-content: center;
`,W=e.footer`
  margin-top: auto;
  flex-shrink: 0;
  min-height: 16px;
`,F=e(d)`
  text-align: left;
`;F.defaultProps={margin:"12px 0px"};var $=e(d).attrs({size:16,weight:500,lineHeight:25})``;function L(r){let{actions:i,shortcuts:p,trackAction:n,onClose:s}=r;return(0,o.useMemo)(()=>{let m=i.more.map(t=>{let c=u[x(t.type)],l=t.isDestructive?"accentAlert":"textPrimary";return{start:o.default.createElement(c,{size:18,type:t.type,color:l}),topLeft:{text:t.text,color:l},onClick:()=>{n(t),s(),t.onClick(t.type)}}}),a=p?.map(t=>{let c=u[x(t.type)],l=t.isDestructive?"accentAlert":"textPrimary";return{start:o.default.createElement(c,{size:18,color:l}),topLeft:{text:t.text,color:l},onClick:()=>{n(t),s(),t.onClick(t.type)}}})??[];return[{rows:m},{rows:a}]},[i,s,p,n])}function N(r){let{t:i}=h(),{headerText:p,hostname:n,shortcuts:s}=r,C=L(r);return o.default.createElement(D,null,o.default.createElement(P,null,o.default.createElement(B,{onClick:r.onClose},o.default.createElement(z,null,o.default.createElement(w,null)),o.default.createElement(G,null,o.default.createElement($,null,p))),o.default.createElement(M,null,o.default.createElement(T,{gap:"section"},C.map((m,a)=>o.default.createElement(y,{key:`group-${a}`,rows:m.rows}))),o.default.createElement(W,null,n&&s&&s.length>0&&o.default.createElement(F,{color:"#777777",size:14,lineHeight:17},i("shortcutsWarningDescription",{url:n})))),o.default.createElement(k,{removeFooterExpansion:!0},o.default.createElement(b,{onClick:r.onClose},i("commandClose")))))}var X=N;export{N as CTAModal,X as default};
//# sourceMappingURL=Modal-NXC3R7WZ.js.map
