class SimpleButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a style element and append the imported CSS as a string
        const style = document.createElement('style');
        style.textContent = `
        button {
          background-color: #4caf50;
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          font-size: 16px;
          cursor: pointer;
          border-radius: 4px;
        }

        button:hover {
            background-color: #45a049;
        }
        `;

        const button = document.createElement('button');
        button.textContent = this.getAttribute('label') || 'Click Me';

        // Append the style and button to the shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(button);
    }
}

customElements.define('simple-button', SimpleButton);
export default SimpleButton;
