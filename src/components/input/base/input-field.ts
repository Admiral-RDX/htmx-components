class InputField extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Get attributes
        const [type, placeholder, spacing, roundness] = [
            this.getAttribute('type') || 'text',
            this.getAttribute('placeholder') || '',
            this.getAttribute('padding') || '',
            this.getAttribute('roundness') || '',
        ];

        // HTML
        const input = document.createElement('input');
        input.type = type;
        input.placeholder = placeholder;
        input.classList.add('input-field');

        // Styles
        const style = document.createElement('style');
        style.textContent = `
        input {
            padding: var(${spacing});
            border-radius: var(${roundness});
            font-size: var(--font-size-s);
            background: #374151;
            color: var(--text-color);
            width: 100%;

            margin: 0;
            border: 2px solid transparent;
            outline: none;
            box-sizing: border-box;
            transition: all 100ms ease-in-out;

            &:focus {
                border: 2px solid var(--blue-500);
            }
        }
        `;

        // End
        shadow.appendChild(input);
        shadow.appendChild(style);
    }
}

customElements.define('input-field', InputField);
export default InputField;
