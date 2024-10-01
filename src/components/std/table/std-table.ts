import './std-table.css';

class StdTable extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const table = document.createElement('table');
        table.classList.add('std-table');

        const slot = document.createElement('slot');
        table.appendChild(slot);

        shadow.appendChild(table);
    }
}

customElements.define('std-table', StdTable);
export default StdTable;
