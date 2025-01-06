import{a as V}from"./chunk-43DCCALR.js";import{a as y}from"./chunk-XYFNIIUY.js";import{a as E,b as v,c as B}from"./chunk-O5AAGNHJ.js";import{a as b}from"./chunk-CCQRCL2K.js";import{a as F}from"./chunk-4VDZJDFB.js";import{a as g,b as k,h as w,j as x,l as A}from"./chunk-OKP6DFCI.js";import{o as s,rb as f}from"./chunk-WIQ4WVKX.js";import{p as T}from"./chunk-LURFXJDV.js";import{S}from"./chunk-ALUTR72U.js";import{a as L}from"./chunk-7X4NV6OJ.js";import{f as C,h as l,n as m}from"./chunk-3KENBVE7.js";l();m();var a=C(L());l();m();var t=C(L());var H=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: ${r=>r.addScreenPadding?"16px":"0"};
`,N=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`,O=s.div`
  width: 100%;
  > * {
    margin-top: 10px;
  }
  padding: 16px;
`,j=s(b).attrs({align:"center",justify:"center",margin:"0 0 15px 0"})`
  position: relative;
  border-radius: 50%;
  background-color: ${S("#AB9FF2",.2)};
  box-shadow: 0 0 0 20px ${S("#AB9FF2",.2)};
`,z=s(f).attrs({size:28,weight:500,color:"#FFFFFF"})`
  margin-top: 24px;
  margin-left: 12px;
  margin-right: 12px;
`,G=s(f).attrs({size:16,weight:400,color:"#999999"})`
  margin-top: 9px;
  margin-left: 12px;
  margin-right: 12px;
  span {
    color: #999999;
    font-weight: bold;
  }
`,K=()=>t.default.createElement(j,null,t.default.createElement(w,{diameter:54,color:"#AB9FF2",trackColor:"#181818"})),P=({header:r,icon:n,title:o,message:e,txHash:i,txHashTitle:u,isClosable:c,primaryButton:p,secondaryButton:d})=>t.default.createElement(H,null,r,t.default.createElement(N,null,t.default.createElement(k,{mode:"wait",initial:!0},t.default.createElement(g.div,{key:o,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},n)),t.default.createElement(z,null,o),t.default.createElement(G,null,e),i&&t.default.createElement(k,{mode:"wait",initial:!1},t.default.createElement(g.div,{key:i,initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.2}},t.default.createElement(V,{txHash:i},u)))),c?t.default.createElement(O,null,d&&p?t.default.createElement(A,{buttons:[{text:d.title,onClick:d.onPress},{theme:"primary",text:p.title,onClick:p.onPress}]}):p?t.default.createElement(x,{theme:"primary",onClick:p.onPress},p.title):d?t.default.createElement(x,{onClick:d.onPress},d.title):null):null),q=({ledgerAction:r,numberOfTransactions:n,cancel:o,ledgerApp:e})=>t.default.createElement(H,{addScreenPadding:!0},t.default.createElement(v,{ledgerAction:r,numberOfTransactions:n,cancel:o,ledgerApp:e})),$=({title:r,message:n,txHash:o,txHashTitle:e,primaryButton:i})=>t.default.createElement(P,{icon:t.default.createElement(K,null),message:n,title:r,txHash:o,txHashTitle:e,primaryButton:i,isClosable:!!o}),h=({title:r,message:n,txHash:o,txHashTitle:e,primaryButton:i})=>t.default.createElement(P,{icon:t.default.createElement(y,{type:"failure"}),message:n,title:r,txHash:o,txHashTitle:e,primaryButton:i,isClosable:!0}),I=({title:r,message:n,txHash:o,txHashTitle:e,primaryButton:i,secondaryButton:u})=>t.default.createElement(P,{icon:t.default.createElement(y,{type:"success"}),title:r,message:n,txHash:o,txHashTitle:e,isClosable:!0,primaryButton:i,secondaryButton:u});var W=s.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  color: ${r=>r.theme.purple};
  text-decoration: none;
  cursor: pointer;
`,J=({txError:r,addressType:n,statusPageProps:o,executeConvertStake:e,onClose:i})=>E(r)?a.default.createElement(B,{ledgerActionError:r,onRetryClick:e,onCancelClick:i}):o.type==="error"?a.default.createElement(h,{...o}):a.default.createElement(q,{ledgerAction:e,numberOfTransactions:1,cancel:i,ledgerApp:T(n)}),lt=a.default.memo(r=>{let{addressType:n,isLedger:o,statusPageProps:e,txError:i,onClose:u,executeLiquidStake:c,learnMoreLink:p}=r;if(o&&!e.txHash)return a.default.createElement(J,{txError:i,addressType:n,statusPageProps:e,executeConvertStake:c,onClose:u});switch(e.type){case"loading":return a.default.createElement($,{...e});case"error":return a.default.createElement(h,{...e});case"success":return a.default.createElement(I,{title:e.title,txHash:e.txHash,txHashTitle:e.txHashTitle,primaryButton:e.primaryButton,secondaryButton:e.secondaryButton,message:a.default.createElement(F,{i18nKey:"convertStakeStatusSuccessMessage"},"Earn additional rewards with your JitoSOL ",a.default.createElement(W,{href:p},"here."))});default:throw new Error("Unsupported status page type")}});export{lt as a};
//# sourceMappingURL=chunk-7RVZ2F3F.js.map
