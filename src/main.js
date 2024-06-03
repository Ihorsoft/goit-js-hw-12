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

const formData = {
    keySearch: "",
  };

const form = document.querySelector(".feedback-form");
const galleryNew = document.querySelector(".list");
const loader = document.querySelector(".loader");
form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

offLoading(loader);

//++++++++++++++++++++++++++++++=======================

 function handleInput(event) {
    const key = event.target.name;
    formData[key] = event.target.value;
    return formData.keySearch;
} 



function handleSubmit(event) {
           event.preventDefault();
           galleryNew.innerHTML = "";
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
  console.log("BASE URL in main", BASE_URL);
    getImages(keyUser, formData.keySearch)
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
           form.reset();
           formData.keySearch = '';
       })
      .catch(error => {
           hideLoading(loader);
           iziToast.error({
                message: `${error}`,
           });
       })
      .finally(() => {
           form.reset();
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


   