import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', galleryItemMarkup());

console.log(galleryContainer);

function galleryItemMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img
    class = "gallery__image"
    src = "${preview}"
    data-source = "${original}"
    alt = "${description}"
    />
    </a>
    </div>`;
    })
    .join('');
}

// const galleryContainer = document.querySelector('.gallery');

// console.log(galleryContainer);

// galleryContainer.addEventListener('click', onShowImg);

// (function galleryItemMarkup() {
//   const galleryMarkup = galleryItems
//     .map(({ preview, original, description }) => {
//       return `<div class = "gallery__item">
//     <a class = "gallery__link" href = "${original}">
//     <img
//     class = "gallery__image"
//     src = "${preview}"
//     data-source = "${original}"
//     alt = "${description}"
//     />
//     </a>
//     </div>`;
//     })
//     .join('');
//   galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
// })();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
});

console.log(galleryItems);
