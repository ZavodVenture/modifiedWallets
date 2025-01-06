import{c as p}from"./chunk-SHAEZV7V.js";import{H as d,n as s,o as t,rb as a,wa as x}from"./chunk-WIQ4WVKX.js";import{a as C}from"./chunk-7X4NV6OJ.js";import{f as L,h as c,n as l}from"./chunk-3KENBVE7.js";c();l();var e=L(C());var P=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,_=s`
  0% {
    top: 15px;
    opacity: 0;
  };
  100% {
    top: 0px;
    opacity: 1;
  };
`,k=t.div`
  animation-name: ${o=>o.animateText?_:"none"};
  animation-duration: ${o=>o.animateText?".5s":"0s"};
  position: relative;
`,T=t(a)`
  margin: ${o=>o.margin};
`;T.defaultProps={margin:"20px auto 0 auto"};var H=t(a)`
  margin: ${o=>o.margin};
`;H.defaultProps={margin:"15px 0px 0px 0px"};var N=t.div`
  position: relative;
  left: 38px;
  bottom: 22px;
`;var O={large:30,medium:28,small:24},R={large:34,medium:34,small:29},b={large:18,medium:16,small:14},v=({className:o,icon:I,primaryText:r,secondaryText:i,headerStyle:n,showWarning:g=!1,showError:y=!1,animateText:S=!1})=>{n=n??"medium";let u=O[n],f=R[n],M=b[n],E={large:22,medium:19,small:17}[n],m=n==="small"?"16px 0 0 0":void 0;return e.default.createElement(P,{className:o},I??e.default.createElement(d,null),g?e.default.createElement(N,null,e.default.createElement(x,null)):e.default.createElement(e.default.Fragment,null),e.default.createElement(k,{animateText:S},r&&e.default.createElement(T,{margin:m,weight:500,size:u,lineHeight:f,maxWidth:"320px"},r),i&&e.default.createElement(H,{margin:m,wordBreak:"break-word",size:M,lineHeight:E,color:y?p:"#777777"},i)))};v.defaultProps={headerStyle:"medium"};export{v as a};
//# sourceMappingURL=chunk-XJWRT6N6.js.map
