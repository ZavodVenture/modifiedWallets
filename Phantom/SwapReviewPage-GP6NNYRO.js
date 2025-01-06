import{a as F}from"./chunk-RKY2OTIK.js";import{a as b}from"./chunk-GMHOL5FJ.js";import{a as w}from"./chunk-O3A2VMJ6.js";import"./chunk-W3ZRPNOX.js";import"./chunk-XYFNIIUY.js";import"./chunk-2WECCVZD.js";import"./chunk-O5AAGNHJ.js";import"./chunk-Q3HNV7GN.js";import"./chunk-XJWRT6N6.js";import{Ma as T,z as x}from"./chunk-JD6NH5K6.js";import"./chunk-KJMFZ7XX.js";import"./chunk-WAFQTOB5.js";import"./chunk-CCUXU2GU.js";import"./chunk-SIDJ2NRC.js";import"./chunk-7UTGLKC7.js";import"./chunk-AHRYSG4W.js";import"./chunk-QEXGR5WT.js";import"./chunk-P5LBFEHG.js";import"./chunk-S24UABH5.js";import"./chunk-MHQYYZ7C.js";import"./chunk-X3ESGVCB.js";import"./chunk-QINBGLLG.js";import"./chunk-SHAEZV7V.js";import"./chunk-IWGMKDQE.js";import"./chunk-DERIAD33.js";import"./chunk-EGXLQXDH.js";import"./chunk-CCQRCL2K.js";import{h as g}from"./chunk-75L54KUM.js";import"./chunk-ROF5SDVA.js";import"./chunk-Q67X6MF4.js";import{a as y}from"./chunk-IVMV7P4T.js";import"./chunk-ZON27MKP.js";import"./chunk-SMVAXKUF.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import"./chunk-MTQZ2G7K.js";import"./chunk-W27Z2YZM.js";import"./chunk-2NGYUYTC.js";import"./chunk-H3FFS4GT.js";import"./chunk-4VDZJDFB.js";import"./chunk-XJTFMD4C.js";import"./chunk-GMBAJ6CC.js";import"./chunk-PTZMRZUV.js";import"./chunk-VQVTLSDS.js";import{j as P}from"./chunk-OKP6DFCI.js";import{o as i}from"./chunk-WIQ4WVKX.js";import{Na as R,ab as h,bb as C,ja as f,qa as v,ya as S}from"./chunk-SD2LXVLD.js";import"./chunk-UCBZOSRF.js";import"./chunk-F3RUX6TF.js";import"./chunk-HRJWTAGT.js";import"./chunk-LURFXJDV.js";import{v as c}from"./chunk-V5T43K7V.js";import"./chunk-MNXYIK2W.js";import"./chunk-QALJXKGR.js";import"./chunk-MHOQBMVI.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-7ZN4F6J4.js";import"./chunk-OUYKWOVO.js";import"./chunk-WFPABEAU.js";import"./chunk-THLBAMDB.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-OYGO47TI.js";import"./chunk-SLQBAOEK.js";import{$d as u}from"./chunk-MZZEJ42N.js";import"./chunk-E3NPIRHS.js";import{m as d}from"./chunk-56SJOU6P.js";import"./chunk-ALUTR72U.js";import"./chunk-N7UFQNLW.js";import"./chunk-L3A2KHJO.js";import"./chunk-4P36KWOF.js";import{a as M}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as I,h as l,n as m}from"./chunk-3KENBVE7.js";l();m();var e=I(M());var D=i.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
  padding: 16px 16px ${78}px; // footer height + padding
`,E=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,H=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  position: absolute;
  bottom: 0;
`,Q=i.div`
  background-color: #2a2a2a;
  border-radius: 6px;
  width: 100%;

  > *:first-child {
    border-bottom: 1px solid #222222;
  }
`,W=()=>{let{t}=d(),{handleHideModalVisibility:r}=T(),{pushDetailView:n}=g(),{resume:p}=v(),o=f(a=>a.quoteResponse),{data:s}=u(),V=(0,e.useMemo)(()=>s?.addresses.find(a=>a.networkID===o?.sellToken.chainId),[s,o]);(0,e.useEffect)(()=>{R()},[]),c(V,"SWAP_FUNGIBLE");let B=(0,e.useCallback)(()=>n(e.default.createElement(b,null)),[n]),k=S({goToConfirmation:B}),A=(0,e.useCallback)(()=>{p(),r("swapReview")},[r,p]);return{...k,hideSwapReview:A,t}},q=e.default.memo(({buyToken:t,sellToken:r,hideSwapReview:n,onSwap:p,t:o})=>{let{infoRowDisplayStrategy:s}=C();return e.default.createElement(D,null,e.default.createElement(E,null,e.default.createElement(x,{leftButton:{type:"close",onClick:n}},o("swapReviewFlowPrimaryText")),e.default.createElement(Q,null,e.default.createElement(w,{...r,title:o("swapReviewFlowYouPay")}),e.default.createElement(w,{...t,title:o("swapReviewFlowYouReceive")})),e.default.createElement(F,{isSwapReview:!0,rowDisplayStrategy:s})),e.default.createElement(H,null,e.default.createElement(y,{removeFooterExpansion:!0,removeShadowFooter:!0},e.default.createElement(P,{theme:"primary",onClick:p},o("swapReviewFlowActionButtonPrimary")))))}),N=()=>{let t=W();return e.default.createElement(h,null,e.default.createElement(q,{...t}))},Y=()=>e.default.createElement(N,null),ne=Y;export{Y as SwapReviewPage,ne as default};
//# sourceMappingURL=SwapReviewPage-GP6NNYRO.js.map
