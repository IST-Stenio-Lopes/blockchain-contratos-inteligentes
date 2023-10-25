import { createElementWithClasses } from "../utils/index.js";

function generateImage(imageSrc) {
	const image = createElementWithClasses("image", "w-full");
	image.setAttribute("src", imageSrc);
	image.setAttribute("alt", "");
	return image;
}

export {
    generateImage
}