import{j as b}from"./chunk-OKP6DFCI.js";import{B as m,G as h,o as t,oa as C,rb as c}from"./chunk-WIQ4WVKX.js";import{a as p}from"./chunk-56SJOU6P.js";import{a as l}from"./chunk-7X4NV6OJ.js";import{f as u,h as i,n as e}from"./chunk-3KENBVE7.js";i();e();var r=u(l());var z=t.div`
  width: 94px;
  height: 94px;
  margin: auto;
  position: relative;
  border-radius: ${n=>n.borderRadius};
  background: ${n=>n.background};
`,O=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,B=t.div`
  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
  animation: rotate 0.5s linear infinite;
  position: absolute;
  margin: 0 auto;
  width: 94px;
  height: 94px;
  border-radius: 100%;
  box-shadow: 0 0 0 7px rgba(255, 233, 32, 0.1);
  & > svg {
    position: absolute;
    bottom: -8px;
    right: -9px;
  }
`,I=({children:n,color:a="#FFE920"})=>r.createElement(z,null,r.createElement(B,null,r.createElement("svg",{width:38,height:60,viewBox:"0 0 38 60",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M31.897 5.75301C33.5532 5.70601 34.9339 7.01051 34.9809 8.6667C35.2548 18.3187 32.5493 27.8208 27.2322 35.8808C21.9151 43.9408 14.2446 50.1676 5.26377 53.7144C3.72274 54.323 1.98013 53.5671 1.37153 52.0261C0.762941 50.485 1.51883 48.7424 3.05986 48.1338C10.8942 45.0398 17.5855 39.6079 22.2238 32.5769C26.8621 25.5458 29.2223 17.2567 28.9833 8.8369C28.9363 7.18071 30.2408 5.80001 31.897 5.75301Z",fill:a}))),n&&r.createElement(O,null,n));i();e();var o=u(l());var K=({icon:n,title:a,onClose:w,iconSize:S="normal",showButton:d=!0,buttonText:v=p.t("commandClose"),children:k,onIgnore:T,ignoreText:g})=>{let s=S==="large"?44:32;return o.default.createElement(P,null,o.default.createElement("section",null,n==="loading"?o.default.createElement(I,null,o.default.createElement(C,{width:s})):n==="error"?o.default.createElement(F,{iconSize:s}):o.default.createElement(L,{iconSize:s}),o.default.createElement($,null,a),k),g!==void 0&&o.default.createElement(j,{onClick:T},g),o.default.createElement(M,{hasMarginBottom:!d},d?o.default.createElement(b,{onClick:w},v):o.default.createElement(o.default.Fragment,null,"\xA0")))},F=({iconSize:n})=>o.default.createElement(f,{borderRadius:"100%",background:"rgba(235, 55, 66, 0.1)"},o.default.createElement(x,null,o.default.createElement(m,{width:n}))),L=({iconSize:n})=>o.default.createElement(f,{borderRadius:"100%",background:"rgba(33, 229, 111, 0.1)"},o.default.createElement(x,null,o.default.createElement(h,{width:n,fill:"#21E56F"}))),P=t.section`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
  & > section:first-child {
    display: grid;
    gap: 8.5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`,$=t(c).attrs({size:28,lineHeight:33.89,weight:500})`
  word-wrap: break-word;
  overflow: hidden;
  margin-top: 15px;
`,f=t.div`
  width: 94px;
  height: 94px;
  margin: auto;
  position: relative;
  border-radius: ${n=>n.borderRadius};
  background: ${n=>n.background};
`,x=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,M=t.div`
  margin-bottom: ${n=>n.hasMarginBottom&&"60px"};
  width: 100%;
`,j=t(c)`
  margin: auto;
  font-size: 14px;
  padding-bottom: 35px;
  color: gray;
  font-weight: 500;
  &:hover {
    color: #eb3742;
  }
`;export{I as a,K as b};
//# sourceMappingURL=chunk-PTZMRZUV.js.map
