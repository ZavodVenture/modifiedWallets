import{a as P}from"./chunk-XYFNIIUY.js";import{a as at}from"./chunk-T27XGMXK.js";import{b as it,c as dt,d as be}from"./chunk-Q3HNV7GN.js";import{a as K}from"./chunk-XJWRT6N6.js";import{e as me}from"./chunk-CCUXU2GU.js";import{a as ae,k as st}from"./chunk-IWGMKDQE.js";import{a as De}from"./chunk-MTQZ2G7K.js";import{l as nt,m as rt}from"./chunk-W27Z2YZM.js";import{i as ce,j as B}from"./chunk-OKP6DFCI.js";import{Fa as ct,o as i,rb as _}from"./chunk-WIQ4WVKX.js";import{a as Je}from"./chunk-SD2LXVLD.js";import{a as et,l as tt,x as ye}from"./chunk-LURFXJDV.js";import{Ad as Ce,Bd as Re,Dd as we,Ja as Xe,Jb as Ae,Oc as Se,Pa as M,Pb as Ze,X as $e,Y as Ke,Z as Ye,te as ot,zd as Qe}from"./chunk-MZZEJ42N.js";import{K as _e}from"./chunk-E3NPIRHS.js";import{m as v}from"./chunk-56SJOU6P.js";import{D as Ue,d as ke,ha as Ve,ma as qe}from"./chunk-ALUTR72U.js";import{Ya as je,_a as ze}from"./chunk-L3A2KHJO.js";import{a as R}from"./chunk-7X4NV6OJ.js";import{f as Q,h as A,n as S}from"./chunk-3KENBVE7.js";A();S();var Ht={existingAccounts:{data:[],isFetched:!1,isError:!1},hardwareStepStack:[],hardwareStepSubStack:{},selectedChains:[],selectedChainsMap:new Map,chainImportStep:1,derivedAccountGroups:[],discoveredAccounts:[],activeAccountsFound:!1,selectedAccounts:{},onConnectHardwareAccounts:e=>Promise.resolve(),onConnectHardwareDone:()=>{}},I=ot((e,o)=>({...Ht,pushStep:t=>{let r=o().hardwareStepStack;e({hardwareStepStack:r.concat(t)})},popStep:()=>{let r=o().hardwareStepStack.length-1;if((o().hardwareStepSubStack[r]??[]).length)return e(Se(s=>{s.hardwareStepSubStack[r]=s.hardwareStepSubStack[r].slice(0,-1)}));e(Se(s=>{s.hardwareStepStack=s.hardwareStepStack.slice(0,-1)}))},pushSubStep:t=>{let c=o().hardwareStepStack.length-1,s=o().hardwareStepSubStack[c]??[];e(Se(C=>{C.hardwareStepSubStack[c]=s.concat([t])}))},currentStep:()=>{let t=o().hardwareStepStack,r=o().hardwareStepSubStack,c=t.length>0?t.length-1:t.length;return r[c]?.length?ke(r[c]):ke(t)},setExistingAccounts:t=>{e({existingAccounts:t})},setSelectedChains:(t,r)=>{e({selectedChains:t,selectedChainsMap:r})},setDecrementChainImportStep:()=>{let t=o().chainImportStep;e({chainImportStep:t-1})},setIncrementChainImportStep:()=>{let t=o().chainImportStep;e({chainImportStep:t+1})},setDerivedAccountGroups:t=>{e({derivedAccountGroups:t})},setDiscoveredAccounts:(t,r)=>{e({discoveredAccounts:t,activeAccountsFound:r})},selectAccount:t=>{let c={...o().selectedAccounts};c[t]=!0,e({selectedAccounts:c})},deselectAccount:t=>{let c={...o().selectedAccounts};delete c[t],e({selectedAccounts:c})},setSelectedAccounts:t=>{e({selectedAccounts:t})},setOnConnectHardwareAccounts:t=>{e({onConnectHardwareAccounts:t})},setOnConnectHardwareDone:t=>{e({onConnectHardwareDone:t})}}));A();S();A();S();A();S();var pt=i.main`
  width: ${420}px;
  min-height: ${480}px;
  position: relative;
  overflow: hidden;
  background-color: #222222;
  border: 1px solid #323232;
  border-radius: 16px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
`;var ho=i(pt)`
  display: flex;
  flex-direction: column;
`,fo=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 20px 20px;
`,Y=i.div`
  padding-top: 44px;
`,E=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  overflow: auto;
`;A();S();var H=Q(R());A();S();var a=Q(R());A();S();var k=Q(R());A();S();var F=Q(R());var xe=()=>{let{t:e}=v(),{discoveredAccounts:o,selectedAccounts:t,onConnectHardwareAccounts:r,onConnectHardwareDone:c}=I(),{mutateAsync:s}=Qe(),[C,y]=(0,F.useState)(!1),g=(0,F.useMemo)(()=>o.filter(n=>!!t[n.discoveryIdentifier]),[o,t]);return(0,F.useEffect)(()=>{if(g.length){let n=[],w=new Set;for(let f of g){let{accounts:b,seedIndex:D,accountIndex:T}=f,W=[],L=[];for(let m of b)$e(m.derivationPathType)?(L.push({pathType:m.derivationPathType,value:m.publicKey}),(!("amount"in m)||parseFloat(m.amount)!==0)&&w.add(m.chainType)):(Ke(m.derivationPathType)||Ye(m.derivationPathType))&&W.push({pathType:m.derivationPathType,value:m.address});n.push({derivationIndex:D,addresses:W,publicKeys:L,accountIndex:T})}r({accounts:n}).then(()=>{w.size>0&&s({addressTypes:Array.from(w)})}).finally(()=>y(!0))}else y(!0)},[g,r,s]),F.default.createElement(E,null,F.default.createElement(Y,null,F.default.createElement(K,{icon:F.default.createElement(P,{type:"success"}),primaryText:e("connectHardwareAccountsAddedInterpolated",{numOfAccounts:g.length}),headerStyle:"large",secondaryText:e("connectHardwareFinishSecondaryText")})),F.default.createElement(B,{onClick:c,theme:"primary",disabled:!C},e("pastParticipleDone")))};A();S();var N=Q(R());A();S();var h=Q(R());var Dt=(e,o,t)=>{switch(o){case"seed":return e("onboardingImportAccountsAccountName",{walletIndex:t});case"ledger":return e("onboardingImportAccountsLedgerAccountName",{walletIndex:t})}},Ot=({account:e})=>{let{t:o}=v();return h.default.createElement(Ft,null,h.default.createElement(Pt,null,h.default.createElement(ae,{networkID:e.chain.id,size:40,borderColor:"bgRow"})),h.default.createElement(Bt,null,h.default.createElement(Nt,null,h.default.createElement(st,{networkID:e.chain.id,walletAddress:e.address},h.default.createElement(Te,null,e.chain.name)),h.default.createElement(Te,null,Ze(e.address,4))),h.default.createElement(ve,null,"amount"in e&&"chain"in e?h.default.createElement(ut,null,Ve(e.amount)," ",e.chain.symbol):null,"amount"in e?h.default.createElement(ut,null,e.lastActivityTimestamp?o("onboardingImportAccountsLastActive",{formattedTimestamp:Ue(e.lastActivityTimestamp*1e3,!0)}):o("onboardingImportAccountsCreateNew")):null)))},mt=h.default.memo(({accountType:e,accounts:o,checked:t,accountIndex:r,onPress:c})=>{let{t:s}=v(),C=r+1;return h.default.createElement(lt,null,h.default.createElement(Mt,null,h.default.createElement(Te,null,Dt(s,e,C)),h.default.createElement(me,{checked:t,onChange:c,"data-testid":"account-select-address-row-checkbox"})),o.map((y,g)=>h.default.createElement(Ot,{key:`${y.address}-${g}`,account:y})))}),Wo=h.default.memo(({totalAccounts:e,selectedAccounts:o,onPress:t})=>{let{t:r}=v();return h.default.createElement(lt,null,h.default.createElement(Lt,null,h.default.createElement(Te,null,r("onboardingSelectAccountsNoOfAccountsSelected",{numOfAccounts:o}))," ",h.default.createElement(Et,null,r("onboardingSelectAccountSelectAllText")," ",h.default.createElement(me,{checked:o===e,onChange:t,"data-testid":"account-select-all-checkbox"}))))}),lt=i.div`
  margin-bottom: 24px;
  width: 100%;
`,Pt=i.div`
  flex-shrink: 0;
  margin-right: 10px;
`,Bt=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ve=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,Nt=i(ve)`
  margin-bottom: 2px;
`,Lt=i(ve)`
  background: #2a2a2a;
  margin-bottom: 1px;
  padding: 12px 10px 12px 14px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Et=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Mt=i(ve)`
  background: #2a2a2a;
  margin-bottom: 1px;
  padding: 12px 16px 12px 14px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  & > span {
    margin-right: 0;
  }
`,Ft=i.div`
  background: #2a2a2a;
  margin-top: 1px;
  padding: 17px 16px 17px 14px;
  width: 100%;
  display: flex;
  align-items: center;

  &:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`,Te=i(_).attrs({size:16,lineHeight:19,weight:600})``,ut=i(_).attrs({size:14,lineHeight:17,weight:400,color:"#777777"})``;var ht=({activeAccounts:e})=>{let{t:o}=v(),{selectedAccounts:t,selectAccount:r,deselectAccount:c,pushSubStep:s}=I(),C=(0,N.useMemo)(()=>Object.values(t).filter(n=>!!n).length===0,[t]),y=(0,N.useCallback)(()=>{s(N.default.createElement(xe,{preventBack:!0}))},[s]);return N.default.createElement(E,null,N.default.createElement("div",{style:{marginBottom:15}},N.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:30}},N.default.createElement(_,{weight:500,size:30,lineHeight:34,maxWidth:"320px"},o("connectHardwareSelectAccounts")),N.default.createElement(Wt,{wordBreak:"break-word",size:18,lineHeight:22,color:"#777777"},o("connectHardwareChooseAccountsToConnect"))),N.default.createElement("div",{style:{maxHeight:420,overflowY:"scroll"}},e.map(({accounts:g,discoveryIdentifier:n,accountIndex:w})=>{let u=!!t[n];return N.default.createElement(mt,{key:n,accountType:"ledger",accounts:g,accountIndex:w,checked:u,onPress:()=>{u?c(n):r(n)}})}))),N.default.createElement(B,{onClick:y,theme:"primary",disabled:C},o("commandContinue")))},Wt=i(_)`
  margin-top: 15px;
`;var ft=()=>{let{t:e}=v(),{discoveredAccounts:o,activeAccountsFound:t,setSelectedAccounts:r,pushSubStep:c}=I(),s=(0,k.useMemo)(()=>{let g;if(t){let n=o.filter(w=>w.status==="undiscovered"||w.isSelectedByDefault);g=e(n.length===1?"connectHardwareFoundAccountsWithActivitySingular":"connectHardwareFoundAccountsWithActivity",{numOfAccounts:n.length})}else g=e("connectHardwareFoundSomeAccounts");return g},[t,e,o]),C=(0,k.useCallback)(()=>{c(k.default.createElement(ht,{activeAccounts:o}))},[c,o]),y=(0,k.useCallback)(()=>{c(k.default.createElement(xe,{preventBack:!0}))},[c]);return(0,k.useEffect)(()=>{let g=o.reduce((n,w,u)=>((w.status==="discovered"&&w.isSelectedByDefault||u===0)&&(n[w.discoveryIdentifier]=!0),n),{});r(g)},[o,r,t,e]),k.default.createElement(E,null,k.default.createElement(Gt,null,k.default.createElement(K,{icon:k.default.createElement(P,{type:"success"}),primaryText:e("connectHardwareConnectAccounts"),headerStyle:"large",secondaryText:s})),k.default.createElement(_t,{onClick:C,theme:"default"},e("connectHardwareSelectAccounts")),k.default.createElement(B,{onClick:y,theme:"primary"},e("commandContinue")))},Gt=i(Y)`
  margin-bottom: 35px;
`,_t=i(B)`
  margin-bottom: 10px;
`;var jt=19,zt=e=>{let o=new Set;for(let t of e)for(let{address:r}of t.addresses)o.add(r);return o},le=()=>{let{chainImportStep:e,setIncrementChainImportStep:o,selectedChains:t,selectedChainsMap:r,pushStep:c,pushSubStep:s,setDiscoveredAccounts:C,setDerivedAccountGroups:y}=I(),g=(0,a.useRef)(I.getState().derivedAccountGroups),{t:n,i18n:w}=v(),u=e-1,f=t[u],{data:b=[],isFetched:D,isError:T}=I(p=>p.existingAccounts),[W,L]=(0,a.useState)(!1),m=(0,a.useMemo)(()=>{let p=[],l=r.get(f)||{};for(let[G,X]of Object.entries(l))X&&p.push(G);return[p[0]]},[f,r]),{chainNameTextOr:q,chainNameTextAnd:ee}=(0,a.useMemo)(()=>{let p=m.map(X=>M.getChainName(ye.get(X).ledgerAppOverride??X)),l=new Intl.ListFormat(w.resolvedLanguage,{style:"long",type:"disjunction"}),G=new Intl.ListFormat(w.resolvedLanguage,{style:"long",type:"conjunction"});return{chainNameTextOr:l.format(p),chainNameTextAnd:G.format(p)}},[m,w]),te=(0,a.useMemo)(()=>m.map(p=>{let l=ye.get(p).ledgerAppOverride??p;return a.default.createElement(ae,{key:M.getMainnetNetworkID(ye.get(l).ledgerAppOverride??l),networkID:l,size:72,borderColor:"bgWallet"})}),[m]);(0,a.useEffect)(()=>{let p=I.subscribe(l=>g.current=l.derivedAccountGroups);return()=>p()},[]);let $=(0,a.useMemo)(()=>{let p=[];switch(f){case"solana":{p.push({pathType:"bip44Root"});break}case"eip155":{p.push({pathType:"bip44RootEthereum"});break}case"bip122_p2tr":case"bip122_p2wpkh":case"bip122_p2sh":case"bip122_p2pkh":case"bip44_ed25519":break}for(let l=0;l<jt;++l)switch(f){case"solana":{p.push({index:l,pathType:"bip44Change"}),p.push({index:l,pathType:"bip44"});break}case"eip155":{p.push({index:l,pathType:"bip44Ethereum"}),p.push({index:l,pathType:"bip44EthereumSecondary"});break}case"bip122_p2tr":case"bip122_p2wpkh":case"bip122_p2sh":case"bip122_p2pkh":{p.push({index:l,pathType:"bitcoinTaproot"},{index:l,pathType:"bitcoinNativeSegwit"});break}case"bip44_ed25519":throw new Xe("connect hardware")}return p},[f]),[se,ie]=(0,a.useState)(!0),{data:oe=et}=dt(se,!0),{data:[He]}=je(["kill-ledger-xpub-derivation"]),{data:Z,error:Be,fetchStatus:At,refetch:Ne}=it(oe,$,!0,!He),St=At==="fetching",Ie=!oe.isConnected&&oe.status!=="reconnecting",[Ct,wt]=(0,a.useState)(!1),{data:he,refetch:Le}=be(Ct,!0);(0,a.useEffect)(()=>{Ie&&ie(!1)},[Ie]),(0,a.useEffect)(()=>{he?.type==="granted"&&(ie(!0),wt(!1))},[he]);let Ee=Re(),Me=(0,a.useCallback)(async()=>{if(Z&&Object.keys(Z).length){let p=[...g.current],l=0;for(let G of Object.values(Z)){let de={accounts:{...(p[l]??{accounts:{}}).accounts},derivationIndex:$[l].index},fe=M.getChainIDs(G.addressType).filter(ge=>Ee.includes(ge));for(let ge of fe){let pe=M.getNetworkIDs(ge);for(let re of pe)m.includes(re)&&(de.accounts[`${re}-${G.address}`]={chainType:G.addressType,chainId:re,address:G.address,publicKey:G.publicKey,pathParams:$[l]})}p[l]=de,l++}if(y(p),D&&t.length===e){L(!0);let G=zt(b),X=p.reduce((d,O)=>{let ue=!1;for(let{address:We}of Object.values(O.accounts))ue=ue||G.has(We);return ue||d.push(O),d},[]),de=[],fe=[];for(let d=0;d<X.length;d+=De.extension){let O=X.slice(d,d+De.extension).map(ue=>Object.entries(ue.accounts).reduce((Ge,[Tt,vt])=>(Ge[Tt]={account:vt},Ge),{}));fe.push(O)}for(let d of fe)de.push(Je(d));let pe=(await Promise.all(de)).flat().map(d=>{switch(d.status){case"discovered":return{...d,accounts:d.accounts.filter(O=>O.hasAccountActivity||Ae(O.derivationPathType))};case"undiscovered":return{...d,accounts:d.accounts.filter(O=>Ae(O.derivationPathType))}}}).filter(d=>d.accounts.length>0).map(d=>{let O=_e();return{...d,discoveryIdentifier:O}}),re=pe.filter(d=>d.status==="undiscovered"||d.isSelectedByDefault),yt=pe.filter(d=>!(d.status==="undiscovered"||d.isSelectedByDefault)).slice(0,2),Fe=re.length>0,bt=b.filter(d=>d.type==="ledger").length,xt=(Fe?[...re,...yt]:pe.filter(d=>!d.accounts.some(O=>!Ae(O.derivationPathType))).slice(0,3)).map((d,O)=>({...d,accountIndex:bt+O}));C(xt,Fe),c(a.default.createElement(ft,{preventBack:!0}))}}},[Z,y,D,t.length,e,$,Ee,m,b,C,c]);(0,a.useEffect)(()=>{Z&&Object.keys(Z).length===$.length&&(Me(),t.length!==e&&(o(),s(a.default.createElement(le,{preventBack:!0}))))},[Z,$,c,s,e,t,Me,o]);let j,z,U,J,ne=()=>{};return T?(j=a.default.createElement(P,{type:"failure"}),z=n("connectHardwareErrorLedgerGeneric"),U=n("connectHardwareErrorLedgerPhantomLocked"),ne=async()=>{let p=await nt();p.id!==void 0&&rt(p.id)},J=n("commandClose")):he&&he.type!=="granted"?(j=a.default.createElement(P,{type:"warning"}),z=n("connectHardwarePermissionDeniedPrimary"),U=n("connectHardwarePermissionDeniedSecondary"),J=n("homeErrorButtonText"),ne=Le):Ie?(j=a.default.createElement(P,{type:"warning"}),z=n("connectHardwarePermissionUnableToConnect"),U=n("connectHardwarePermissionUnableToConnectDescription"),J=n("commandConnect"),ne=Le):Be instanceof tt?(j=a.default.createElement(P,{type:"failure"}),z=n("connectHardwareErrorLedgerLocked"),U=n("connectHardwareErrorLedgerLockedDescription"),J=n("homeErrorButtonText"),ne=Ne):Be?(j=a.default.createElement(P,{type:"failure"}),z=n("connectHardwareErrorLedgerGeneric"),U=n("connectHardwareErrorLedgerGenericDescription"),J=n("homeErrorButtonText"),ne=Ne):oe.status=="reconnecting"?(j=a.default.createElement(P,{defaultIcon:a.default.createElement(ce,null),type:"default"}),z=n("connectHardwareConnecting"),U=n("connectHardwareConnectingDescription")):W?(j=a.default.createElement(P,{defaultIcon:a.default.createElement(ce,null),type:"default"}),z=n("connectHardwareDiscoveringAccounts"),U=n("connectHardwareDiscoveringAccountsDescription")):St?(j=a.default.createElement(P,{defaultIcon:a.default.createElement(ce,null),type:"default"}),z=n("connectHardwareConnectingAccounts"),U=n("connectHardwareFindingAccountsWithActivity",{chainName:ee})):(j=a.default.createElement(Vt,null,te),z=n("connectHardwareMobileOpenAppSingleChain",{chainName:q}),U=n("connectHardwareOpenAppDescription")),a.default.createElement(E,null,a.default.createElement(Y,null,a.default.createElement(K,{icon:j,primaryText:z,headerStyle:"large",secondaryText:U})),J?a.default.createElement(B,{onClick:ne,theme:"primary"},J):a.default.createElement(Ut,null,a.default.createElement(_,{color:"#999999",size:14},n("connectHardwareAccountsStepOfSteps",{stepNum:e,totalSteps:t.length}))))},Ut=i.div`
  align-self: center;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 80px;
  padding: 8px 16px;
  max-width: 150px;
`,Vt=i.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: -12.5px;
  }
`;A();S();var x=Q(R());var gt=()=>{let{t:e}=v(),{pushSubStep:o,selectedChains:t,setSelectedChains:r,selectedChainsMap:c}=I(),s=we(),C=Ce(),y=(0,x.useCallback)(u=>{let f=new Map(c),b=M.getAddressTypes(u);for(let T of b){let W=c.get(T),L=W?.[u];f.set(T,{...W,[u]:!L})}let D=C.filter(T=>{let W=f.get(T)||{};return Object.values(W).reduce((m,q)=>q?++m:m,0)>0});r(D,f)},[C,r,c]),g=()=>{o(x.default.createElement(le,{preventBack:!0}))};at(()=>{let u=new Map;for(let f of C)u.set(f,{});for(let f of s){let b=M.getAddressTypes(f);for(let D of b){let T=u.get(D);u.set(D,{...T,[f]:!1})}}r(t,u)},C.length>0&&s.length>0);let n=(0,x.useMemo)(()=>s.map(u=>{let f=M.getAddressTypes(u),b=!1;for(let D of f)b=c.get(D)?.[u]||b;return x.default.createElement(qt,{key:u,icon:x.default.createElement(ae,{networkID:u,size:40}),networkID:u,onPressChain:y,isChecked:b})}),[s,c,y]),w=(0,x.useMemo)(()=>{let u=0;for(let f of c.values())u+=Object.values(f).reduce((b,D)=>D?++b:b,0);return u===0},[c]);return x.default.createElement(E,null,x.default.createElement(_,{weight:500,size:28,lineHeight:34},e("connectHardwareSelectChains")),x.default.createElement(Yt,null,n),x.default.createElement(B,{onClick:g,theme:"primary",disabled:w},e("commandContinue")))},qt=({networkID:e,icon:o,onPressChain:t,isChecked:r})=>x.default.createElement($t,{onClick:()=>{t(e)}},x.default.createElement(Xt,null,x.default.createElement(Kt,null,o),x.default.createElement(_,{size:16,weight:600},M.getNetworkName(e))),x.default.createElement(me,{checked:r})),$t=i.div`
  align-items: center;
  background-color: #2a2a2a;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 16px 24px 16px 12px;

  :last-child {
    margin-bottom: 28px;
  }

  > span {
    margin-right: 0px;
  }
`,Kt=i.div`
  margin-right: 12px;
`,Yt=i.div`
  margin-top: 20px;
`,Xt=i.div`
  display: flex;
  align-items: center;
`;var Zt=()=>{ze();let{t:e}=v(),{pushStep:o,setSelectedChains:t}=I(),r=we(),c=Ce(),{data:s,isFetching:C,refetch:y}=be(!0,!0),{buttonDisabled:g,defaultIcon:n,primaryText:w,secondaryText:u,buttonText:f,iconType:b,onClick:D}=(0,H.useMemo)(()=>{let T=!1,W=H.default.createElement(ce,null),L,m,q,ee="default",te=qe;if(C)L=e("connectHardwareSearching"),m=e("connectHardwareMakeSureConnected"),q=e("commandContinue"),T=!0;else if(s?.type==="granted"){let $=s.transport.deviceModel?.productName??"Ledger";ee="success",L=e("connectHardwarePairSuccessPrimary",{productName:$}),m=e("connectHardwarePairSuccessSecondary",{productName:$}),q=e("commandContinue"),T=!1,te=()=>{if(c.length===1){let se=new Map;se.set(c[0],{});for(let ie of r){let oe=M.getAddressTypes(ie);for(let He of oe)se.set(He,{[ie]:!0})}t(c,se),o(H.default.createElement(le,{preventBack:!0}))}else o(H.default.createElement(gt,{onBackCallback:()=>{t([],new Map)}}))}}else s?.type==="denied"?(ee="failure",L=e("connectHardwarePermissionDeniedPrimary"),m=e("connectHardwarePermissionDeniedSecondary"),q=e("commandTryAgain"),T=!1,te=y):(!s||s.type==="unable-to-connect")&&(ee="failure",L=e("connectHardwarePermissionUnableToConnect"),m=e("connectHardwareWaitingForApplicationSecondaryText"),q=e("commandTryAgain"),T=!1,te=y);return{buttonDisabled:T,defaultIcon:W,primaryText:L,secondaryText:m,buttonText:q,iconType:ee,onClick:te}},[r,c,s,o,y,C,t,e]);return H.default.createElement(E,null,H.default.createElement(Y,null,H.default.createElement(K,{icon:H.default.createElement(P,{defaultIcon:n,type:b}),primaryText:w,headerStyle:"large",secondaryText:u})),H.default.createElement(B,{onClick:D,theme:"primary",disabled:g},f))},gr=()=>{let{t:e}=v(),{pushSubStep:o}=I(),t=()=>o(H.default.createElement(Zt,null));return H.default.createElement(E,null,H.default.createElement(Y,null,H.default.createElement(K,{icon:H.default.createElement(ct,null),primaryText:e("connectHardwareLedger"),headerStyle:"large",secondaryText:e("connectHardwareStartConnection"),animateText:!0})),H.default.createElement(B,{onClick:t,theme:"primary"},e("commandConnect")))};export{I as a,pt as b,ho as c,fo as d,mt as e,Wo as f,gr as g};
//# sourceMappingURL=chunk-GOKFGGQI.js.map
