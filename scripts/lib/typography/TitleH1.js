/**
 * Create a h1 tag.
 *
 * @param {string} value The value injected inside h1 tag.
 */

export class TitleH1 extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({mode: 'open'});

    shadow.appendChild(this.styles());
    shadow.appendChild(this.createH1());
  }

  createH1() {
    const h1 = document.createElement('h1');

    h1.innerHTML = this.getAttribute('value');
    return h1;
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
      h1 {
        font-size: var(--text-2xl);
        line-height: 2rem;
        font-weight: 700;

        margin-inline-start: 1.5rem;

        color: var(--primary-500);
      }
    `

    return style;
  }
}