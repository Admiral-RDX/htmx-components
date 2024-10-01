import './std-nav.css';

class StdNav extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const nav = document.createElement('nav');
        nav.classList.add('std-nav');

        const slot = document.createElement('slot');
        nav.appendChild(slot);

        shadow.appendChild(nav);
    }
}

customElements.define('std-nav', StdNav);
export default StdNav;
