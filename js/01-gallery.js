import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', galleryItemMarkup());

console.log(galleryContainer);

galleryContainer.addEventListener('click', onShowImg);

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

function onShowImg(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  let bigImageSrc = e.target.dataset.source;

  const modal = basicLightbox.create(
    `<img src="${bigImageSrc}" width="800" height="600">`,
  );
  modal.show();

  if (modal.visible()) {
    window.addEventListener('keydown', onPressKeyESC);
  }

  function onPressKeyESC(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', onPressKeyESC);
    }
  }
}

console.log(galleryItems);
