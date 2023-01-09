import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);


const containerGallery = document.querySelector('.gallery');
const markup = imagesLists(galleryItems);

containerGallery.insertAdjacentHTML("beforeend", markup);
containerGallery.addEventListener('click', onContainerGallery); 

    function imagesLists(galleryItems) {
        return galleryItems.map(({preview, original, description})=>{
            return ` 
        <div class="gallery__item">
        <a class="gallery__link" 
        href="${original}">
          <img class="gallery__image" 
          src= "${preview}" 
          data-source= "${original}" 
          alt= "${description}" >
        </a>
        </div>
        `;
        })
        .join('');
    }
    
    function onContainerGallery(e){
    e.preventDefault();

    if(e.target.nodeName !== 'IMG'){
        return
    }
    const instance = basicLightbox.create(`
        <div class="modal">
        <img src='${e.target.dataset.source}'>
        </div>
    `)
    instance.show()
    }  
