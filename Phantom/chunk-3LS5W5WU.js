import{a as K}from"./chunk-7TE644KS.js";import{a as _}from"./chunk-PUJH7423.js";import{a as W}from"./chunk-WAFQTOB5.js";import{b as D}from"./chunk-S24UABH5.js";import{b as H,c as U,g as G,j as O}from"./chunk-QINBGLLG.js";import{m as f}from"./chunk-75L54KUM.js";import{a as z}from"./chunk-4VDZJDFB.js";import{h as I,k as N}from"./chunk-OKP6DFCI.js";import{o as i,rb as n}from"./chunk-WIQ4WVKX.js";import{a as F,m as M,v as B}from"./chunk-HRJWTAGT.js";import{v as L}from"./chunk-V5T43K7V.js";import{Bb as V,hc as E,rb as P}from"./chunk-OUYKWOVO.js";import{L as v,M as A,P as So,Pb as k,kb as h,pe as w}from"./chunk-MZZEJ42N.js";import{m as p}from"./chunk-56SJOU6P.js";import{b as y}from"./chunk-ALUTR72U.js";import{a as go}from"./chunk-7X4NV6OJ.js";import{f as fo,h as b,n as T}from"./chunk-3KENBVE7.js";b();T();var o=fo(go());var xo=a=>{let{t}=p(),{voteAccountPubkey:s}=a,{showStakeAccountCreateAndDelegateStatusModal:Y,closeAllModals:j}=D(),J=()=>{a.onClose(),j()},{data:X}=w("solana"),{fungible:Z}=E({key:"SolanaNative"}),$=Z?.data.amount??"";L(X,"STAKE_FUNGIBLE");let{cluster:R,connection:u}=V(),r=B(u),oo=h("solana"),{data:to}=P({query:{data:oo}}),eo=to?.usd,e=(0,o.useMemo)(()=>r.results?.find(po=>po.voteAccountPubkey===s),[r.results,s]),no=e?.info?.name??e?.info?.keybaseUsername??k(s),io=H(u),[l,g]=(0,o.useState)(""),m=y(l),c=v(1+(G(u).data??0)),S=U({balance:$,cluster:R,rentExemptionMinimum:c}),ao=()=>g(S.toString()),ro=m.isLessThan(c),so=m.isGreaterThan(S),lo=m.isFinite(),d=l&&ro?t("validatorViewAmountSOLRequiredToStakeInterpolated",{amount:c}):l&&so?t("validatorViewInsufficientBalance"):"",mo=io.isPending,x=lo&&!d&&!mo,uo=()=>{Y({lamports:A(m).toNumber(),votePubkey:s,usdPerSol:eo,onClose:J,validatorName:no})},{data:C=null}=O(),co=C?M(C,e?.commission??0):null;return o.default.createElement(Co,null,r.isPending?o.default.createElement(I,null):r.isError||!e?o.default.createElement(o.default.Fragment,null,o.default.createElement(f,null,t("validatorViewPrimaryText")),o.default.createElement(q,null,o.default.createElement(n,{size:16,color:"#777777",lineHeight:20},t("validatorViewErrorFetching")," ",r.error?.message??""))):o.default.createElement(o.default.Fragment,null,o.default.createElement(f,null,t("validatorViewPrimaryText")),o.default.createElement(q,null,o.default.createElement(n,{size:16,color:"#777777",lineHeight:20,margin:"0 0 20px 0"},o.default.createElement(z,{i18nKey:"validatorViewDescriptionInterpolated"},"Choose how much SOL you\u2019d like to ",o.default.createElement("br",null),"stake with this validator. ",o.default.createElement(Q,{href:F},"Learn more"))),o.default.createElement(_,{value:l,symbol:"SOL",alignSymbol:"right",buttonText:t("maxInputMax"),width:47,warning:!!d,onSetTarget:ao,onUserInput:g}),o.default.createElement(To,null,o.default.createElement(n,{color:d?"#EB3742":"transparent",size:16,textAlign:"left"},d)),o.default.createElement(vo,{onEdit:a.onClose}),o.default.createElement(K,{identifier:e.voteAccountPubkey,name:e.info?.name,keybaseUsername:e.info?.keybaseUsername,iconUrl:e.info?.iconUrl,website:e.info?.website,data:[{label:t("validatorCardEstimatedApy"),value:o.default.createElement(n,{textAlign:"right",weight:500,size:14,noWrap:!0},co,"%")},{label:t("validatorCardCommission"),value:o.default.createElement(n,{textAlign:"right",weight:500,size:14,noWrap:!0},e.commission,"%")},{label:t("validatorCardTotalStake"),value:o.default.createElement(n,{textAlign:"right",weight:500,size:14,noWrap:!0},o.default.createElement(W,null,e.activatedStake))}]})),o.default.createElement(bo,null,o.default.createElement(N,{primaryText:t("validatorViewActionButtonStake"),secondaryText:t("commandClose"),onPrimaryClicked:uo,onSecondaryClicked:a.onClose,primaryTheme:x?"primary":"default",primaryDisabled:!x}))))},Ro=xo,Co=i.div`
  display: grid;
  grid-template-rows: 42px auto 47px;
  height: 100%;
`,q=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Q=i.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  color: #ab9ff2;
  text-decoration: none;
  cursor: pointer;
`,bo=i.section`
  display: flex;
  gap: 15px;
`,To=i.div`
  width: 100%;
`,yo=i(n)`
  width: 100%;
  margin-top: 15px;
  > a {
    color: #ab9ff2;
    cursor: pointer;
  }
`,vo=a=>{let{t}=p();return o.default.createElement(yo,{size:16,color:"#777777",lineHeight:20,textAlign:"left"},t("validatorViewValidator")," \u2022 ",o.default.createElement(Q,{onClick:a.onEdit},t("commandEdit")))};export{xo as a,Ro as b};
//# sourceMappingURL=chunk-3LS5W5WU.js.map
