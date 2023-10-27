var sizes = {
  sm: -10,
  md: 0,
  lg: 10,
};

const sideBarSections = [
  {
    id: "1",
    title: "Visão geral do curso",
    icon: "images/icons/theme.svg",
  },
  {
    id: "2",
    title: "Sumário",
    icon: "images/icons/summary.svg",
  },
  {
    id: "3",
    title: "Escala de cinza",
    icon: "images/icons/font-size.svg",
  },
  {
    id: "4",
    title: "Tema",
    icon: "images/icons/general-vision.svg",
  },
  {
    id: "5",
    title: "Tamanho da fonte",
    icon: "images/icons/circle-half.svg",
  },
];

function openMenu() {
  document.getElementById("sidebar").classList.add("w-80");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("w-80");
}

function setDarkMode(isDarkMode) {
  const buttons = document
    .getElementById("dark-mode-panel")
    .getElementsByTagName("button");

  for (button of buttons) {
    button.classList.remove("text-primary-900");

    if (
      (isDarkMode && button.id === "dark-mode") ||
      (!isDarkMode && button.id === "white-mode")
    )
      button.classList.add("text-primary-900");
  }

  isDarkMode
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");

  ueData.darkMode = isDarkMode;
}

function changeFontSize(size) {
  const sizeBase = 100;
  const newSize = sizeBase + size;

  document.documentElement.style.fontSize = newSize + "%";

  ueData.fontSize = size;

  const buttons = document
    .getElementById("font-size-panel")
    .getElementsByTagName("button");

  for (button of buttons) {
    button.classList.remove("text-primary-900");

    if (sizes[button.id] == size) button.classList.add("text-primary-900");
  }
}

function setGrayScale() {
  const isGray = !ueData.grayScale;

  isGray
    ? document.documentElement.classList.add("grayscale")
    : document.documentElement.classList.remove("grayscale");

  ueData.grayScale = isGray;
}

function sideBarInit() {
  changeFontSize(ueData.fontSize);
  setDarkMode(ueData.darkMode);
}
