import{Ma as C}from"./chunk-JD6NH5K6.js";import"./chunk-KJMFZ7XX.js";import"./chunk-WAFQTOB5.js";import"./chunk-CCUXU2GU.js";import"./chunk-SIDJ2NRC.js";import"./chunk-7UTGLKC7.js";import"./chunk-AHRYSG4W.js";import"./chunk-QEXGR5WT.js";import"./chunk-P5LBFEHG.js";import"./chunk-S24UABH5.js";import"./chunk-MHQYYZ7C.js";import"./chunk-X3ESGVCB.js";import"./chunk-QINBGLLG.js";import"./chunk-SHAEZV7V.js";import"./chunk-IWGMKDQE.js";import"./chunk-DERIAD33.js";import"./chunk-EGXLQXDH.js";import"./chunk-CCQRCL2K.js";import"./chunk-75L54KUM.js";import"./chunk-ROF5SDVA.js";import"./chunk-Q67X6MF4.js";import"./chunk-IVMV7P4T.js";import"./chunk-ZON27MKP.js";import"./chunk-SMVAXKUF.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import"./chunk-MTQZ2G7K.js";import"./chunk-W27Z2YZM.js";import"./chunk-2NGYUYTC.js";import"./chunk-H3FFS4GT.js";import{a as y}from"./chunk-4VDZJDFB.js";import"./chunk-XJTFMD4C.js";import"./chunk-GMBAJ6CC.js";import"./chunk-PTZMRZUV.js";import"./chunk-VQVTLSDS.js";import{k as v}from"./chunk-OKP6DFCI.js";import{na as T,o,rb as s}from"./chunk-WIQ4WVKX.js";import{Ta as w,xa as u}from"./chunk-SD2LXVLD.js";import"./chunk-UCBZOSRF.js";import"./chunk-F3RUX6TF.js";import"./chunk-HRJWTAGT.js";import"./chunk-LURFXJDV.js";import"./chunk-V5T43K7V.js";import"./chunk-MNXYIK2W.js";import"./chunk-QALJXKGR.js";import"./chunk-MHOQBMVI.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-7ZN4F6J4.js";import"./chunk-OUYKWOVO.js";import"./chunk-WFPABEAU.js";import"./chunk-THLBAMDB.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-OYGO47TI.js";import"./chunk-SLQBAOEK.js";import"./chunk-MZZEJ42N.js";import"./chunk-E3NPIRHS.js";import{m as S}from"./chunk-56SJOU6P.js";import"./chunk-ALUTR72U.js";import"./chunk-N7UFQNLW.js";import{C as p,D as f,Ya as d}from"./chunk-L3A2KHJO.js";import"./chunk-4P36KWOF.js";import{a as k}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as O,h as l,n as m}from"./chunk-3KENBVE7.js";l();m();var e=O(k());var b=o.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: 16px;
`,x=o.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -20px;
`,h=o(s).attrs({size:28,weight:500,color:"#FFFFFF"})`
  margin-top: 24px;
`,F=o(s).attrs({size:16,weight:500,color:"#777777"})`
  padding: 0px 5px;
  margin-top: 9px;
  span {
    color: #ffffff;
  }
  label {
    color: #ab9ff2;
    cursor: pointer;
  }
`,P=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`,A=o.div`
  margin-top: auto;
  width: 100%;
`,B=()=>{let{t:i}=S(),{mutateAsync:n}=w(),{handleHideModalVisibility:r,handleShowModalVisibility:t}=C(),{data:[a]}=d(["enable-swapper-skip-review"]),g=(0,e.useCallback)(()=>{t("swapConfirmation"),r("swapTermsOfService")},[t,r]),c=u({goToConfirmation:g});return{onAgreeClick:(0,e.useCallback)(()=>{n(!0),a?c():(t("swapReview"),r("swapTermsOfService"))},[t,n,r,a,c]),onCancelClick:()=>{r("swapTermsOfService")},t:i}},L=()=>{self.open(p,"_blank")},M=()=>{self.open(f,"_blank")},_=e.default.memo(({onAgreeClick:i,onCancelClick:n,t:r})=>e.default.createElement(b,null,e.default.createElement(x,null,e.default.createElement(P,null,e.default.createElement(T,null),e.default.createElement(h,null,r("termsOfServicePrimaryText")),e.default.createElement(F,null,e.default.createElement(y,{i18nKey:"termsOfServiceDiscliamerFeesEnabledInterpolated"},"We have revised our Terms of Service. By clicking ",e.default.createElement("span",null,'"I Agree"')," you agree to our new",e.default.createElement("label",{onClick:L},"Terms of Service"),".",e.default.createElement("br",null),e.default.createElement("br",null),"Our new Terms of Service include a new ",e.default.createElement("label",{onClick:M},"fee structure")," for certain products.")))),e.default.createElement(A,null,e.default.createElement(v,{primaryText:r("termsOfServiceActionButtonAgree"),secondaryText:r("commandCancel"),onPrimaryClicked:i,onSecondaryClicked:n})))),V=()=>{let i=B();return e.default.createElement(_,{...i})},X=V;export{V as SwapTermsOfServicePage,X as default};
//# sourceMappingURL=SwapTermsOfServicePage-TCEOT3ZV.js.map
