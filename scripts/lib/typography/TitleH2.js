/**
 * Create a h2 tag.
 *
 * @param {string} value The value injected inside h2 tag.
 */

export class TitleH2 extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({mode: 'open'});

    shadow.appendChild(this.styles());
    shadow.appendChild(this.createH2());
  }

  createH2() {
    const h2 = document.createElement('h2');

    h2.innerHTML = this.getAttribute('value');
    return h2;
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
      h2 {
        font-size: var(--text-2xl);
        line-height: 1.75rem;
        font-weight: 700;

        margin-inline-start: 3rem;
        
        color: var(--primary-500);
      }
    `

    return style;
  }
}