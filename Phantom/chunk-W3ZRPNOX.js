import{a as g}from"./chunk-QEXGR5WT.js";import{a as m,b as x,e as b}from"./chunk-P5LBFEHG.js";import{e as s}from"./chunk-2NGYUYTC.js";import{k as f,o as e,rb as u}from"./chunk-WIQ4WVKX.js";import{a as w}from"./chunk-7X4NV6OJ.js";import{f as k,h as n,n as i}from"./chunk-3KENBVE7.js";n();i();var t=k(w());var l=8,z=e.div`
  overflow: hidden;
  border-top-right-radius: ${o=>o.roundedTop?l:0}px;
  border-top-left-radius: ${o=>o.roundedTop?l:0}px;
  border-bottom-right-radius: ${o=>o.roundedBottom?l:0}px;
  border-bottom-left-radius: ${o=>o.roundedBottom?l:0}px;
`,v=e.div`
  display: flex;
  height: 49px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:last-of-type {
    margin-bottom: 0;
  }
  background-color: ${o=>o.customBackground??"#2a2a2a"};
  ${o=>o.onClick?f`
          :hover {
            background-color: #333333;
          }
          cursor: pointer;
        `:""}
`,y=e.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,B=e.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,$=e.div`
  display: flex;
  margin: 2px 4px 0 0;
`,L=e(u).attrs(o=>({color:o.color||"#777",size:14,lineHeight:17,weight:400,noWrap:!0,paddingLeft:8}))`
  cursor: ${o=>o.onClick?"pointer":"default"};
  text-decoration: none;
`,D=({children:o,icon:r,fontWeight:p,label:h,lineHeight:I,customBackground:T,color:C,tooltipContent:a,isLoading:d=!1,error:c,onClick:R})=>t.default.createElement(v,{customBackground:T,onClick:d?void 0:R},t.default.createElement(B,null,t.default.createElement(y,null,r?t.default.createElement($,null,r):null,t.default.createElement(b,{tooltipAlignment:"topLeft",iconSize:12,lineHeight:I??17,fontWeight:p??400,info:a?t.default.createElement(W,{tooltipContent:a}):null,textColor:C||"#FFF"},h)),c?t.default.createElement(s,{color:"accentAlert",font:"label",children:c}):null),d?t.default.createElement(g,{width:"75px",height:"15px",borderRadius:"50px",backgroundColor:"#434343"}):o),W=({tooltipContent:o})=>t.default.createElement(x,null,typeof o=="string"?t.default.createElement(m,null,o):o),j=({children:o,color:r,onClick:p})=>t.default.createElement(L,{onClick:p,color:r||"#777"},o||"-");n();i();var q=e.div`
  height: ${o=>o.gap??8}px;
`;export{z as a,D as b,W as c,j as d,q as e};
//# sourceMappingURL=chunk-W3ZRPNOX.js.map
