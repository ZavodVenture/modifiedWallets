import{a as y}from"./chunk-ROF5SDVA.js";import{c as h,p as B,q as w}from"./chunk-2NGYUYTC.js";import{o as t,qb as T,rb as k}from"./chunk-WIQ4WVKX.js";import{Ad as u,Eb as f,Pa as x}from"./chunk-MZZEJ42N.js";import{S as g}from"./chunk-ALUTR72U.js";import{a as s}from"./chunk-7X4NV6OJ.js";import{f as d,h as r,n}from"./chunk-3KENBVE7.js";r();n();var m=d(s()),I=m.default.memo(({networkID:e,backgroundColor:i="white",...o})=>{let c=`Network${x.getChainName(e)}`;return c in h?m.default.createElement(w,{...o,icon:c,shape:"square",backgroundColor:i}):null});r();n();r();n();var D=t.div`
  flex: 1;
  overflow: auto;
  padding: 20px 0;
`,M=t(D)`
  padding-top: 0;
  padding-bottom: 0;
`,Q=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: ${e=>e.size==="medium"?"20px":"30px"} 0 0;
`,R=t.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  > svg {
    margin-bottom: 16px;
  }
  > p {
    margin-bottom: 16px;
  }
`,U=t(k).attrs({size:16,lineHeight:22,weight:500,color:"#AB9FF2"})``,P=t.section`
  width: 100%;
  flex: 1;
  > * {
    margin-bottom: 10px;
  }
`,V=t(y).attrs({color:"#181818",diameter:94,includeDarkBoxShadow:!0})``,X=t.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  ${P} {
    margin-top: 30px;
  }
`;r();n();var p=d(s());r();n();var l=d(s());var C=({text:e})=>l.default.createElement(W,null,l.default.createElement(v,null,e)),N=t.div`
  display: flex;
  align-items: center;
`,W=t.div`
  background: ${g("#FFFFFF",.1)};
  border-radius: 3px;
  padding: 0px 4px;
  color: white;
  display: inline-block;
  margin-left: 5px;
`,v=t(T).attrs({size:12,lineHeight:17,weight:600,noWrap:!0})``;var me=({children:e,networkID:i,walletAddress:o})=>p.default.createElement(N,null,e,o?p.default.createElement(z,{networkID:i,address:o}):null),z=({networkID:e,address:i})=>{let o=b({networkID:e,address:i});return o?p.default.createElement(C,{text:o}):null},le=({networkID:e,address:i})=>{let o=b({networkID:e,address:i});return o?p.default.createElement(B,{children:o,size:"small"}):null},b=({networkID:e,address:i})=>{let o=u();return f.get(e).badge?.(e,o,i)??null};export{I as a,D as b,M as c,Q as d,R as e,U as f,P as g,V as h,X as i,W as j,me as k,z as l,le as m};
//# sourceMappingURL=chunk-IWGMKDQE.js.map
