export class Section extends HTMLTableSectionElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.styles());
    // shadow.appendChild(this.createDiv());

    this.classList.add("section");
    this.innerHTML = `<sd-center>
      <slot></slot>
    </sd-center>`;
  }

  createDiv() {
    const div = document.createElement("div");
    div.classList.add("section");
    div.innerHTML = `<sd-center>
      <slot></slot>
    </sd-center>`;

    return div;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
      .section {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
      }
    `;

    return style;
  }
}
