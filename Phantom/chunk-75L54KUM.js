import{z}from"./chunk-HPOS2V3B.js";import{c as U}from"./chunk-XYJX6G2K.js";import{a as N,b as W}from"./chunk-OKP6DFCI.js";import{Z as k,ja as O,la as H,o as g,rb as R}from"./chunk-WIQ4WVKX.js";import{d as E}from"./chunk-MNXYIK2W.js";import{a as me}from"./chunk-WFPABEAU.js";import{Oc as M,_d as F}from"./chunk-MZZEJ42N.js";import{d as T,ma as v}from"./chunk-ALUTR72U.js";import{a as h}from"./chunk-7X4NV6OJ.js";import{f as c,h as r,n as a}from"./chunk-3KENBVE7.js";r();a();var B=c(h());r();a();var $=c(h());function G(){var e=(0,$.useRef)(!0);return e.current?(e.current=!1,!0):e.current}var ce=function(e,t){return e===t};function C(e,t){t===void 0&&(t=ce);var o=(0,B.useRef)(),s=(0,B.useRef)(e),d=G();return!d&&!t(s.current,e)&&(o.current=s.current,s.current=e),o.current}r();a();r();a();var K=function(){};function j(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function q(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var V=typeof self<"u";r();a();var w=c(h());var xe=["mousedown","touchstart"],he=function(e,t,o){o===void 0&&(o=xe);var s=(0,w.useRef)(t);(0,w.useEffect)(function(){s.current=t},[t]),(0,w.useEffect)(function(){for(var d=function(u){var m=e.current;m&&!m.contains(u.target)&&s.current(u)},f=0,l=o;f<l.length;f++){var p=l[f];j(document,p,d)}return function(){for(var u=0,m=o;u<m.length;u++){var L=m[u];q(document,L,d)}}},[o,e])},ge=he;r();a();var y=c(h());var ve=V?y.useLayoutEffect:y.useEffect,J=ve;r();a();var Q=c(h()),we=function(e){(0,Q.useEffect)(e,[])},X=we;r();a();var S=c(h()),Se=function(e,t){var o=(0,S.useRef)(function(){});(0,S.useEffect)(function(){o.current=e}),(0,S.useEffect)(function(){if(t!==null){var s=setInterval(function(){return o.current()},t||0);return function(){return clearInterval(s)}}},[t])},De=Se;r();a();var Z=c(h());var Ce=function(e){var t=(0,Z.useRef)(e);t.current=e,X(function(){return function(){return t.current()}})},Ve=Ce;r();a();var P=c(h());function Y(e){var t=(0,P.useRef)();return(0,P.useEffect)(function(){t.current=e}),t.current}r();a();var D=c(h());var _={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function ye(){var e=(0,D.useState)(null),t=e[0],o=e[1],s=(0,D.useState)(_),d=s[0],f=s[1],l=(0,D.useMemo)(function(){return new self.ResizeObserver(function(p){if(p[0]){var u=p[0].contentRect,m=u.x,L=u.y,ne=u.width,ie=u.height,fe=u.top,le=u.left,de=u.bottom,pe=u.right;f({x:m,y:L,width:ne,height:ie,top:fe,left:le,bottom:de,right:pe})}})},[]);return J(function(){if(t)return l.observe(t),function(){l.disconnect()}},[t]),[o,d]}var Pe=V&&typeof self.ResizeObserver<"u"?ye:function(){return[K,_]};r();a();var ee=c(me()),n=c(h());var te=(0,n.createContext)({pushDetailViewCallback:()=>v,pushDetailView:v,popDetailView:v,resetDetailView:v,detailViewStackLength:0}),be=g(N.div)`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-height: ${e=>e.theme?.detailViewMaxHeight??"100%"};
  min-height: ${e=>e.theme?.detailViewMinHeight??"initial"};
`,At=n.default.memo(({children:e,shouldResetOnAccountChange:t,shouldPushDetailView:o})=>{let{detailViewStack:s,setDetailViewStack:d,pushDetailView:f,...l}=Me(),{data:p}=F();return(0,n.useEffect)(()=>{t&&d([])},[p,d,t]),(0,n.useEffect)(()=>{o&&f(e)},[e,o,f]),n.default.createElement(te.Provider,{value:{...l,pushDetailView:f,detailViewStackLength:s.length}},n.default.createElement(ke,{stack:s},e))}),Le=navigator.webdriver?0:500,Me=()=>{let[e,t]=(0,n.useState)([]),o=(0,n.useMemo)(()=>(0,ee.default)(l=>{t(p=>M(p,u=>{u.push(l)}))},Le,{leading:!0,trailing:!1}),[t]),s=(0,n.useCallback)(()=>{t(l=>M(l,p=>{p.pop()}))},[t]),d=(0,n.useCallback)(l=>()=>{o(l)},[o]),f=(0,n.useCallback)(()=>()=>{t([])},[t]);return(0,n.useMemo)(()=>({detailViewStack:e,setDetailViewStack:t,pushDetailView:o,popDetailView:s,resetDetailView:f,pushDetailViewCallback:d}),[e,s,o,f,d])},Ee=.15,ke=({children:e,stack:t})=>{let o=C(t,(u,m)=>u?.length===m.length),s=T(t),d=t.length>(o??[]).length,f=o===void 0,l=f?0:d?10:-10,p=f?1:0;return n.default.createElement(W,{mode:"wait"},n.default.createElement(be,{key:`${t.length}_${o?.length}`,initial:{x:l,opacity:p},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:Ee},ref:He},s||e))},A=()=>{let e=(0,n.useContext)(te);if(!e)throw new Error("Missing detail view context");return e},He=e=>{e&&e.parentElement&&(e.parentElement.scrollTop=0)};r();a();var b=c(h()),Re=(0,b.createContext)({isOpen:!1,showSettingsMenu:v,hideSettingsMenu:v}),oe=()=>(0,b.useContext)(Re);r();a();var i=c(h());var re=g.section`
  z-index: 1;
  background-color: #222222;
  padding: 10px 16px;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  justify-content: ${e=>e.justifyContent};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #323232;
  height: ${e=>e.height}px;
  width: 100%;
`;re.defaultProps={justifyContent:"center",height:E};var ae=g(R).attrs({size:16,weight:500,lineHeight:25})``;ae.defaultProps={maxWidth:"280px",noWrap:!0};var Be=g.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding-bottom: 17px;
  position: relative;
  width: 100%;
`,se=g(z)`
  position: absolute;
  right: 0;
`,I=g(U)`
  position: absolute;
  left: 0;
`,Xt=({children:e,items:t,sections:o,icon:s,shouldWrap:d,onIconClick:f,onLeftButtonClick:l,useCloseButton:p})=>{let u=Ie({withCloseButton:p??!1,onLeftButtonClick:l}),m=o&&o.length>0||t&&t.length>0;return i.default.createElement(Be,null,u,i.default.createElement(R,{weight:500,size:22,noWrap:!d,maxWidth:"280px"},e),m||f?i.default.createElement(se,{sections:o,items:t,icon:s||i.default.createElement(O,null),onIconClick:f}):i.default.createElement("div",null))},ue=g(re)`
  position: relative;
  border-bottom: none;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -20px;
    width: calc(100% + 40px);
    border-bottom: 1px solid #323232;
  }
`,Ae=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`,Zt=({children:e,sections:t,items:o,icon:s,shouldWrap:d,onIconClick:f,onLeftButtonClick:l,disableIconBackground:p})=>{let u=Te(l),m=t&&t.length>0||o&&o.length>0;return i.default.createElement(ue,null,u,i.default.createElement(Ae,null,typeof e=="string"?i.default.createElement(ae,{noWrap:!d},e):e),m||f?i.default.createElement(se,{sections:t,items:o,icon:s,onIconClick:f,disableIconBackground:p}):i.default.createElement("div",null))};ue.defaultProps={justifyContent:"center",height:E};var Ie=({withCloseButton:e,onLeftButtonClick:t})=>{let{popDetailView:o,detailViewStackLength:s}=A();return(0,i.useMemo)(()=>s===0?i.default.createElement("div",null):i.default.createElement(I,{onClick:()=>{t?.(),o()},"data-testid":"header--back"},e?i.default.createElement(k,null):i.default.createElement(H,null)),[e])},Te=e=>{let{hideSettingsMenu:t}=oe(),{popDetailView:o,detailViewStackLength:s}=A();return(0,i.useMemo)(()=>s>0?i.default.createElement(I,{onClick:()=>{o()},"data-testid":"header--back"},i.default.createElement(H,null)):i.default.createElement(I,{"data-testid":"settings-menu-close-button",onClick:e??t},i.default.createElement(k,null)),[])};export{ge as a,De as b,Ve as c,Y as d,C as e,Pe as f,At as g,A as h,Re as i,oe as j,re as k,ae as l,Xt as m,Zt as n};
//# sourceMappingURL=chunk-75L54KUM.js.map
