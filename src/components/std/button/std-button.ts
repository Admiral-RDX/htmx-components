import './std-button.css';

class StdButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const button = document.createElement('button');
        button.classList.add('std-button');
        button.innerText = 'Button';

        shadow.appendChild(button);
    }
}

customElements.define('std-button', StdButton);
export default StdButton;
