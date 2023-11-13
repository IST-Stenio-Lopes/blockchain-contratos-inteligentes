function generateImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}

export { generateImage };
