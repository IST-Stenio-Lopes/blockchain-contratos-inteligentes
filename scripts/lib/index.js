import { SectionTitle } from "./typography/SectionTitle.js";
import { Paragraph } from "./typography/Paragraph.js";
import { TitleH1 } from "./typography/TitleH1.js";
import { TitleH2 } from "./typography/TitleH2.js";
import { TitleH3 } from "./typography/TitleH3.js";
import { SubtitleH4 } from "./typography/SubtitleH4.js";

import { Center } from "./containers/Center.js";
import { Page } from "./containers/Page.js";
import { GridCol } from "./containers/GridCol.js";
import { Section } from "./containers/Section.js";

customElements.define("sd-section-title", SectionTitle);
customElements.define("sd-p", Paragraph);
customElements.define("sd-title-h1", TitleH1);
customElements.define("sd-title-h2", TitleH2);
customElements.define("sd-title-h3", TitleH3);
customElements.define("sd-subtitle-h4", SubtitleH4);

customElements.define("sd-center", Center);
customElements.define("sd-page", Page);
customElements.define("sd-grid-col", GridCol);
customElements.define("sd-section", Section);
