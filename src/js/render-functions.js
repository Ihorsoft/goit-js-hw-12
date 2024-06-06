export function createGallery(arrObjPicture) {
   
      return arrObjPicture.map(
        ({
        tags,
        likes,
        views,
        comments,
        downloads,
        previewURL,
        largeImageURL,
      }) =>
            `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${previewURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
    />
  </a>
      <div class = "wrapper">
                 <div class = "parameters">
                 <span class ="title">Likes</span>
                 <span class = "info">${likes}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Views</span>
                 <span class = "info">${views}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Comments</span>
                 <span class = "info">${comments}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Downloads</span>
                 <span class = "info">${downloads}</span>
                 </div>
                 </div>
</li>`).join("");
    }
    
export function onLoading(element) {
  console.log("reset style", element);
  element.style.display = 'block';
  console.log("new style", element.style.display);
}


export function offLoading(element) {
  element.style.display = 'none';
}