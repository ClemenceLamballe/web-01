import template from "./footer.component.html";

export class FooterComponent extends HTMLElement {
    constructor() {
        super(template);
        this.innerHTML = template;

    }
}