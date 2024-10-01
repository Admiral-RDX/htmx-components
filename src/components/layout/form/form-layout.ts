import './form-layout.css';

class FormLayout extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const form = document.createElement('form');
        form.classList.add('form-layout');

        const slot = document.createElement('slot');
        form.appendChild(slot);

        shadow.appendChild(form);
    }
}

customElements.define('form-layout', FormLayout);
export default FormLayout;
