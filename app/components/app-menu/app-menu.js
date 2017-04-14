import template from './app-menu.html';
import style from './app-menu.pcss';

class AppMenu extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = template;

        this.addEventListener('click', () => this.toggle());
    }

    get open() {
        return this.hasAttribute('open');
    }

    set open(value) {
        if (value) {
            this.setAttribute('open', true);
        } else {
            this.removeAttribute('open');
        }
    }

    toggle() {
        this.open = !this.open;
    }
}

customElements.define('app-menu', AppMenu);