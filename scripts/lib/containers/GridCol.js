export class GridCol extends HTMLDivElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.styles());
    // shadow.appendChild(this.createDiv());
    const marginCols = this.getAttribute("marginCols") || 2;

    this.style.gridColumnStart = marginCols == 1 ? 2 : 3;
    this.style.gridColumnEnd = marginCols == 1 ? 12 : 11;

    this.innerHTML = "<slot></slot>";
  }

  createDiv() {
    const div = document.createElement("div");

    const marginCols = this.getAttribute("marginCols") || 2;

    div.style.gridColumnStart = marginCols == 1 ? 2 : 3;
    div.style.gridColumnEnd = marginCols == 1 ? 12 : 11;

    div.innerHTML = "<slot></slot>";

    return div;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `    `;

    return style;
  }
}
