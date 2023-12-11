import { createElementWithClasses } from "../utils/index.js";

function generateFeedBack(title, subtitle, isCorrect) {
  // main container
  const feedbackContainer = document.createElement("div");

  // title container inside the feedbackContainer
  let classesTitle = isCorrect
    ? "bg-primary-990 text-primary-400"
    : "bg-red-950 text-red-300";
  classesTitle += " h-10 flex flex-row items-center justify-between px-8 py-2";
  const titleContainer = createElementWithClasses("div", classesTitle);
  feedbackContainer.appendChild(titleContainer);

  // title inside the title container
  const feedbackTitle = createElementWithClasses(
    "span",
    "text-lg font-semibold"
  );
  feedbackTitle.innerHTML = title;
  titleContainer.appendChild(feedbackTitle);

  //// the svg icon
  const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgIcon.setAttribute("viewBox", "0 0 24 24");
  svgIcon.setAttribute("fill", "none");
  svgIcon.setAttribute("width", "24");
  svgIcon.setAttribute("height", "24");
  titleContainer.appendChild(svgIcon);

  if (isCorrect) {
    // path
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("clip-rule", "evenodd");
    path.setAttribute(
      "d",
      "M20.9571 6.04289C21.3476 6.43342 21.3476 7.06658 20.9571 7.45711L10.4571 17.9571C10.0666 18.3476 9.43342 18.3476 9.04289 17.9571L3.79289 12.7071C3.40237 12.3166 3.40237 11.6834 3.79289 11.2929C4.18342 10.9024 4.81658 10.9024 5.20711 11.2929L9.75 15.8358L19.5429 6.04289C19.9334 5.65237 20.5666 5.65237 20.9571 6.04289Z"
    );
    path.setAttribute("fill", "#436900");
    svgIcon.appendChild(path);
  } else {
    // path 1 inside the svg
    const path1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    path1.setAttribute("fill-rule", "evenodd");
    path1.setAttribute("clip-rule", "evenodd");
    path1.setAttribute(
      "d",
      "M19.4571 4.54289C19.8476 4.93342 19.8476 5.56658 19.4571 5.95711L5.95711 19.4571C5.56658 19.8476 4.93342 19.8476 4.54289 19.4571C4.15237 19.0666 4.15237 18.4334 4.54289 18.0429L18.0429 4.54289C18.4334 4.15237 19.0666 4.15237 19.4571 4.54289Z"
    );
    path1.setAttribute("fill", "currentColor");
    svgIcon.appendChild(path1);

    // path 2 inside the svg
    const path2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    path2.setAttribute("fill-rule", "evenodd");
    path2.setAttribute("clip-rule", "evenodd");
    path2.setAttribute(
      "d",
      "M4.54289 4.54289C4.93342 4.15237 5.56658 4.15237 5.95711 4.54289L19.4571 18.0429C19.8476 18.4334 19.8476 19.0666 19.4571 19.4571C19.0666 19.8476 18.4334 19.8476 18.0429 19.4571L4.54289 5.95711C4.15237 5.56658 4.15237 4.93342 4.54289 4.54289Z"
    );
    path2.setAttribute("fill", "currentColor");
    svgIcon.appendChild(path2);
  }

  // subtitle container inside the feedbackContainer
  let classesSubtitle = isCorrect ? "border-primary-800" : "border-red-500";
  classesSubtitle += " border px-8 py-2 bg-gray-overlay-120";
  const subtitleContainer = createElementWithClasses("div", classesSubtitle);
  feedbackContainer.appendChild(subtitleContainer);

  // subtitle inside the subtitle container
  const feedbackSubtitle = createElementWithClasses(
    "span",
    "font-medium text-lg text-gray-200 dark:text-gray-900"
  );
  subtitleContainer.appendChild(feedbackSubtitle);
  feedbackSubtitle.innerHTML = subtitle;

  return feedbackContainer;
}

export { generateFeedBack };
