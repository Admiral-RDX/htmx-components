import './input.css';

class SimpleInputText extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
        input[type='text'] {
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 100%;
        }

        input[type='text']:focus {
            border-color: #4caf50;
            outline: none;
        }
        `;

        // Create input element
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = this.getAttribute('placeholder') || 'Enter text...';

        // Attach styles and input to the shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(input);
    }
}

// Define the new element
customElements.define('simple-input-text', SimpleInputText);
export default SimpleInputText;
