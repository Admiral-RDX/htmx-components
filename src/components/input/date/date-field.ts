import './date-field.css';

class DateField extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const input = document.createElement('input');
        input.type = 'date';
        input.classList.add('date-field');

        shadow.appendChild(input);
    }
}

customElements.define('date-field', DateField);
export default DateField;
