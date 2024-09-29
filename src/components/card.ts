class MyCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const card = document.createElement('div');
        card.innerHTML = '<strong>This is a card</strong>';
        this.shadowRoot?.append(card);
    }
}

customElements.define('my-card', MyCard);
export default MyCard;
