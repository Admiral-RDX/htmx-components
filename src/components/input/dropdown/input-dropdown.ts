import './input-dropdown.css';

class InputDropdown extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('input-dropdown');

        shadow.appendChild(input);
    }
}

customElements.define('input-dropdown', InputDropdown);
export default InputDropdown;
