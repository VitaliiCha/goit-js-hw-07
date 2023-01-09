import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');
const markup = imagesLists(galleryItems);

containerGallery.insertAdjacentHTML("beforeend", markup);
function imagesLists(galleryItems) {
        return  galleryItems.map(({preview, original, description})=>{
            return ` 
        <a class="gallery__item" 
        href="${original}">
          <img class="gallery__image" 
          src= "${preview}"  
          alt= "${description}" />
        </a>
        `;
        })
        .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
    
});
