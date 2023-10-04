/**
 * Create a webcomponent.
 *
 */

export class SectionTitle extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.styles());
    shadow.appendChild(this.createContainer());
  }

  createContainer() {
    const div = document.createElement("div");

    div.classList.add("section-container");

    div.appendChild(this.createContent());

    return div;
  }

  createContent() {
    const div = document.createElement("div");

    const sectionType = this.getAttribute("sectionType") || "primary";
    div.classList.add("section-content");
    div.classList.add(
      sectionType === "primary"
        ? "section-content-primary"
        : "section-content-secondary"
    );

    div.appendChild(this.createH1());
    return div;
  }

  createH1() {
    const h1 = document.createElement("h1");
    h1.classList.add("section-title");

    const hasMT = this.getAttribute("hasMT") || true;
    const hasMB = this.getAttribute("hasMB") || true;

    h1.style.paddingTop = hasMT ? `2rem` : "0";
    h1.style.paddingBottom = hasMB ? `2rem` : "0";

    h1.id = this.getAttribute("id");

    h1.innerHTML = `
      <sd-center>
        <sd-grid-col>
          <slot></slot>
        </sd-grid-col>
      </sd-center>
    `;

    return h1;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
      .section-container {
        width: 100vw;
      }

      .section-content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 4rem;
      }

      .section-content-primary {
        background: linear-gradient(
          90deg,
          var(--primary-overlay-0) 0%,
          var(--primary-overlay-500) 35%,
          var(--primary-overlay-0) 100%
        );
      }

      .section-content-secondary {
        background-color: var(--primary-990);
      }

      .section-title {
        color: var(--primary-400);
        font-size: var(--text-2xl);
        font-weight: 700;
      }
    `;

    return style;
  }
}
