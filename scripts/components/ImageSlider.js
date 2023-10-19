// Avançar imagem do Slide
function nextImage(currentSlide) {
  let size = currentSlide.imagesSrc.length - 1;

  if (currentSlide.index < size) {
    currentSlide.index = currentSlide.index + 1;
    setCurrentImage(currentSlide);
  }
}

// retornar imagem do Slide
function previousImage(currentSlide) {
  if (currentSlide.index > 0) {
    currentSlide.index = currentSlide.index - 1;
    setCurrentImage(currentSlide);
  }
}

// Atualizar a imagem atual do slide
function setCurrentImage(currentSlide) {
  currentSlide.currentImage = document.getElementById(currentSlide.idTag).src =
    currentSlide.imagesSrc[currentSlide.index];
}
