import{a as R}from"./chunk-XYFNIIUY.js";import{a as tt,b as ot,c as et}from"./chunk-O5AAGNHJ.js";import{Ma as it}from"./chunk-JD6NH5K6.js";import{h as Y}from"./chunk-75L54KUM.js";import{Q as B,R as K,d as U,v as G}from"./chunk-2NGYUYTC.js";import{a as L,b as E,j as X}from"./chunk-OKP6DFCI.js";import{_ as J,c as Z,k as q,o as a,rb as b,ua as Q}from"./chunk-WIQ4WVKX.js";import{eb as _}from"./chunk-SD2LXVLD.js";import{p as j}from"./chunk-LURFXJDV.js";import{$d as z,Pa as y}from"./chunk-MZZEJ42N.js";import{m as C}from"./chunk-56SJOU6P.js";import{Ya as W}from"./chunk-L3A2KHJO.js";import{a as O}from"./chunk-7X4NV6OJ.js";import{f as M,h as x,n as T}from"./chunk-3KENBVE7.js";x();T();var e=M(O());x();T();var i=M(O());var rt=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: ${t=>t.addScreenPadding?"16px":"0"};
`,Tt=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`,Ct=a.div`
  width: 100%;
  > * {
    margin-top: 10px;
  }
  padding: 16px;
`,yt=a.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  padding: 16px;
`,bt=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Zt=a.div`
  position: relative;
`,qt=a.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #21e56f;
  }
`,kt=a(b).attrs({size:28,weight:500,color:"#FFFFFF"})`
  margin-top: 24px;
  margin-left: 12px;
  margin-right: 12px;
`,nt=a(b).attrs({size:16,weight:400,color:"#999999"})`
  margin-top: 9px;
  margin-left: 12px;
  margin-right: 12px;
  span {
    color: #999999;
    font-weight: bold;
  }
`,ht=a(b).attrs({size:16,weight:500,color:"#AB9FF2"})`
  margin-top: 18px;
  text-decoration: none;
  ${t=>t.opacity!==0&&q`
      &:hover {
        cursor: pointer;
        color: #e2dffe;
      }
    `}
`,Bt=({description:t,header:n,icon:o,onClose:s,title:p,txLink:m,isClosable:l,disclaimer:c})=>{let{t:r}=C(),d=()=>{m&&self.open(m)};return i.default.createElement(rt,null,n,i.default.createElement(Tt,null,i.default.createElement(E,{mode:"wait",initial:!0},i.default.createElement(L.div,{key:p,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},o)),i.default.createElement(kt,null,p),i.default.createElement(nt,null,t),m&&i.default.createElement(E,{mode:"wait",initial:!1},i.default.createElement(L.div,{key:m,initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.2}},i.default.createElement(ht,{opacity:1,onClick:d},r("swapTxConfirmationViewTransaction"))))),l&&s?i.default.createElement(Ct,null,i.default.createElement(nt,null,c),l&&s?i.default.createElement(X,{onClick:s},r("commandClose")):null):null)};var st=({ledgerAction:t,numberOfTransactions:n,cancel:o,ledgerApp:s})=>i.default.createElement(rt,{addScreenPadding:!0},i.default.createElement(ot,{ledgerAction:t,numberOfTransactions:n,cancel:o,ledgerApp:s}));var Lt=t=>self.open(t,"_blank"),at=({txErrorTitle:t,txErrorMessage:n,txErrorHelpButtonLink:o,txLink:s,onClose:p})=>i.default.createElement(Bt,{header:i.default.createElement(yt,null,i.default.createElement(bt,{onClick:()=>Lt(o)},i.default.createElement(J,{fill:"white"}))),icon:i.default.createElement(R,{type:"failure"}),description:n,onClose:p,title:t,txLink:s,isClosable:!0});var Et=t=>self.open(t,"_blank"),At=()=>{let{handleHideModalVisibility:t}=it(),n=Z(),{popDetailView:o}=Y(),{data:s}=z(),{data:[p]}=W(["enable-swapper-skip-review"]),l=s?.type==="ledger",c=p?"swapConfirmation":"swapReview",r=(0,e.useCallback)(()=>{t(c)},[t,c]),d=(0,e.useCallback)(()=>{o()},[o]),k=(0,e.useCallback)(()=>{r(),n("/notifications")},[r,n]);return _({isLedger:l,goToSwapTab:r,goToSwapReview:d,goToActivityTab:k})},vt=({txError:t,txErrorTitle:n,txErrorMessage:o,txErrorHelpButtonLink:s,txLink:p,executeSwap:m,numberOfTransactions:l,addressType:c,onClose:r})=>tt(t)?e.default.createElement(et,{ledgerActionError:t,onRetryClick:m,onCancelClick:r}):t?e.default.createElement(at,{txErrorTitle:n,txErrorMessage:o,txLink:p,onClose:r,txErrorHelpButtonLink:s}):e.default.createElement(st,{ledgerAction:m,numberOfTransactions:l,cancel:r,ledgerApp:j(c)}),Nt=e.default.memo(t=>{let n=(0,e.useRef)(null),{t:o}=C(),s=o("swapTxConfirmationViewTransaction"),{addressType:p,executeSwap:m,isLedger:l,isBridge:c,sellAsset:r,buyAsset:d,estimatedTime:k,isFailure:A,isSuccess:pt,isClosable:mt,notEnoughSol:ct,numberOfTransactions:lt,txError:dt,txErrorTitle:v,txErrorMessage:N,txLink:h,txErrorHelpButtonLink:P,isReadyToExecute:ut,onClose:F}=t,[D,ft]=(0,e.useState)(!1),u,f,I,g,V=o("commandClose"),$,w,S=mt||!1;if((0,e.useEffect)(()=>{!w&&setTimeout(()=>{!D&&n.current?.start(),ft(!0)},200)},[D,w]),l&&!h&&ut)return e.default.createElement(vt,{isBridge:c,txError:dt,txErrorTitle:v,txErrorMessage:N,txErrorHelpButtonLink:P,txLink:h,numberOfTransactions:lt,addressType:p,executeSwap:m,onClose:F});if(c&&r){let H=`${r.amount} ${r.symbol}`,gt=y.getNetworkName(r.networkID),wt=`${d.amount} ${d.symbol}`,St=y.getNetworkName(d.networkID);u=o("swapTxBridgeSubmitting"),f=o("swapTxBridgeSubmittingDescription",{sellAmount:H,sellNetwork:gt,buyAmount:wt,buyNetwork:St})}else f=`${d.symbol||o("swapTxConfirmationTokens")} ${o("swapTxConfirmationTokensWillBeDeposited")} `,u=o("swapTxConfirmationSwappingTokens");return ct&&(u=o("notEnoughSolPrimaryText"),f=o("notEnoughSolSecondaryText"),w=e.default.createElement(Q,{width:B,height:B}),g={theme:"primary"},S=!0),pt&&(c?(u=o("swapTxBridgeSubmitted"),f=o("swapTxBridgeSubmittedDescription",{estimatedTime:k}),I=o("swapTxBridgeSubmittedDisclaimer")):(u=o("swapTxConfirmationTokensDepositedTitle"),f=o("swapTxConfirmationTokensDepositedBody")),g={theme:"primary"},S=!0,n.current?.success()),A&&(u=v,f=N,g={theme:"secondary"},V=o("commandClose"),S=!0,$=e.default.createElement(U,{alignItems:"flex-end"},e.default.createElement(G,{icon:"HelpCircle",size:32,onClick:()=>Et(P),backgroundColor:"bgWallet",color:"textSecondary",label:o("commandHelp")})),n.current?.fail()),e.default.createElement(K,{ref:n,title:u,txLink:h,txTitle:s,description:f,disclaimer:I,isClosable:S,buttonVariant:g,buttonText:V,onClose:F,header:$,customIcon:w})}),Pt=()=>{let t=At();return(0,e.useEffect)(()=>{!t.isReadyToExecute||t.isLedger||t.executeSwap()},[t.isReadyToExecute,t.isLedger]),e.default.createElement(Nt,{...t})},wo=Pt;export{Pt as a,wo as b};
//# sourceMappingURL=chunk-GMHOL5FJ.js.map
