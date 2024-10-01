import './input.css';

class SimpleInputText extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = this.getAttribute('placeholder') || 'Enter text...';
        input.setAttribute('part', 'input');

        shadow.appendChild(input);
    }
}

customElements.define('simple-input-text', SimpleInputText);
export default SimpleInputText;
