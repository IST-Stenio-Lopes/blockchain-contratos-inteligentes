function handleNavigation(e) {
  const backToTopButton = document.getElementById("back-to-top");
  const windowTarget = e.currentTarget;
  if (windowTarget.scrollY >= 20) {
    backToTopButton.classList.add("bottom-20");
    backToTopButton.classList.remove("-bottom-20");
  } else {
    backToTopButton.classList.add("-bottom-20");
    backToTopButton.classList.remove("bottom-20");
  }
}

window.addEventListener("scroll", handleNavigation);
