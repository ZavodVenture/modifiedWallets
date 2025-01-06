import{ja as te,ka as re,ma as oe,na as se,oa as ne}from"./chunk-JD6NH5K6.js";import{d as ee}from"./chunk-P5LBFEHG.js";import{a as _}from"./chunk-MHQYYZ7C.js";import{a as $}from"./chunk-X3ESGVCB.js";import{f as Z}from"./chunk-DERIAD33.js";import{h as Q,j as W}from"./chunk-OKP6DFCI.js";import{B as q,Y as J,o as p,rb as b}from"./chunk-WIQ4WVKX.js";import{z as j}from"./chunk-7ZN4F6J4.js";import{yb as U}from"./chunk-OUYKWOVO.js";import{Db as G,Kd as Y,Pa as v,Pb as H,wc as X}from"./chunk-MZZEJ42N.js";import{m as S}from"./chunk-56SJOU6P.js";import{a as L}from"./chunk-7X4NV6OJ.js";import{f as w,h,n as f}from"./chunk-3KENBVE7.js";h();f();var e=w(L());h();f();var u=w(L());var he=p(re)`
  width: 100%;
  border-style: none;
  padding: 0;
`,ie=p(W).attrs({width:"28px",borderRadius:"50px",theme:"primary"})`
  height: 28px;
`,de=u.default.memo(({isExpanded:l,addressBookRecipient:r,clearRecipient:t})=>{let{t:o}=S(),[m,i]=(0,u.useState)(!1),a={onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},g=m&&!r&&!l;return u.default.createElement(ee,{color:"#000000",label:o("sendAddressBookButtonLabel"),ariaLabel:o("sendAddressBookButtonLabel"),alignment:"bottomRight",isVisible:g,triggerParams:a},r?u.default.createElement(ie,{paddingY:9,onClick:t},u.default.createElement(q,{fill:"#222",width:10})):u.default.createElement(he,null,u.default.createElement(ie,{paddingY:6},u.default.createElement(J,{fill:"#222"}))))});h();f();var K=w(L());var ae=K.default.memo(({symbol:l,chainName:r,recipient:t,recipientError:o,handleRecipientChange:m,onBlur:i})=>{let{t:a}=S();return K.default.createElement(Z,{type:"text",name:"recipient",value:t,autoComplete:"off",spellCheck:"false",placeholder:a("sendRecipientTextAreaPlaceholder2",{symbol:r||l}),warning:!!o,onChange:m,onBlur:i,paddingRight:"80px"})});var pe=p(b).attrs({size:16,weight:500,color:"#666666"})`
  font-style: italic;
`,fe=p(te)`
  width: 100%;
  position: relative;
`,Se=p($).attrs({align:"center"})`
  position: relative;
  border-radius: 6px;
  border: 1px solid #2f2f2f;
  padding: 14px;
  background: #181818;
  height: 50px;
  margin-bottom: 2px;
`,Be=p(oe)`
  z-index: 2;
  width: 100%;
`,O=p(ne)`
  padding: 8px 12px;
  min-height: 41px;
`,ye=p($).attrs({justify:"center"})`
  height: 85px;
`,le=p(b).attrs({size:16,color:"#666666"})``,ke=p.div`
  position: absolute;
  right: 12px;
  top: calc(50% - 28px / 2);
  width: auto;
  display: flex;
  gap: 12px;
  align-items: center;
`,xe="__none",Ee=50,R=10,ve=l=>{let{addressBookRecipient:r,networkID:t,senderAddress:o,symbol:m,sendFormValues:i,sendFormErrors:a,recipientError:g,handleAddressSelection:B,setSendFormValues:y,setSendFormErrors:I,onBlurRecipientInput:N,isLoading:D}=l,{t:T}=S(),M=(0,e.useMemo)(()=>({sendAddressBookRecentlyUsed:T("sendAddressBookRecentlyUsed"),sendAddressBookNoAddressesSaved:T("sendAddressBookNoAddressesSaved")}),[T]),{data:F=[]}=Y(),k=(0,e.useMemo)(()=>o?F.reduce((d,s)=>{let E=s.addresses.filter(A=>A.networkID===t&&A.address!==o);if(t)for(let A of E)d.push({label:s.name,address:A.address,chainID:t});return d},[]):[],[o,F,t]),{recentAddresses:C,savedAddresses:n}=j(),c=(0,e.useMemo)(()=>n.addresses.reduce((d,s)=>(t&&U(v.getAddressTypes(s.chainID),v.getAddressTypes(t))&&d.push({...s}),d),[]),[n,t]),x=(0,e.useMemo)(()=>C.addresses.reduce((d,s)=>(t&&U(v.getAddressTypes(s.chainID),v.getAddressTypes(t))&&d.push(s.address),d),[]),[C,t]),V=k.length===0&&c.length===0&&x.length===0,me=(0,e.useMemo)(()=>{for(let{address:d,label:s}of k)if(d===r)return s;for(let{address:d,label:s}of c)if(d===r)return s},[r,k,c]),{recipient:ce}=i,ue=(0,e.useCallback)(d=>{let s=d.currentTarget,E=self.getComputedStyle(s),A=parseInt(E.getPropertyValue("border-top-width"),R)+parseInt(E.getPropertyValue("padding-top"),R)+s.scrollHeight+parseInt(E.getPropertyValue("padding-bottom"),R)+parseInt(E.getPropertyValue("border-bottom-width"),R);A=s.value?Math.min(68,A-28):Ee,s.style.height=`${A}px`,y({...i,recipient:s.value}),I({...a,recipientError:void 0})},[i,a,I,y]),ge=(0,e.useCallback)(()=>{y({...i,recipient:"",addressBookRecipient:void 0})},[i,y]),Ae=(0,e.useMemo)(()=>{if(t)return v.getNetworkName(t)},[t]);return{i18nStrings:M,recipient:ce,addressBookRecipient:r,addresses:k,savedAddresses:c,recentAddresses:x,isEmpty:V,selectedName:me,recipientError:g,symbol:m,chainName:Ae,handleAddressSelection:B,handleRecipientChange:ue,clearRecipient:ge,onBlurRecipientInput:N,isLoading:D}},st=e.default.memo(l=>{let r=ve(l);return e.default.createElement(Te,{...r})}),Te=e.default.memo(l=>{let{i18nStrings:r,recipient:t,addressBookRecipient:o,addresses:m,savedAddresses:i,recentAddresses:a,isEmpty:g,selectedName:B,recipientError:y,symbol:I,chainName:N,handleAddressSelection:D,handleRecipientChange:T,clearRecipient:M,onBlurRecipientInput:F,isLoading:k=!1}=l;return e.default.createElement(fe,{onChange:D,value:o??xe},({isExpanded:C})=>e.default.createElement(e.default.Fragment,null,o?e.default.createElement(Se,null,B?e.default.createElement(b,{size:16,weight:500},B):e.default.createElement(pe,null,r.sendAddressBookRecentlyUsed),e.default.createElement(b,{opacity:.5,size:16,weight:400,margin:"0 0 0 6px"},"(",o.includes(".")?o:H(o,4),")")):e.default.createElement(ae,{symbol:I??"",chainName:N,recipient:t,recipientError:y,handleRecipientChange:T,onBlur:F}),e.default.createElement(ke,null,k?e.default.createElement(Q,{diameter:20}):null,e.default.createElement(de,{isExpanded:C,addressBookRecipient:o,clearRecipient:M})),e.default.createElement(Be,{portal:!1},e.default.createElement(se,{maxHeight:"150px"},m.map(({address:n,label:c,chainID:x},V)=>e.default.createElement(O,{key:`${n}-${V}`,value:n},e.default.createElement(_,{name:c,publicKey:n,publicKeyLabel:G(x,n)}))),i.map(({address:n,label:c},x)=>e.default.createElement(O,{key:`${n}-${x}`,value:n},e.default.createElement(_,{name:c,publicKey:n}))),a.map((n,c)=>e.default.createElement(O,{key:`${n}-${c}`,value:n},e.default.createElement(pe,null,r.sendAddressBookRecentlyUsed),e.default.createElement(le,{opacity:.5},H(n,4)))),g&&e.default.createElement(ye,null,e.default.createElement(le,null,r.sendAddressBookNoAddressesSaved))))))});h();f();var P=w(L()),be=[/Unknown instruction error/i,/Unknown error/i];function lt({programId:l,customErrorCode:r,customErrorReason:t,errorReason:o}){let{t:m}=S(),i=X(),a=t||o,g=m(a);return(0,P.useEffect)(()=>{i.capture("transactionErrorDetails",{data:{programId:l,customErrorCode:r,customErrorReason:t,errorReason:o,hasTranslatedErrorMessage:a!==g}})},[]),P.default.createElement("div",null,g,r&&be.some(B=>B.test(a))?` (${m("transactionsError")}: ${r})`:"")}export{st as a,lt as b};
//# sourceMappingURL=chunk-Z3VAESXD.js.map
