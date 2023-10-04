export class Center extends HTMLDivElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.styles());
    // shadow.appendChild(this.createDiv());
    this.classList.add("center-container");
    this.innerHTML = "<slot></slot>";
  }

  createDiv() {
    const div = document.createElement("div");
    div.classList.add("center-container");
    div.innerHTML = "<slot></slot>";

    return div;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
      .center-container {
        display: grid;
        grid-template-columns: repeat(12, auto);
        column-gap: 1rem;

        width: 100%;
        min-width: 720px;
        max-width: 1120px;

        z-index: 20;
      }
    `;

    return style;
  }
}
