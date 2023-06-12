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
    src="${preview}" alt="${description}"
    />
    </a>
    </li>`;
    })
    .join("");
}
let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
});
