class MyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const button = document.createElement('button');
        button.textContent = 'Click Me';
        this.shadowRoot?.append(button);
    }
}

customElements.define('my-button', MyButton);
export default MyButton;
