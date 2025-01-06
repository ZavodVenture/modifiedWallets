import{a as F,c as L,d as N,g as D}from"./chunk-GOKFGGQI.js";import{a as f}from"./chunk-P2CLTFKC.js";import"./chunk-XYFNIIUY.js";import"./chunk-24U56MUI.js";import"./chunk-RLZITNCL.js";import{a as $}from"./chunk-T27XGMXK.js";import"./chunk-Q3HNV7GN.js";import"./chunk-XJWRT6N6.js";import"./chunk-JD6NH5K6.js";import"./chunk-KJMFZ7XX.js";import"./chunk-WAFQTOB5.js";import"./chunk-CCUXU2GU.js";import"./chunk-SIDJ2NRC.js";import"./chunk-7UTGLKC7.js";import"./chunk-AHRYSG4W.js";import"./chunk-QEXGR5WT.js";import"./chunk-P5LBFEHG.js";import"./chunk-S24UABH5.js";import"./chunk-MHQYYZ7C.js";import{a as _}from"./chunk-X3ESGVCB.js";import"./chunk-QINBGLLG.js";import"./chunk-SHAEZV7V.js";import"./chunk-IWGMKDQE.js";import"./chunk-DERIAD33.js";import"./chunk-EGXLQXDH.js";import"./chunk-CCQRCL2K.js";import{e as T}from"./chunk-75L54KUM.js";import{a as m}from"./chunk-ROF5SDVA.js";import"./chunk-Q67X6MF4.js";import"./chunk-IVMV7P4T.js";import"./chunk-XJZOYN2T.js";import"./chunk-ZON27MKP.js";import{a as g}from"./chunk-QSVSNR6K.js";import"./chunk-SMVAXKUF.js";import"./chunk-HPOS2V3B.js";import"./chunk-XYJX6G2K.js";import"./chunk-MTQZ2G7K.js";import"./chunk-W27Z2YZM.js";import"./chunk-2NGYUYTC.js";import"./chunk-H3FFS4GT.js";import"./chunk-4VDZJDFB.js";import"./chunk-XJTFMD4C.js";import"./chunk-GMBAJ6CC.js";import"./chunk-PTZMRZUV.js";import"./chunk-VQVTLSDS.js";import{a as P,b as O}from"./chunk-OKP6DFCI.js";import{o as c,v as E}from"./chunk-WIQ4WVKX.js";import"./chunk-SD2LXVLD.js";import"./chunk-UCBZOSRF.js";import"./chunk-F3RUX6TF.js";import"./chunk-HRJWTAGT.js";import"./chunk-LURFXJDV.js";import"./chunk-V5T43K7V.js";import"./chunk-MNXYIK2W.js";import"./chunk-QALJXKGR.js";import"./chunk-MHOQBMVI.js";import"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-7ZN4F6J4.js";import"./chunk-OUYKWOVO.js";import"./chunk-WFPABEAU.js";import"./chunk-THLBAMDB.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-OYGO47TI.js";import"./chunk-SLQBAOEK.js";import{Kd as v,Sd as B}from"./chunk-MZZEJ42N.js";import"./chunk-E3NPIRHS.js";import"./chunk-56SJOU6P.js";import{g as y}from"./chunk-ALUTR72U.js";import"./chunk-N7UFQNLW.js";import"./chunk-L3A2KHJO.js";import"./chunk-4P36KWOF.js";import{a as H}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as b,h as r,n}from"./chunk-3KENBVE7.js";r();n();var o=b(H());r();n();var i=b(H());r();n();var G=c(m)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${t=>t.$isExpanded?"#000":"#333"} !important;
  :hover {
    background-color: #444444;
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${t=>t.$isExpanded?"white":"#666666"};
    transition: fill 200ms ease;
    position: relative;
    ${t=>t.top?`top: ${t.top}px;`:""}
    ${t=>t.right?`right: ${t.right}px;`:""}
  }
`;var U=c(_).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${t=>t.opacity??"1"};
`,V=c.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,I=c.div`
  width: 24px;
  height: 24px;
`,M=({onBackClick:t,totalSteps:a,currentStepIndex:p,isHidden:l,showBackButtonOnFirstStep:e,showBackButton:u=!0})=>i.default.createElement(U,{opacity:l?0:1},u&&(e||p!==0)?i.default.createElement(G,{right:1,onClick:t},i.default.createElement(E,null)):i.default.createElement(I,null),i.default.createElement(V,null,y(a).map(s=>{let d=s<=p?"#AB9FF2":"#333";return i.default.createElement(m,{key:s,diameter:12,color:d})})),i.default.createElement(I,null));r();n();var z=()=>{let{mutateAsync:t}=B(),{hardwareStepStack:a,pushStep:p,popStep:l,currentStep:e,setOnConnectHardwareAccounts:u,setOnConnectHardwareDone:w,setExistingAccounts:s}=F(),{data:d=[],isFetched:x,isError:k}=v(),C=T(a,(h,J)=>h?.length===J.length),W=a.length>(C??[]).length,A=C?.length===0,X={initial:{x:A?0:W?150:-150,opacity:A?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}},j=(0,o.useCallback)(()=>{e()?.props.preventBack||(e()?.props.onBackCallback&&e()?.props.onBackCallback?.(),l())},[e,l]);return $(()=>{u(async h=>{await t(h),await g.set(f,!await g.get(f))}),w(()=>self.close()),p(o.default.createElement(D,null))},a.length===0),(0,o.useEffect)(()=>{s({data:d,isFetched:x,isError:k})},[d,x,k,s]),o.default.createElement(L,null,o.default.createElement(M,{totalSteps:3,onBackClick:j,showBackButton:!e()?.props.preventBack,currentStepIndex:a.length-1}),o.default.createElement(O,{mode:"wait"},o.default.createElement(P.div,{style:{display:"flex",flexGrow:1},key:`${a.length}_${C?.length}`,...X},o.default.createElement(N,null,e()))))},yt=z;export{yt as default};
//# sourceMappingURL=SettingsConnectHardware-X6PPS5J5.js.map
