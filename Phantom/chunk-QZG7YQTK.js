import{k as s,o as a}from"./chunk-WIQ4WVKX.js";import{a as A}from"./chunk-7X4NV6OJ.js";import{f as g,h as p,n as c}from"./chunk-3KENBVE7.js";p();c();var e=g(A());var f=5,m=5,i=2,D=m+2*i,h=14,$=h+2*i,u=m+2*i,b=a.div`
  display: flex;
  justify-content: ${t=>t.shouldCenter?"center":"flex-start"};
  align-items: center;
  position: relative;
  overflow: hidden;
  width: ${t=>(t.maxVisible-1)*D+$}px;
`,x=a.div`
  align-items: center;
  display: flex;
  ${t=>t.shouldShift&&s`
      transform: translateX(calc(-${u}px * ${t.shiftAmount}));
      transition: transform 0.3s ease-in-out;
    `}
`,_=a.div`
  align-items: center;
  background-color: #999999;
  border-radius: 95px;
  display: flex;
  height: ${f}px;
  justify-content: center;
  margin: 0 ${i}px;
  min-width: ${m}px;
  transition: all 0.3s ease-in-out;
  ${t=>t.isActive&&s`
      min-width: ${h}px;
    `}
  ${t=>t.isSmall&&s`
      min-width: 3px;
      margin: 0 ${i}px;
      height: 3px;
    `}
`,v=a.div`
  width: ${h}px;
  height: ${f}px;
  border-radius: 95px;
  position: absolute;
  margin: 0 ${i}px;
  background-color: #ab9ff2;
  transition: transform 0.3s ease-in-out;
  ${t=>t.position&&s`
      transform: translateX(${t.position*u}px);
    `}
`,O=({numOfItems:t,currentIndex:o,maxVisible:n=5})=>{let l=t>n?o>n-3:!1,d=l?o-(n-3):0;return e.default.createElement(b,{shouldCenter:n>t,maxVisible:n},e.default.createElement(x,{shouldShift:l,shiftAmount:d},Array.from({length:t}).map((P,r)=>{let T=(r===o-2||r===o+2)&&l;return e.default.createElement(_,{key:`pagination-dot-${r}`,isActive:o===r,isSmall:T})}),e.default.createElement(v,{position:o})))},C=O;export{O as a,C as b};
//# sourceMappingURL=chunk-QZG7YQTK.js.map
