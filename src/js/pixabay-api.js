
const BASE_URL = "https://pixabay.com";
const END_POINT = "/api/";



 export function getImages(keyUser, keyImage) {
        const params = new URLSearchParams({
            key: keyUser,
            q: keyImage,
            image_type: "photo",
            orientation: 'horizontal',
            safesearch: 'true',
        });
   console.log("Export BASE_URL GET IMAGE", BASE_URL);
        const url = `${BASE_URL}${END_POINT}?${params}`;
      return fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error(
              "Sorry, there are no images matching your search query. Please try again!"
            );
           }
          return res.json();
        })
        .catch(error => iziToast.error({message: `${error}`}));
}

    


