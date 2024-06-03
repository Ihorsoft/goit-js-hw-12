import"./assets/styles-85a8419c.js";import{i as c,S as u}from"./assets/vendor-f144e563.js";const h="https://pixabay.com",f="/api/";function S(e,a){const i=new URLSearchParams({key:e,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});console.log("Export BASE_URL GET IMAGE",h);const l=`${h}${f}?${i}`;return fetch(l).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()}).catch(r=>iziToast.error({message:`${r}`}))}function b(e){return e.map(({tags:a,likes:i,views:l,comments:r,downloads:d,previewURL:y,largeImageURL:m})=>`<li class="gallery-item">
  <a class="gallery-link" href="${m}">
    <img
      class="gallery-image"
      src="${y}"
      data-source="${m}"
      alt="${a}"
    />
  </a>
      <div class = "wrapper">
                 <div class = "parameters">
                 <span class ="title">Likes</span>
                 <span class = "info">${i}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Views</span>
                 <span class = "info">${l}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Comments</span>
                 <span class = "info">${r}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Downloads</span>
                 <span class = "info">${d}</span>
                 </div>
                 </div>
</li>`).join("")}function k(e){e.style.display="block"}function o(e){e.style.display="none"}const $="https://pixabay.com",v="43441081-c9c9daac9af91d4227dda2db1",t={keySearch:""},n=document.querySelector(".feedback-form"),g=document.querySelector(".list"),s=document.querySelector(".loader");n.addEventListener("input",L);n.addEventListener("submit",w);o(s);function L(e){const a=e.target.name;return t[a]=e.target.value,t.keySearch}function w(e){if(e.preventDefault(),g.innerHTML="",k(s),t.keySearch.trim()=="")return o(s),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});console.log("BASE URL in main",$),S(v,t.keySearch).then(a=>{if(o(s),a.hits.length===0)return o(s),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});g.insertAdjacentHTML("beforeend",b(a.hits)),p.refresh(),n.reset(),t.keySearch=""}).catch(a=>{hideLoading(s),c.error({message:`${a}`})}).finally(()=>{n.reset()})}let p=new u(".list a",{captionsData:"alt",captionClass:"text-center",captionDelay:250,overlayOpacity:.8});p.on("show.simplelightbox",function(){});p.on("error.simplelightbox",function(e){console.log(e)});
//# sourceMappingURL=commonHelpers.js.map
