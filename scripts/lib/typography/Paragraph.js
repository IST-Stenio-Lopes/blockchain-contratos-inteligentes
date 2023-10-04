/**
 * Create a p tag.
 *
 * @param {string} value The value injected inside p tag.
 */

export class Paragraph extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({mode: 'open'});

    shadow.appendChild(this.styles());
    shadow.appendChild(this.createParagraph());
  }

  createParagraph() {
    const p = document.createElement('p');

    // p.innerHTML = this.getAttribute('value');
    
    p.innerHTML = "<slot></slot>";
    return p;
  }


  styles() {
    const style = document.createElement('style');
    style.textContent = `
      p {
        font-size: var(--text-base);
        line-height: 1.5rem;
        overflow-wrap: break-word;
        color: var(--gray-200);
      }
    `

    return style;
  }
}



