import{ja as W,la as z,ma as H,na as K,oa as V}from"./chunk-JD6NH5K6.js";import{a as g}from"./chunk-X3ESGVCB.js";import{a as L,g as le}from"./chunk-IWGMKDQE.js";import{a as ce,b as $}from"./chunk-DERIAD33.js";import{a as se,b as de,m as pe}from"./chunk-SMVAXKUF.js";import{f as D,q as N}from"./chunk-2NGYUYTC.js";import{o as s,rb as v,u as E}from"./chunk-WIQ4WVKX.js";import{c as ae}from"./chunk-MHOQBMVI.js";import{b as oe}from"./chunk-SLQBAOEK.js";import{Ad as B,Dc as R,Dd as ee,Gd as te,Nd as re,Pa as b,Pb as Y,ca as Q,ee as ne,ke as j,ue as ie,zc as Z}from"./chunk-MZZEJ42N.js";import{m as h}from"./chunk-56SJOU6P.js";import{L as q,M as J,ta as U}from"./chunk-L3A2KHJO.js";import{a as P}from"./chunk-7X4NV6OJ.js";import{f as k,h as l,n as p}from"./chunk-3KENBVE7.js";l();p();var O=k(P());var $e=e=>{let{t}=h(),o=Z(),{data:d=[]}=R(),{mutateAsync:i}=ne(),{mutateAsync:m}=re(),S=(0,O.useCallback)((T,x,w)=>{let f=d.find(y=>y.accountHash===T.identifier),A={name:f?.name??t("onboardingImportAccountsAccountName",{walletIndex:w+x+1})};return f?.icon&&(A.icon=f.icon.startsWith("https://")?{type:"image",imageUrl:f.icon}:{type:"emoji",unicode:f.icon}),A},[d,t]);return{handleImportSeed:(0,O.useCallback)(async(T,x,w,f=0)=>{let A={},y=await(e==="seed"?se(T,x,w):de(T,x,w));if(y.forEach((c,I)=>{A[c.identifier]=S(c,I,f)}),y.length===0)throw new Error("Failed to set seed phrase");await m({metadataBatch:A}),await i({identifier:y[0].identifier});try{await o.downloadSyncedAccounts()}catch{}if(e==="seedless"){try{let c=new Set(y.map(I=>I.seedIdentifier));await Promise.all([...c].map(I=>pe.addAuthFactor({secretIdentifier:I})))}catch{U.captureError(new Error("Unable to add auth factor for se*dless!"),"Auth")}try{await o.uploadSyncedAccounts(y.map(c=>c.identifier))}catch{U.captureError(new Error("Unable to sync accounts se*dless!"),"Auth")}}ae.capture("addSeedAccount",{data:{walletIndex:f+1}})},[S,m,i,e,o])}};l();p();var n=k(P());l();p();var r=k(P());var ue=({onChange:e,value:t,networkID:o})=>{let d=B(),i=(0,r.useMemo)(()=>{if(!o)return[];let S=b.getAddressTypes(o);return d.filter(u=>S.includes(u))},[d,o]);if(!i||i.length===0)return null;let m=i.includes(t)?t:i[0];return r.default.createElement(Ie,{onChange:e,value:m},({isExpanded:S})=>r.default.createElement(r.default.Fragment,null,r.default.createElement(Ce,{isActive:S},r.default.createElement(me,{networkID:o,addressType:m},r.default.createElement(fe,null,r.default.createElement(E,{fill:"#777",width:10})))),r.default.createElement(be,{portal:!1},r.default.createElement(K,{maxHeight:"300px"},i?.filter(u=>u!==m)?.map(u=>r.default.createElement(ve,{key:u,value:u},r.default.createElement(me,{networkID:o,addressType:u})))))))},me=({addressType:e,networkID:t,children:o})=>!t||!e?null:r.default.createElement(g,{justify:"space-between"},r.default.createElement(g,null,r.default.createElement(L,{networkID:t,size:32}),r.default.createElement(Te,null,Q.getDisplayName(e))),o),Ie=s(W)`
  width: 100%;
  position: relative;
`,fe=s.div`
  display: inline-flex;
  line-height: 0;
`,Ce=s(({isActive:e,...t})=>r.default.createElement(z,{...t}))`
  padding: 8px 16px 8px 12px;

  ${fe} {
    svg {
      transform: rotate(${e=>e.isActive?"-180deg":"0"});
      transition: transform 0.2s ease-in-out;
    }
  }
`,be=s(H)`
  z-index: 2;
  width: 100%;
`,ve=s(V)`
  padding: 8px 16px 8px 12px;
  min-height: 50px;
`,Te=s(v).attrs({size:16,weight:400,lineHeight:19,margin:"0 0 0 8px"})``;l();p();var a=k(P());var ke=s(W)`
  width: 100%;
  position: relative;
`,he=s.div`
  display: inline-flex;
  line-height: 0;
`,Pe=s(({isActive:e,...t})=>a.default.createElement(z,{...t}))`
  padding: 8px 16px 8px 12px;

  ${he} {
    svg {
      transform: rotate(${e=>e.isActive?"-180deg":"0"});
      transition: transform 0.2s ease-in-out;
    }
  }
`,De=s(H)`
  z-index: 2;
  width: 100%;
`,Ne=s(V)`
  padding: 8px 16px 8px 12px;
  min-height: 50px;
`,Fe=s(v).attrs({size:16,weight:400,lineHeight:19,margin:"0 0 0 8px"})``,Se=({onChange:e,value:t})=>{let o=ee();return a.default.createElement(ke,{onChange:e,value:t},({isExpanded:d})=>a.default.createElement(a.default.Fragment,null,a.default.createElement(Pe,{isActive:d},a.default.createElement(ye,{networkID:t},a.default.createElement(he,null,a.default.createElement(E,{fill:"#777",width:10})))),a.default.createElement(De,{portal:!1},a.default.createElement(K,{maxHeight:"300px"},o.filter(i=>i!==t).map(i=>a.default.createElement(Ne,{key:i,value:i},a.default.createElement(ye,{networkID:i})))))))},ye=({networkID:e,children:t})=>a.default.createElement(g,{justify:"space-between"},a.default.createElement(g,null,a.default.createElement(L,{networkID:e,size:32}),a.default.createElement(Fe,null,b.getNetworkName(e))),t);var Wt=({onClick:e,disabled:t})=>{let{t:o}=h(),d=te();return n.default.createElement(D,{topLeft:{text:o("addAccountImportWalletPrimaryText"),font:"bodyMedium"},bottomLeft:{text:o(d?"addAccountImportWalletSolanaSecondaryText":"addAccountImportWalletSecondaryText")},start:n.default.createElement(N,{backgroundColor:"borderPrimary",color:"textPrimary",icon:"Download",shape:"circle",size:32}),onClick:e,disabled:t})},zt=({control:e,getValues:t,register:o,setValue:d,trigger:i,errors:m,nameValidations:S,privateKey:u,privateKeyValidations:T,addressPreview:x})=>{let{t:w}=h(),f=ie(C=>C.editableAccountMetadata),A=t("networkID"),y=b.getAddressTypes(A),c=B(),I=c.filter(C=>y.includes(C));return n.default.createElement(le,null,n.default.createElement(j,{name:"networkID",control:e,render:({field:{onChange:C,value:_}})=>c.length===1?n.default.createElement(n.default.Fragment,null):n.default.createElement(Se,{onChange:M=>{C(M);let Ae=b.getAddressTypes(M),ge=c.filter(xe=>Ae.includes(xe));d("addressType",ge[0]),u&&i("privateKey")},value:_})}),n.default.createElement(j,{name:"addressType",control:e,render:({field:{onChange:C,value:_}})=>I.length===1?n.default.createElement(n.default.Fragment,null):n.default.createElement(ue,{onChange:M=>{C(M),u&&i("privateKey")},value:_,networkID:A})}),n.default.createElement($.WithWarning,{placeholder:w("addAccountImportAccountName"),defaultValue:f?.name,warning:!!m.name,warningMessage:m.name?.message,autoComplete:"off",maxLength:oe,...o("name",S)}),n.default.createElement(we.WithWarning,{placeholder:w("addAccountImportAccountPrivateKey"),defaultValue:"",warning:!!m.privateKey,warningMessage:m.privateKey?.message,autoComplete:"off",...o("privateKey",T)}),x?n.default.createElement(Me,{label:w("settingsWalletAddress"),pubkey:x}):null)},Me=n.default.memo(({label:e,pubkey:t})=>n.default.createElement(g,{justify:"space-between",align:"center",margin:"-7px 0 0"},n.default.createElement(v,{size:16,weight:600},e),n.default.createElement(v,{size:16},Y(t,4)))),Be=s($.withComponent("textarea"))`
  height: 120px;
  text-align: start;
  resize: none;
  -webkit-text-security: disc;
`,we=ce(Be);we.defaultProps={fontSize:"16px"};l();p();var X=k(P());var $t=({onClick:e,disabled:t})=>{let{t:o}=h(),d=q||J;return X.default.createElement(D,{topLeft:{text:o("addAccountHardwareWalletPrimaryText"),font:"bodyMedium"},bottomLeft:{text:o("addAccountHardwareWalletSecondaryText")},start:X.default.createElement(N,{backgroundColor:"borderPrimary",color:"textPrimary",icon:"WalletHardware",shape:"circle",size:32}),onClick:e,disabled:t||d})};l();p();var G=k(P());var Qt=({onClick:e,disabled:t})=>{let{t:o}=h();return G.default.createElement(D,{topLeft:{text:o("addAccountImportSeedPhrasePrimaryText"),font:"bodyMedium"},bottomLeft:{text:o("addAccountImportSeedPhraseSecondaryText")},start:G.default.createElement(N,{backgroundColor:"borderPrimary",color:"textPrimary",icon:"File",shape:"circle",size:32}),onClick:e,disabled:t})};export{$e as a,Se as b,Wt as c,zt as d,$t as e,Qt as f};
//# sourceMappingURL=chunk-WE6RAXEH.js.map
