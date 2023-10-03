/**
 * Create a h3 tag.
 *
 * @param {string} value The value injected inside h3 tag.
 */

export class TitleH3 extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({mode: 'open'});

    shadow.appendChild(this.styles());
    shadow.appendChild(this.createH3());
  }

  createH3() {
    const h3 = document.createElement('h3');

    h3.innerHTML = this.getAttribute('value');
    return h3;
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
      h3 {
        font-size: var(--text-xl);
        line-height: 1.75rem;
        font-weight: 700;

        margin-inline-start: 4.5rem;
        
        color: var(--secondary-400);
      }
    `

    return style;
  }
}