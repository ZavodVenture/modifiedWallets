import{a as k,b as N}from"./chunk-ZNZZRKNQ.js";import{a as P}from"./chunk-MHQYYZ7C.js";import{a as x}from"./chunk-X3ESGVCB.js";import"./chunk-EGXLQXDH.js";import{a as g}from"./chunk-CCQRCL2K.js";import{m as h}from"./chunk-75L54KUM.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import"./chunk-H3FFS4GT.js";import{j as l}from"./chunk-OKP6DFCI.js";import{o as r,rb as A}from"./chunk-WIQ4WVKX.js";import"./chunk-MNXYIK2W.js";import"./chunk-WFPABEAU.js";import"./chunk-OXFZHPMY.js";import{Sb as b}from"./chunk-MZZEJ42N.js";import"./chunk-E3NPIRHS.js";import{m as y}from"./chunk-56SJOU6P.js";import"./chunk-ALUTR72U.js";import"./chunk-N7UFQNLW.js";import"./chunk-L3A2KHJO.js";import"./chunk-4P36KWOF.js";import{a as C}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f,h as m,n as c}from"./chunk-3KENBVE7.js";m();c();var D=f(N()),o=f(C());m();c();var a=f(C());var B=r(l).attrs({borderRadius:"100px",theme:"primary",width:"auto",fontSize:14,fontWeight:600})`
  flex-shrink: 0;
  padding: 5px 12px;
`,w=a.default.memo(s=>{let{copyText:t,className:i}=s,{buttonText:e,copy:n}=k(t),u=(0,a.useCallback)(d=>{d.stopPropagation(),n()},[n]);return a.default.createElement(B,{className:i,onClick:u},e)});var F=r(g).attrs({align:"center",justify:"space-between"})`
  height: 100%;
`,I=r(D.default)`
  padding: 8px;
  background: #ffffff;
  border-radius: 6px;
`,T=r(x).attrs({align:"center",justify:"space-between"})`
  padding: 12px 15px;
  background: #181818;
  border: 1px solid #2f2f2f;
  border-radius: 6px;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
`,v=r(g).attrs({align:"center"})`
  ${T} {
    margin-top: 32px;
    margin-bottom: 11px;
  }
`,z=r(x)`
  p:first-child {
    margin-right: 6px;
  }
`,H=s=>{let{accountName:t,walletAddress:i,address:e,symbol:n,onClose:u}=s,d=n||(e?b(e):void 0),{t:p}=y();return{i18nStrings:(0,o.useMemo)(()=>({depositAssetInterpolated:p("depositAssetDepositInterpolated",{tokenSymbol:d}),secondaryText:p("depositAssetSecondaryText"),transferFromExchange:p("depositAssetTransferFromExchange"),close:p("commandClose")}),[p,d]),accountName:t,walletAddress:i,onClose:u}},M=o.default.memo(s=>{let{i18nStrings:t,accountName:i,walletAddress:e,onClose:n}=s;return o.default.createElement(F,null,o.default.createElement(h,null,t.depositAssetInterpolated),o.default.createElement(v,null,o.default.createElement(I,{value:e,size:160}),o.default.createElement(T,null,o.default.createElement(z,null,o.default.createElement(P,{name:i,publicKey:e})),o.default.createElement(w,{copyText:e})),o.default.createElement(A,{size:14,color:"#777777",lineHeight:20},t.secondaryText)),o.default.createElement(g,null,o.default.createElement(l,{onClick:n},t.close)))}),E=o.default.memo(s=>{let t=H(s);return o.default.createElement(M,{...t})}),oo=E;export{E as DepositAddressPage,oo as default};
//# sourceMappingURL=DepositAddressPage-NNV2DW3I.js.map
