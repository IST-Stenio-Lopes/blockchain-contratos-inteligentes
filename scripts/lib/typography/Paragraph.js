


export class Paragraph extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({mode: 'open'});

    shadow.appendChild(this.styles());
    
    const p = this.createParagraph();
    
    shadow.appendChild(p);
  }

  createParagraph() {
    const p = document.createElement('p');

    return p;
  }

  createSheet() {
    const sheet = new CSSStyleSheet();
    sheet.replace('@import url("./../../css/global.css")');

    return sheet;
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
      p {
        font-size: 1rem;
        overflow-wrap: break-word;
        width: 200px;
        height: 200px;
      }
    `

    return style;
  }
}