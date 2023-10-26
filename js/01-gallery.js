import { galleryItems } from './gallery-items.js';
// Change code below this line


const list=document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarcup(galleryItems))
list.addEventListener("click", handleClick)
 
function handleClick(event){
    event.preventDefault();
    if (event.target === event.currentTarget)
{
    return;
}
const currentList= event.target.closest(".gallery__link");
console.log(currentList)
}

function createMarcup(arr){
    return arr.map(({preview, original, description})=>
   `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
     <img
       class="gallery__image"
       src=${preview}
       data-source=${original}
       alt=${description}
     />
   </a>
 </li>` 
    ).join("")
}


list.addEventListener("click", openOriginalImage);

function openOriginalImage(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  const instance = basicLightbox.create(
    `<div class="modal">
    <img src="${event.target.dataset.source}" width="800" height="600">
    </div>
`,
{
  onShow: () => {
    document.addEventListener("keydown", escapeFunction);
  },

  onClose: () => {
    document.removeEventListener("keydown", escapeFunction);
  },
}
);


const escapeFunction = (event) => {
  if (event.key === "Escape") {
    instance.close();
  }
};


  instance.show();
}



