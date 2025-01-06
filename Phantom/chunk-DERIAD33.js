import{h as x}from"./chunk-OKP6DFCI.js";import{Ca as b,N as h,o as n}from"./chunk-WIQ4WVKX.js";import{a as M}from"./chunk-7X4NV6OJ.js";import{f as z,h as u,n as g}from"./chunk-3KENBVE7.js";u();g();var t=z(M());var d=e=>{let p=(0,t.forwardRef)(({warningMessage:r,...a},o)=>t.default.createElement(T,null,t.default.createElement(e,{...a,ref:o}),r&&t.default.createElement(k,null,r))),s=(0,t.forwardRef)(({label:r,...a},o)=>t.default.createElement(E,{label:r},t.default.createElement(e,{...a,ref:o})));return e.WithWarning=p,e.WithLabel=s,e},T=n.div`
  width: 100%;
`,$=n.input`
  width: 100%;
  padding: ${e=>e.padding?e.padding:"14px"};
  background: ${e=>e.backgroundColor?e.backgroundColor:"#181818"};
  border-width: ${e=>e.borderWidth?e.borderWidth:"1px"};
  border-style: solid;
  border-color: ${e=>e.warning?"#EB3742":"#2f2f2f"};
  border-radius: ${e=>e.borderRadius?e.borderRadius:"6px"};
  color: white;
  font-size: ${e=>e.fontSize};
  line-height: 19px;
  &::placeholder {
    color: ${e=>e.placeholderColor?e.placeholderColor:"#666666"};
  }
  &:focus {
    outline: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
  ::selection {
    background: #ab9ff2;
  }
  ::-moz-selection {
    background: #ab9ff2;
  }
`,k=n.div`
  color: #eb3742;
  font-size: 16px;
  line-height: 1.2;
  margin-top: 10px;
  text-align: left;
`,E=n.div`
  position: relative;
  &:after {
    ${e=>e.label?`content: "${e.label}"`:""};
    color: #666;
    position: absolute;
    right: 20px;
    bottom: 17px;
    font-size: 16px;
  }
`,i=d($);i.defaultProps={fontSize:"16px"};var F=n(i.withComponent("textarea"))`
  resize: none;
  padding: 25px;
  line-height: 150%;
  word-spacing: 10px;
  text-align: left;
  white-space: normal;
  &:placeholder-shown {
    word-spacing: 3px;
  }
`,H=d(F);H.defaultProps={fontSize:"16px"};var A=n(i.withComponent("textarea"))`
  height: 68px;
  text-align: start;
  resize: none;
`,N=d(A);N.defaultProps={fontSize:"16px"};var R=n(i.withComponent("textarea"))`
  height: 68px;
  text-align: start;
  resize: none;
`,V=d(R);V.defaultProps={fontSize:"16px"};var K=n(i.withComponent("textarea"))`
  overflow: auto;
  height: 50px;
  text-align: start;
  resize: none;
  padding-right: ${e=>e.paddingRight||"60px"};

  ::placeholder {
    text-overflow: ellipsis;
    white-space: pre;
    overflow: hidden;
  }
`,B=d(K);B.defaultProps={fontSize:"16px"};var q=n(i)`
  padding-left: 43px;
  padding-right: 43px;
`,D=n.div`
  width: 100%;
  position: relative;
`,O=n.div`
  position: absolute;
  top: 16px;
  left: 15px;
`,U=n.div`
  position: absolute;
  top: 16px;
  right: 15px;
  cursor: pointer;
`,Y=(0,t.forwardRef)((e,p)=>{let{showClearIcon:s,onClear:r,showLoadingIcon:a=!1,...o}=e;return t.default.createElement(D,null,t.default.createElement(O,null,a?t.default.createElement(x,{diameter:17}):t.default.createElement(h,null)),t.default.createElement(q,{...o,ref:p,type:"text"}),s&&t.default.createElement(U,{onClick:r},t.default.createElement(b,null)))}),j=n(i).attrs({fontSize:"16px"})`
  border: ${({border:e})=>e};
  color: ${({color:e})=>e};
  &:disabled {
    cursor: not-allowed;
  }
`,Z=t.default.memo(function({value:p,placeholder:s,fontSize:r,required:a,warning:o,minLength:f=1,maxLength:I=79,decimalLimit:m=9,border:y,borderRadius:W,disabled:w,"aria-labelledby":S,"aria-label":C,onKeyPress:c,onUserInput:P,name:v}){return t.default.createElement(j,{value:p,required:a,warning:o,border:y,borderRadius:W,color:o?"#EB3742":"#FFFFFF",type:"text",inputMode:"decimal",pattern:`^\\d*(\\.\\d{0,${m}})?$`,autoComplete:"off",autoCorrect:"off",spellCheck:"false",fontSize:r,placeholder:s,step:"any",minLength:f,maxLength:I,disabled:w,name:v,"aria-labelledby":S,"aria-label":C,onKeyPress:l=>c&&c(l),onInput:l=>{if(!l.target.validity.valid)l.preventDefault();else{let L=l.target.value.replace(/,/g,".");P(L)}}})});export{d as a,i as b,H as c,N as d,V as e,B as f,Y as g,Z as h};
//# sourceMappingURL=chunk-DERIAD33.js.map
