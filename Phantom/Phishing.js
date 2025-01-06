import{a as U}from"./chunk-4VDZJDFB.js";import{a as C}from"./chunk-26OZJBRY.js";import"./chunk-XJTFMD4C.js";import{b as I}from"./chunk-GMBAJ6CC.js";import"./chunk-PTZMRZUV.js";import{a as P}from"./chunk-VQVTLSDS.js";import"./chunk-OKP6DFCI.js";import{d as L,l as T,o as a,rb as l,s as v}from"./chunk-WIQ4WVKX.js";import{a as z,c as W}from"./chunk-AVT3M45V.js";import{h as k,k as x}from"./chunk-SD2LXVLD.js";import"./chunk-UCBZOSRF.js";import"./chunk-F3RUX6TF.js";import"./chunk-HRJWTAGT.js";import"./chunk-LURFXJDV.js";import"./chunk-V5T43K7V.js";import"./chunk-MNXYIK2W.js";import"./chunk-QALJXKGR.js";import{a as y}from"./chunk-MHOQBMVI.js";import{a as B}from"./chunk-GQEPK4C4.js";import"./chunk-BTKBODVJ.js";import"./chunk-7ZN4F6J4.js";import"./chunk-OUYKWOVO.js";import"./chunk-WFPABEAU.js";import"./chunk-THLBAMDB.js";import"./chunk-LDMZMUWY.js";import"./chunk-X2SBUKU4.js";import"./chunk-OXFZHPMY.js";import"./chunk-OYGO47TI.js";import"./chunk-SLQBAOEK.js";import"./chunk-MZZEJ42N.js";import"./chunk-E3NPIRHS.js";import{m as S}from"./chunk-56SJOU6P.js";import"./chunk-ALUTR72U.js";import"./chunk-N7UFQNLW.js";import{qa as O}from"./chunk-L3A2KHJO.js";import"./chunk-4P36KWOF.js";import{a as b}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as p,h as n,n as s}from"./chunk-3KENBVE7.js";n();s();var w=p(b());var E=p(z());n();s();var e=p(b());n();s();var r=p(b());var m="#ca3214",K=a.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fffdf8;
  padding: clamp(24px, 16vh, 256px) 24px;
  box-sizing: border-box;
`,$=a.div`
  margin-bottom: 24px;
  padding-bottom: 8vh;
`,A=a.div`
  max-width: 100ch;
  margin: auto;

  * {
    text-align: left;
  }
`,N=a.a`
  text-decoration: underline;
  color: ${m};
`,d=new y,D=({origin:i,subdomain:t})=>{let{t:g}=S(),c=i?x(i):"",J=i??"",f=new URL(J).hostname,u=t==="true"?f:c,M=async()=>{if(t==="true"){let h=await d.get("userWhitelistedSubdomains"),o=JSON.parse(`${h}`);o?o.push(f):o=[f],o=[...new Set(o)],d.set("userWhitelistedSubdomains",JSON.stringify(o))}else{let h=await d.get("userWhitelistedOrigins"),o=JSON.parse(`${h}`);o?o.push(c):o=[c],o=[...new Set(o)],d.set("userWhitelistedOrigins",JSON.stringify(o))}self.location.href=i};return r.default.createElement(K,null,r.default.createElement(A,null,r.default.createElement($,null,r.default.createElement(v,{width:128,fill:"#bbb9b6"})),r.default.createElement(l,{size:30,color:m,weight:"600"},g("blocklistOriginDomainIsBlocked",{domainName:u||g("blocklistOriginThisDomain")})),r.default.createElement(l,{color:m},g("blocklistOriginSiteIsMalicious")),r.default.createElement(l,{color:m},r.default.createElement(U,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated"},"This site has been flagged as part of a",r.default.createElement(N,{href:k,rel:"noopener",target:"_blank"},"community-maintained database"),"of known phishing websites and scams. If you believe the site has been flagged in error,",r.default.createElement(N,{href:k,rel:"noopener",target:"_blank"},"please file an issue"),".")),u?r.default.createElement(l,{color:m,onClick:M,hoverUnderline:!0},g("blocklistOriginIgnoreWarning",{domainName:i})):r.default.createElement(r.default.Fragment,null)))};var G=()=>{let i;try{i=new URLSearchParams(self.location.search).get("origin")||"",new URL(i)}catch{i=""}return i},H=()=>new URLSearchParams(self.location.search).get("subdomain")||"",_=()=>{let i=(0,e.useMemo)(G,[]),t=(0,e.useMemo)(H,[]);return e.default.createElement(L,{future:{v7_startTransition:!0}},e.default.createElement(I,null,e.default.createElement(D,{origin:i,subdomain:t})))};B();O.init({provider:C});W();var j=document.getElementById("root"),q=(0,E.createRoot)(j);q.render(w.default.createElement(T,{theme:P},w.default.createElement(_,null)));
//# sourceMappingURL=Phishing.js.map
