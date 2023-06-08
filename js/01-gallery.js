import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");
const itemsEl = createGalleryItems(galleryItems);
listEl.insertAdjacentHTML("beforeend", itemsEl);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
     <img class="gallery__image"
    src="${preview}" data-source="${original}" alt="${description}"
    />
    </a>
    </li>`;
    })
    .join("");
}

listEl.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}' width="800" height="600">
`);
    instance.show();
    return;
  }
}
