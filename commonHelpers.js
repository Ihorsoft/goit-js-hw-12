import{a as S,i as d,S as v}from"./assets/vendor-f144e563.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const L="https://pixabay.com",w="/api/";async function k(e,o,n){const s=new URLSearchParams({key:e,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${n}`,per_page:15}),t=`${L}${w}?${s}`;return(await S.get(t)).data}function $(e){return e.map(({tags:o,likes:n,views:s,comments:t,downloads:r,previewURL:c,largeImageURL:g})=>`<li class="gallery-item">
  <a class="gallery-link" href="${g}">
    <img
      class="gallery-image"
      src="${c}"
      data-source="${g}"
      alt="${o}"
    />
  </a>
      <div class = "wrapper">
                 <div class = "parameters">
                 <span class ="title">Likes</span>
                 <span class = "info">${n}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Views</span>
                 <span class = "info">${s}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Comments</span>
                 <span class = "info">${t}</span>
                 </div>
                  <div class = "parameters">
                 <span class ="title">Downloads</span>
                 <span class = "info">${r}</span>
                 </div>
                 </div>
</li>`).join("")}function y(e){console.log("reset style",e),e.style.display="block",console.log("new style",e.style.display)}function a(e){e.style.display="none"}const q="43441081-c9c9daac9af91d4227dda2db1";let l=1;const u={keySearch:""},h=document.querySelector(".feedback-form"),p=document.querySelector(".list"),i=document.querySelector(".loader"),m=document.querySelector(".loaderbtn"),P=document.querySelector("button[data-more]");h.addEventListener("input",N);h.addEventListener("submit",C);P.addEventListener("click",E);a(i);a(m);function C(e){l=1,p.innerHTML="",u.keySearch=e.target.keySearch.value,b(e)}function E(e){y(m),l+=1,b(e),a(m)}function N(e){}function b(e){if(e.preventDefault(),l==1&&(p.innerHTML=""),y(i),u.keySearch.trim()=="")return a(i),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});k(q,u.keySearch,l).then(o=>{if(a(i),o.hits.length===0)return a(i),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});p.insertAdjacentHTML("beforeend",$(o.hits)),f.refresh();const s=document.querySelector(".gallery-item").getBoundingClientRect();console.log("Bounding:",s.height),window.scrollBy({top:s.height*2,behavior:"smooth"})}).catch(o=>{a(i),d.error({message:`${o}`})}).finally(()=>{})}let f=new v(".list a",{captionsData:"alt",captionClass:"text-center",captionDelay:250,overlayOpacity:.8});f.on("show.simplelightbox",function(){});f.on("error.simplelightbox",function(e){console.log(e)});
//# sourceMappingURL=commonHelpers.js.map
