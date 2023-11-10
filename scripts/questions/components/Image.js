function generateImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  image.classList.add("w-full");
  image.style.color = "transparent";

  return image;
}

export { generateImage };
