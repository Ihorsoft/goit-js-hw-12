
import axios from "axios";
const BASE_URL = "https://pixabay.com";
const END_POINT = "/api/";

 export async function getImages(keyUser, keyImage, currentPageNumber) {
        const params = new URLSearchParams({
            key: keyUser,
            q: keyImage,
            image_type: "photo",
            orientation: 'horizontal',
          safesearch: 'true',
          page: `${currentPageNumber}`,
          per_page: 15,
        });
   
        const url = `${BASE_URL}${END_POINT}?${params}`;
    //return fetch(url)
   const res = await axios.get(url);
       // .then(res =>{{
         // if (!res.ok) {
         //   throw new Error(
         //     "Sorry, there are no images matching your search query. Please try again!"
         //   );
         //  }
          return res.data;
      //  })
      //  .catch(error => iziToast.error({message: `${error}`}));
}

    


