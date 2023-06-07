import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");
console.log(listEl);

const itemEl = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image"
    src="${preview}" data-source="${original} "alt="${description}"
    ></a></li>`
);

listEl.insertAdjacentHTML("beforeend", itemEl.join(""));
