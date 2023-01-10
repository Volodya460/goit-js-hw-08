// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const gallaryBox = document.querySelector('.gallery');
const gallery = creatGallary(galleryItems);
// console.log(creatGallary(galleryItems));

gallaryBox.innerHTML = gallery;

function creatGallary(event) {
  return event
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

gallaryBox.addEventListener('click', onGallaryBoxClick);

function onGallaryBoxClick(event) {
  // console.log(event.target);
  const bigImage = event.target.dataset.source;
  // console.log(bigImage);
  event.preventDefault();
  const clickObject = event.target.classList.contains('gallery__image');
  if (!clickObject) {
    return;
  }
  const instance = simplelightbox.create(`
	 <img src="${bigImage}" width="800" height="600">
`);
  instance.show();

  gallaryBox.addEventListener('keydown', onEscapeClick);

  function onEscapeClick(event) {
    if (event.code === 'Escape') instance.close();
  }
}
