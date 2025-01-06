import{a as O,c as V}from"./chunk-FI6K4ZQE.js";import{a as G}from"./chunk-Q67X6MF4.js";import{j as W}from"./chunk-OKP6DFCI.js";import{$a as M,Ma as I,Na as d,Oa as p,Pa as g,Qa as S,Ra as f,Sa as x,Ta as k,Ua as y,Va as w,Wa as L,Xa as T,Ya as v,Za as C,_a as P,ab as b,bb as a,cb as D,o,rb as F}from"./chunk-WIQ4WVKX.js";import{c as l}from"./chunk-MHOQBMVI.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-7ZN4F6J4.js";import"./chunk-OYGO47TI.js";import"./chunk-SLQBAOEK.js";import"./chunk-MZZEJ42N.js";import"./chunk-E3NPIRHS.js";import{b as u}from"./chunk-56SJOU6P.js";import"./chunk-ALUTR72U.js";import"./chunk-N7UFQNLW.js";import"./chunk-L3A2KHJO.js";import"./chunk-4P36KWOF.js";import{a as h}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as m,h as i,n as c}from"./chunk-3KENBVE7.js";i();c();var t=m(h());i();c();var A=m(h());var z={[G]:a,vote:y,"vote-2":w,stake:L,"stake-2":T,view:v,chat:C,tip:P,mint:M,"mint-2":b,"generic-link":a,"generic-add":D,discord:I,twitter:d,"twitter-2":p,x:p,instagram:g,telegram:S,leaderboard:k,gaming:f,"gaming-2":x};function B({icon:s,...n}){let r=z[s];return A.default.createElement(r,{...n})}var E=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -16px; // compensate for generic screen margins
`,H=o.footer`
  margin-top: auto;
  flex-shrink: 0;
  min-height: 16px;
`,Y=o.div`
  overflow: scroll;
`,_=o.ul`
  flex: 1;
  max-height: 350px;
  padding-top: 16px; // compensate for the override of the generic screen margins
`,j=o.li``,q=o.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
`,N=o(F)`
  text-align: left;
`;N.defaultProps={margin:"12px 0px"};function J({shortcuts:s,...n}){let r=(0,t.useMemo)(()=>n.hostname.includes("//")?new URL(n.hostname).hostname:n.hostname,[n.hostname]);return t.default.createElement(E,null,t.default.createElement(Y,null,t.default.createElement(_,null,s.map(e=>t.default.createElement(j,{key:e.uri},t.default.createElement(W,{type:"button",onClick:()=>{l.capture("walletShortcutsLinkOpenClick",O(n,e)),self.open(e.uri)},theme:"text",paddingY:6},t.default.createElement(q,null,t.default.createElement(B,{icon:V(e.uri,e.icon)})),e.label))))),t.default.createElement(H,null,r&&t.default.createElement(N,{color:"#777777",size:14,lineHeight:17},u("shortcutsWarningDescription",{url:r}))))}var ct=J;export{J as ShortcutsModal,ct as default};
//# sourceMappingURL=ShortcutsModal-4ANRHREU.js.map
