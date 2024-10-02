class InputSelect extends HTMLElement {
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
        const parent = document.createElement('div');
        parent.classList.add('parent');

        // -- INPUT
        const input = document.createElement('input');
        input.type = type;
        input.placeholder = placeholder;
        input.classList.add('input-field');

        // -- SELECT
        const select = document.createElement('div');
        select.classList.add('select');

        for (let i = 0; i < 10; i + 1) {
            const sampleElement = document.createElement('div');
            sampleElement.innerText = i.toString();
            select.appendChild(sampleElement);
        }

        // Styles
        const style = document.createElement('style');
        style.textContent = `
        .parent {
            position: relative;

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

            .select {
                display: block;
                width: 100%;
                padding: 0rem .5rem;
                background: #374151;
                margin-top: 0;
                height: 0;
                overflow: hidden;
                transition: all 200ms ease-in-out;
                box-sizing: border-box;
                border-radius: var(${roundness});
                overflow-y: auto;
                scrollbar-width: none;
                z-index: 999;

                div {
                    padding: .5rem 1rem;
                    border-radius: .2rem;
                    transition: background 100ms;
                    cursor: pointer;

                    &:hover {
                        background: #61718a;
                    }
                }
            }
        }

        input:focus + .select,
        .select:hover {
            margin-top: 0.5rem;
            height: 200px;
            padding: .5rem;
        }
        `;

        // End
        parent.appendChild(input);
        parent.appendChild(select);
        shadow.appendChild(style);
        shadow.appendChild(parent);
    }
}

customElements.define('input-select', InputSelect);
export default InputSelect;
