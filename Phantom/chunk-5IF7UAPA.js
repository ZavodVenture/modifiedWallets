import{b as C}from"./chunk-QZG7YQTK.js";import{c as d}from"./chunk-XYJX6G2K.js";import{la as h,ma as c,o as i}from"./chunk-WIQ4WVKX.js";import{a as k}from"./chunk-7X4NV6OJ.js";import{f as p,h as u,n as g}from"./chunk-3KENBVE7.js";u();g();var t=p(k());var y=i.div`
  height: 0;
  transition: height 0.2s ease-in-out;
  width: 100%;
  ${n=>n.animate?`height: ${n.shouldCollapse?n.itemHeight+26:n.itemHeight+46}px`:""}
`,A=i.div`
  transition: transform 0.5s ease;
  width: 100%;
`,b=i(d)``,x=i.div`
  visibility: ${n=>n.isVisible?"visible":"hidden"};
`,H=i.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`,B=i.ul`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  transition: transform 0.5s ease;
  transform: ${n=>`translateX(${n.currentIndex*-100}%)`};
`,$=i.li`
  align-items: center;
  display: flex;
  flex: 0 0 100%;
  padding: ${n=>n.isActive?"0":n.isNext||n.isPrevious?"0 6px":"0"};
  height: ${n=>n.isActive?n.itemHeight:.9*n.itemHeight}px; /* 0.9 is taken from parallaxAdjacentItemScale from the carousel on mobile */
`,j=({items:n,onIndexChange:s,itemHeight:l})=>{let[e,a]=(0,t.useState)(0),f=(0,t.useCallback)(()=>{a(o=>o+1)},[]),I=(0,t.useCallback)(()=>{a(o=>o-1)},[]),v=e<n.length-1,P=e>0;(0,t.useEffect)(()=>{!n.length||e>n.length-1||s(e)},[n,s,e]),(0,t.useEffect)(()=>{n.length>0&&e>=n.length&&a(n.length-1)},[e,n]);let m=n.length<=1;return t.default.createElement(y,{animate:n.length>0,shouldCollapse:m,itemHeight:l},t.default.createElement(A,null,t.default.createElement(B,{currentIndex:e},n.map((o,r)=>t.default.createElement($,{key:o.key,isActive:e===r,isNext:e+1===r,isPrevious:e-1===r,itemHeight:l},o.node))),!m&&t.default.createElement(H,null,t.default.createElement(x,{isVisible:P},t.default.createElement(b,{onClick:I},t.default.createElement(h,null))),t.default.createElement(C,{numOfItems:n.length,currentIndex:e,maxVisible:5}),t.default.createElement(x,{isVisible:v},t.default.createElement(b,{onClick:f},t.default.createElement(c,null))))))};export{j as a};
//# sourceMappingURL=chunk-5IF7UAPA.js.map
