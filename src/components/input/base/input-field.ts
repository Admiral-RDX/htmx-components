import style from './input-field-style';

class InputField extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('input-field');

        shadow.appendChild(input);
        shadow.appendChild(style);
    }
}

customElements.define('input-field', InputField);
export default InputField;
