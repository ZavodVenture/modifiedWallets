import{a as I}from"./chunk-T27XGMXK.js";import{a as M}from"./chunk-ROF5SDVA.js";import{a as B}from"./chunk-IVMV7P4T.js";import{ea as b}from"./chunk-2NGYUYTC.js";import"./chunk-H3FFS4GT.js";import{h as E,j as m}from"./chunk-OKP6DFCI.js";import{Z as y,o as r,rb as a}from"./chunk-WIQ4WVKX.js";import{b as F}from"./chunk-QALJXKGR.js";import"./chunk-7ZN4F6J4.js";import"./chunk-THLBAMDB.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-SLQBAOEK.js";import"./chunk-MZZEJ42N.js";import"./chunk-E3NPIRHS.js";import{m as T}from"./chunk-56SJOU6P.js";import{S as l}from"./chunk-ALUTR72U.js";import"./chunk-N7UFQNLW.js";import"./chunk-L3A2KHJO.js";import"./chunk-4P36KWOF.js";import{a as v}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as q,h as g,n as h}from"./chunk-3KENBVE7.js";g();h();var o=q(v());var d=r.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  justify-content: space-between;
`,p=r.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`,P=r(M)`
  margin-bottom: 20px;
`,u=r(a).attrs({size:28,weight:500})`
  margin-bottom: 8px;
  max-width: 85%;
`,C=r(a).attrs({size:16,weight:400,color:"#777"})`
  max-width: 85%;
`,Q=r.img`
  width: 225px;
  margin-bottom: 24px;
`,f=r(B)`
  height: auto;
  margin: 16px;
`,S=t=>{let{questId:i,networkIds:s}=t,{mutateAsync:n,data:e,isPending:x,isIdle:c,isError:w}=F(),k=async()=>{try{await n({questId:i,networkIds:s})}catch{}};return I(()=>{k()},i!==void 0&&s.length>0),(0,o.useMemo)(()=>({...t,data:e,isError:w,isLoading:x||c}),[t,e,x,c,w])},z=o.default.memo(({data:t,isLoading:i,isError:s,onPressDismiss:n})=>{let{t:e}=T();return i?o.default.createElement(d,null,o.default.createElement(p,null,o.default.createElement(P,{diameter:94,color:l("#AB9FF2",.2)},o.default.createElement(E,{diameter:60})),o.default.createElement(u,null,e("questsClaimInProgress")),o.default.createElement(C,null,e("questsVerifyingCompletion"))),o.default.createElement(f,{removeFooterExpansion:!0},o.default.createElement(m,{onClick:n},e("commandDismiss")))):s?o.default.createElement(d,null,o.default.createElement(p,null,o.default.createElement(P,{diameter:94,color:l("#EB3742",.2)},o.default.createElement(y,{width:30,height:30,fill:"#EB3742"})),o.default.createElement(u,null,e("questsClaimError")),o.default.createElement(C,null,e("questsClaimErrorDescription"))),o.default.createElement(f,{removeFooterExpansion:!0},o.default.createElement(m,{onClick:n},e("commandDismiss")))):t?o.default.createElement(d,null,o.default.createElement(b,null),o.default.createElement(p,null,o.default.createElement(Q,{src:t.imageUrl}),o.default.createElement(u,null,t.title),o.default.createElement(C,null,t.description)),o.default.createElement(f,{removeFooterExpansion:!0},o.default.createElement(m,{onClick:n},e("commandDismiss")))):null}),A=t=>{let i=S(t);return o.default.createElement(z,{...i})},Z=A;export{Z as default};
//# sourceMappingURL=ClaimRewardModal-CZMVLHAO.js.map
