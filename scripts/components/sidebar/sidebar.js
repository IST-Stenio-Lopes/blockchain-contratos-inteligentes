const sizes = {
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
