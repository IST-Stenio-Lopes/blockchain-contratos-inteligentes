/**
 * Create a webcomponent.
 *
 */

export class Page extends HTMLDivElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.styles());
    this.classList.add("page");
    this.innerHTML = "<slot></slot>";
    // shadow.appendChild(this.createDiv());
  }

  createDiv() {
    const div = document.createElement("div");
    div.classList.add("page");
    div.innerHTML = "<slot></slot>";

    return div;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
      .page {
        display: flex;
        flex-direction: column;
        align-items: center;

        z-index: -50;

        width: 100%;

        background-color: white;
      }
    `;

    return style;
  }
}
