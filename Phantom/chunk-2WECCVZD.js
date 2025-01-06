import{o as a}from"./chunk-WIQ4WVKX.js";import{m as g}from"./chunk-56SJOU6P.js";import{a as f}from"./chunk-7X4NV6OJ.js";import{f as x,h as i,n as l}from"./chunk-3KENBVE7.js";i();l();var o=x(f());var m=a.div`
  position: relative;
  width: ${e=>`${e.width}px`};
  height: ${e=>`${e.height}px`};
  opacity: ${e=>e.disabled?e.disabledToggleOpacity:1};

  input[type="checkbox"] {
    width: ${e=>`${e.width}px`};
    height: ${e=>`${e.height}px`};
    margin: 0;
    &:hover {
      cursor: pointer;
    }
  }

  label {
    width: ${e=>`${e.width}px`};
    height: ${e=>`${e.height}px`};
    background: ${e=>e.disabled?e.disabledBackgroundColor:e.inactiveBackgroundColor};
    border-radius: ${e=>`${(e.height||0)/2}px`};
    cursor: pointer;
    text-indent: -9999px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  label:after {
    content: "";
    position: absolute;
    top: ${e=>`${((e.height||0)-(e.toggleHeight||0))/2}px`};
    left: ${e=>`${((e.width||0)-(e.toggleWidth||0)*2)/2}px`};
    width: ${e=>`${e.toggleWidth}px`};
    height: ${e=>`${e.toggleHeight}px`};
    background: ${e=>e.inactiveToggleColor};
    border-radius: 100px;
    transition: 0.3s;
  }

  input:checked + label {
    background: ${e=>e.disabled?e.disabledBackgroundColor:e.activeBackgroundColor};
    &:after {
      background: ${e=>e.disabled?e.disabledToggleColor:e.activeToggleColor};
    }
  }

  input:checked + label:after {
    left: calc(100% - ${e=>`${((e.width||0)-(e.toggleWidth||0)*2)/2}px`});
    transform: translateX(-100%);
  }

  label:active:after {
    width: 14px;
    background: #fff;
  }
`,B=o.default.memo(({id:e,width:d,height:r,toggleWidth:n,toggleHeight:c,activeBackgroundColor:h,activeToggleColor:b,inactiveBackgroundColor:s,inactiveToggleColor:u,disabledBackgroundColor:p,disabledToggleColor:C,disabledToggleOpacity:$,checked:k,disabled:t,onChange:T,label:v})=>{let{t:w}=g();return o.default.createElement(m,{width:d,height:r,toggleWidth:n,toggleHeight:c,activeBackgroundColor:h,inactiveBackgroundColor:s,disabledBackgroundColor:p,activeToggleColor:b,inactiveToggleColor:u,disabledToggleColor:C,disabledToggleOpacity:$,disabled:t},o.default.createElement("input",{type:"checkbox","aria-label":v??"checkbox",id:e,checked:t||k,onChange:T,disabled:t,"data-testid":e}),o.default.createElement("label",{htmlFor:e},w("switchToggle")))});B.defaultProps={width:34,height:20,toggleWidth:14,toggleHeight:14,activeBackgroundColor:"#AB9FF2",inactiveBackgroundColor:"#181818",disabledBackgroundColor:"#AB9FF2",activeToggleColor:"#FFF",inactiveToggleColor:"#777",disabledToggleColor:"#FFF",disabledToggleOpacity:.4,disabled:!1,checked:!1};export{B as a};
//# sourceMappingURL=chunk-2WECCVZD.js.map
