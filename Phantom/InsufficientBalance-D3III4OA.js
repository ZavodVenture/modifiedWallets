import{a as h,b as c,d as s,e as T}from"./chunk-W3ZRPNOX.js";import{a as I}from"./chunk-XYFNIIUY.js";import{Ma as b,ba as g}from"./chunk-JD6NH5K6.js";import"./chunk-KJMFZ7XX.js";import"./chunk-WAFQTOB5.js";import"./chunk-CCUXU2GU.js";import"./chunk-SIDJ2NRC.js";import"./chunk-7UTGLKC7.js";import"./chunk-AHRYSG4W.js";import"./chunk-QEXGR5WT.js";import"./chunk-P5LBFEHG.js";import"./chunk-S24UABH5.js";import"./chunk-MHQYYZ7C.js";import"./chunk-X3ESGVCB.js";import"./chunk-QINBGLLG.js";import"./chunk-SHAEZV7V.js";import"./chunk-IWGMKDQE.js";import"./chunk-DERIAD33.js";import"./chunk-EGXLQXDH.js";import"./chunk-CCQRCL2K.js";import"./chunk-75L54KUM.js";import"./chunk-ROF5SDVA.js";import"./chunk-Q67X6MF4.js";import"./chunk-IVMV7P4T.js";import"./chunk-ZON27MKP.js";import"./chunk-SMVAXKUF.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import"./chunk-MTQZ2G7K.js";import"./chunk-W27Z2YZM.js";import"./chunk-2NGYUYTC.js";import"./chunk-H3FFS4GT.js";import"./chunk-4VDZJDFB.js";import"./chunk-XJTFMD4C.js";import"./chunk-GMBAJ6CC.js";import"./chunk-PTZMRZUV.js";import"./chunk-VQVTLSDS.js";import{j as x,k as C}from"./chunk-OKP6DFCI.js";import{o,rb as l}from"./chunk-WIQ4WVKX.js";import"./chunk-SD2LXVLD.js";import"./chunk-UCBZOSRF.js";import"./chunk-F3RUX6TF.js";import"./chunk-HRJWTAGT.js";import"./chunk-LURFXJDV.js";import"./chunk-V5T43K7V.js";import"./chunk-MNXYIK2W.js";import"./chunk-QALJXKGR.js";import"./chunk-MHOQBMVI.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-7ZN4F6J4.js";import"./chunk-OUYKWOVO.js";import"./chunk-WFPABEAU.js";import"./chunk-THLBAMDB.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-OYGO47TI.js";import"./chunk-SLQBAOEK.js";import{Pa as r,Xa as y,kb as B}from"./chunk-MZZEJ42N.js";import"./chunk-E3NPIRHS.js";import{m as d}from"./chunk-56SJOU6P.js";import"./chunk-ALUTR72U.js";import"./chunk-N7UFQNLW.js";import"./chunk-L3A2KHJO.js";import"./chunk-4P36KWOF.js";import{a as v}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as S,h as p,n as u}from"./chunk-3KENBVE7.js";p();u();var n=S(v());var M=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`,D=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`,P=o(l).attrs({size:28,weight:500,color:"#FFF"})`
  margin: 16px;
`,V=o(l).attrs({size:14,weight:400,lineHeight:17,color:"#999"})`
  max-width: 275px;

  span {
    color: white;
  }
`,$=o(h)`
  width: 100%;
  margin-top: 32px;
`,q=({networkId:t,token:a})=>{let{t:i}=d(),{handleHideModalVisibility:f}=b(),m=(0,n.useCallback)(()=>{f("insufficientBalance")},[f]),w=t&&y(B(r.getChainID(t))),{canBuy:F,openBuy:k}=g(w||"","modal","fiatOnrampFromInsufficientBalance"),e=t?r.getTokenSymbol(t):i("tokens");return n.default.createElement(M,null,n.default.createElement("div",null,n.default.createElement(D,null,n.default.createElement(I,{type:"failure",backgroundWidth:75}),n.default.createElement(P,null,i("insufficientBalancePrimaryText",{tokenSymbol:e})),n.default.createElement(V,null,i("insufficientBalanceSecondaryText",{tokenSymbol:e})),a?n.default.createElement($,{roundedTop:!0,roundedBottom:!0},n.default.createElement(c,{label:i("insufficientBalanceRemaining")},n.default.createElement(s,{color:"#EB3742"},`${a.balance} ${e}`)),n.default.createElement(T,{gap:1}),n.default.createElement(c,{label:i("insufficientBalanceRequired")},n.default.createElement(s,null,`${a.required} ${e}`))):null)),F?n.default.createElement(C,{primaryText:i("buyAssetInterpolated",{tokenSymbol:e}),onPrimaryClicked:k,secondaryText:i("commandCancel"),onSecondaryClicked:m}):n.default.createElement(x,{onClick:m},i("commandCancel")))},Q=q;export{q as InsufficientBalance,Q as default};
//# sourceMappingURL=InsufficientBalance-D3III4OA.js.map
