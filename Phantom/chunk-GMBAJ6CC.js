import{b as d}from"./chunk-PTZMRZUV.js";import{_ as c,o as a,rb as C}from"./chunk-WIQ4WVKX.js";import{t as w}from"./chunk-V5T43K7V.js";import{b as m,c as T}from"./chunk-MNXYIK2W.js";import{c as y}from"./chunk-MHOQBMVI.js";import{m as g}from"./chunk-56SJOU6P.js";import{A as p,ta as x}from"./chunk-L3A2KHJO.js";import{a as b}from"./chunk-7X4NV6OJ.js";import{f as k,h as t,n as e}from"./chunk-3KENBVE7.js";t();e();t();e();t();e();var B=k(b()),i=class extends B.default.Component{constructor(o){super(o),this.state={error:null}}static getDerivedStateFromError(o){return o instanceof Error?{error:o}:typeof o=="string"?{error:new Error(o)}:{error:new Error}}componentDidCatch(o,s){o instanceof Error&&x.captureError(o,"generic")}render(){return this.state.error?typeof this.props.fallback=="function"?this.props.fallback(this.state.error):this.props.fallback:this.props.children}};var r=k(b());var F="Unknown Error",S="Looks like you ran into an unknown error. Please close Phantom and try again.",A="Close",E=a(C).attrs({wordBreak:"break-word",color:"#777777",size:16,lineHeight:20.8,maxWidth:"400px"})``,h=a.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: #ab9ff2;
  text-decoration: none;
  cursor: pointer;
  svg {
    fill: #ab9ff2;
    margin-right: 5px;
  }
`,D=n=>r.default.createElement(i,{fallback:o=>o instanceof w?r.default.createElement(H,null):n.fallback},n.children),H=()=>{let{t:n}=g(),o=()=>{y.capture("walletScreenErrorBoundaryClosed"),self.close()};return r.default.createElement(N,null,r.default.createElement(d,{icon:"error",title:n("transactionsDisabledTitle"),buttonText:n("commandClose"),onClose:o},r.default.createElement(E,{margin:"0 0 5px 0"},n("transactionsDisabledMessage")),r.default.createElement(h,{href:p,onClick:o},r.default.createElement(c,null),"Help & Support")))},N=a.main`
  width: ${m}px;
  height: ${T}px;
  padding: 15px;
`,rr=({title:n=F,message:o=S,buttonText:s=A,onReset:l=()=>self.close(),children:u})=>{function f(){return r.default.createElement(_,null,r.default.createElement(d,{icon:"error",title:n,buttonText:s,onClose:l},r.default.createElement(E,{margin:"0 0 5px 0"},o),r.default.createElement(h,{href:p,onClick:l},r.default.createElement(c,null),"Help & Support")))}return r.default.createElement(D,{fallback:r.default.createElement(f,null)},u)},_=a.main`
  min-width: ${m}px;
  height: 100vh;
  padding: 15px;
  width: 100vw;
`,or=({title:n=F,message:o="Looks like you ran into an unknown error. Please refresh the page and try again.",buttonText:s="Refresh",onReset:l=()=>self.location.reload(),children:u})=>{function f(){return r.default.createElement(L,null,r.default.createElement(d,{icon:"error",title:n,buttonText:s,onClose:l},r.default.createElement(E,{margin:"0 0 5px 0"},o),r.default.createElement(h,{href:p,onClick:l},r.default.createElement(c,null),"Help & Support")))}return r.default.createElement(D,{fallback:r.default.createElement(f,null)},u)},L=a.main`
  width: 400px;
  height: 450px;
  background-color: #222222;
  border: 1px solid #323232;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  padding: 20px;
`;export{i as a,D as b,rr as c,or as d};
//# sourceMappingURL=chunk-GMBAJ6CC.js.map
