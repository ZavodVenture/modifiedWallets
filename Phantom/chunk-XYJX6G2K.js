import{k as o,o as e}from"./chunk-WIQ4WVKX.js";import{h as n,n as i}from"./chunk-3KENBVE7.js";n();i();var t=5,c=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    svg {
      fill: white;
    }
  }
  svg {
    fill: #777777;
    transition: fill 200ms ease;
  }
  padding: ${t}px;
  margin: -${t}px;
  ${r=>r.isActive&&o`
      svg {
        fill: white;
      }
    `}
`,a=e(c)`
  height: ${r=>r.diameter}px;
  min-width: ${r=>r.diameter}px;
  transition: background-color 200ms ease;
  border-radius: 50%;
  background-color: ${r=>r.backgroundColor||""};

  :hover {
    background-color: #181818;
  }
  ${r=>r.isActive&&o`
      background-color: #181818;
    `}
`;a.defaultProps={diameter:28};export{t as a,c as b,a as c};
//# sourceMappingURL=chunk-XYJX6G2K.js.map
