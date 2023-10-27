import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list=document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarcup(galleryItems))

function createMarcup(arr){
    return arr.map(({preview, original, description})=>
   `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
     <img
       class="gallery__image"
       src=${preview}
       data-source=${original}
       alt=${description}
       title="${description}"
     />
   </a>
 </li>` 
    ).join("")
}

var lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250  });

