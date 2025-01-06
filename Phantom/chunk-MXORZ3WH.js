import{n as S}from"./chunk-75L54KUM.js";import{j as C}from"./chunk-OKP6DFCI.js";import{o,rb as p}from"./chunk-WIQ4WVKX.js";import{Db as f}from"./chunk-OUYKWOVO.js";import{m}from"./chunk-56SJOU6P.js";import{a as y}from"./chunk-7X4NV6OJ.js";import{f as h,h as l,n as g}from"./chunk-3KENBVE7.js";l();g();var t=h(y());var k=o.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${e=>e.settingsContainerHeight??"100%"};
`,v=o.div``,w=o.div`
  border-radius: 6px;
  overflow: hidden;
  padding-bottom: 32px;
`,H=o.div`
  display: flex;
  background-color: ${e=>e.selected?"#AB9FF2":"#2c2d30"};
  padding: 16px;
  align-items: center;
  cursor: pointer;

  & + & {
    border-top: 1px solid #222;
  }
`,b=o.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,A=({selected:e,title:n,description:s,onClick:r})=>t.default.createElement(H,{onClick:r,selected:e},t.default.createElement(b,null,t.default.createElement(p,{margin:"0 0 7px",lineHeight:16,textAlign:"left",weight:500,size:16,color:e?"#2c2d30":"#fff"},n),t.default.createElement(p,{textAlign:"left",weight:500,size:12,lineHeight:12,color:e?"#2c2d30":"#999"},s||t.default.createElement("span",null,"\xA0")))),F=({onSelectTransactionSpeed:e,selectedTransactionSpeed:n,networkID:s,transactionUnitAmount:r,closeModal:a,settingsContainerHeight:i})=>{let{t:d}=m(),{presets:u,transactionSpeed:c}=f(s,n,r),x=(0,t.useCallback)(()=>{e(c),a()},[a,c,e]),T=d("settingsTransactions"),P=d("commandSave");return{headerText:T,primaryText:P,onPress:x,presetViewStates:u,settingsContainerHeight:i}},$=e=>{let n=F(e);return t.default.createElement(U,{...n})},U=t.default.memo(({headerText:e,primaryText:n,onPress:s,settingsContainerHeight:r,presetViewStates:a})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(v,null,t.default.createElement(S,null,e)),t.default.createElement(k,{settingsContainerHeight:r},t.default.createElement(w,null,a.map((i,d)=>t.default.createElement(A,{key:d,onClick:i.onClick,title:i.title,description:i.description,selected:i.selected}))),t.default.createElement(C,{theme:"primary",onClick:s},n))));export{$ as a};
//# sourceMappingURL=chunk-MXORZ3WH.js.map
