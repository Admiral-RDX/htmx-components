class t extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("input");e.type="text",e.placeholder=this.getAttribute("placeholder")||"Enter text...",e.setAttribute("part","input"),t.appendChild(e)}}customElements.define("simple-input-text",t);export{t as SimpleInputText};
//# sourceMappingURL=bundle.mjs.map
