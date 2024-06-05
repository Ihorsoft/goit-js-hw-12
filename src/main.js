import "./css/styles.css"
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImages } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";
import { onLoading } from "./js/render-functions";
import { offLoading } from "./js/render-functions";

const BASE_URL = "https://pixabay.com";
const END_POINT = "/api/";
const keyUser = '43441081-c9c9daac9af91d4227dda2db1';

let currentPageNumber = 1;
const formData = {
    keySearch: "",
  };

const form = document.querySelector(".feedback-form");
const galleryNew = document.querySelector(".list");
const loader = document.querySelector(".loader");
const loaderbtn = document.querySelector(".loaderbtn");
const moreBtn = document.querySelector("button[data-more]");
// const kartaElement = document.querySelector(".gallery-item");
form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);
moreBtn.addEventListener("click", fitchPage);

offLoading(loader);
offLoading(loaderbtn);



//++++++++++++++++++++++++++=======================

function handleSubmit(event) {
    currentPageNumber = 1;
    galleryNew.innerHTML = "";
   
    formData.keySearch = event.target.keySearch.value;

    
     handleSubmitNew(event);
    
}


//++++++++++++++++++++++++++++++=======================
function fitchPage(event) {
   
    onLoading(loaderbtn);
    currentPageNumber += 1;
  
      handleSubmitNew(event);

    offLoading(loaderbtn);
   }


//++++++++++++++++++++++++++++++========================

 function handleInput(event) {
   
} 


function handleSubmitNew(event) {
    event.preventDefault();
    
    if (currentPageNumber == 1) {
        
        galleryNew.innerHTML = "";
    };
        
           onLoading(loader);
  
            if (formData.keySearch.trim() == "") {
               offLoading(loader);
               return iziToast.error({
                   message: 'Sorry, there are no images matching your search query. Please try again!',
                   position: 'bottomRight',
                   messageColor: 'white',
                   backgroundColor: 'red',
                   progressBarColor: 'black',
                 });
             }
  
    getImages(keyUser, formData.keySearch, currentPageNumber)
      .then(data => {
           offLoading(loader);
     
           if (data.hits.length === 0) {   
                offLoading(loader);
                return iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'bottomRight',
                messageColor: 'white',
                backgroundColor: 'red',
                progressBarColor: 'black',
                    });
                }  

           galleryNew.insertAdjacentHTML("beforeend", createGallery(data.hits));
          gallery.refresh();
          //+++++++++++++++++++================
          const kartaElement = document.querySelector(".gallery-item");
          const heightKarta = kartaElement.getBoundingClientRect()

          console.log("Bounding:", heightKarta.height);
          window.scrollBy({
              top: heightKarta.height * 2,
                  //left: 100,
                  behavior: "smooth",
                });

          //++++++++++++++++++=================
          // form.reset();
         //  formData.keySearch = '';
       })
      .catch(error => {
           offLoading(loader);
           iziToast.error({
                message: `${error}`,
           });
       })
      .finally(() => {
          // form.reset();
      });
        
    }  

      
   
//+++++++++++++++++++++++++++++===================================

let gallery = new SimpleLightbox('.list a',
    { 
        captionsData: "alt",
        captionClass: "text-center",
        captionDelay: 250,
        overlayOpacity: 0.8,
    });

gallery.on('show.simplelightbox', function () {
	
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); 
});


   