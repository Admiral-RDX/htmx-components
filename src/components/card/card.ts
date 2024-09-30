class SimpleCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
        .card {
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 16px;
            margin: 10px;
            background-color: #fff;
        }

        .card-title {
            font-size: 18px;
            font-weight: bold;
        }

        .card-content {
            font-size: 14px;
            color: #333;
        }
        `;

        // Create card container
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h2');
        title.classList.add('card-title');
        title.textContent = this.getAttribute('title') || 'Card Title';

        const content = document.createElement('p');
        content.classList.add('card-content');
        content.textContent =
            this.getAttribute('content') || 'Card content goes here.';

        // Attach styles and card to the shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(card);
        card.appendChild(title);
        card.appendChild(content);
    }
}

// Define the new element
customElements.define('simple-card', SimpleCard);
export default SimpleCard;
