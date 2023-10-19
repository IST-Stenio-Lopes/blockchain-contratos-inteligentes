var y = 0;

function handleNavigation(e) {
  const navbar = document.getElementById("navbar");
  const windowTarget = e.currentTarget;
  if (y >= windowTarget.scrollY) {
    navbar.classList.remove("-top-20");
  } else {
    navbar.classList.add("-top-20");
  }
  y = windowTarget.scrollY;
}

window.addEventListener("scroll", handleNavigation);
