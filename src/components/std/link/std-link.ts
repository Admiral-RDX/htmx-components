import './std-link.css';

class StdLink extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const link = document.createElement('a');
        link.classList.add('std-link');
        link.href = '#';
        link.innerText = 'Link';

        shadow.appendChild(link);
    }
}

customElements.define('std-link', StdLink);
export default StdLink;
