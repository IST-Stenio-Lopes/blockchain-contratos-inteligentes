/**
 * Create a h4 tag.
 *
 * @param {string} value The value injected inside h4 tag.
 */

export class SubtitleH4 extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({mode: 'open'});

    shadow.appendChild(this.styles());
    shadow.appendChild(this.createH4());
  }

  createH4() {
    const h4 = document.createElement('h4');

    h4.innerHTML = this.getAttribute('value');
    return h4;
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
      h4 {
        font-size: var(--text-base);
        line-height: 1.5rem;
        font-weight: 600;

        margin-inline-start: 6.5rem;
        
        color: var(--secondary-400);
      }
    `

    return style;
  }
}