import{i as u,S}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const v="https://pixabay.com",w="/api/";function L(e,o,n){const s=new URLSearchParams({key:e,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${n}`,per_page:15}),t=`${v}${w}?${s}`;return fetch(t).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()}).catch(r=>iziToast.error({message:`${r}`}))}function $(e){return e.map(({tags:o,likes:n,views:s,comments:t,downloads:r,previewURL:c,largeImageURL:g})=>`<li class="gallery-item">
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
</li>`).join("")}function y(e){console.log("reset style",e),e.style.display="block",console.log("new style",e.style.display)}function a(e){e.style.display="none"}const k="43441081-c9c9daac9af91d4227dda2db1";let l=1;const d={keySearch:""},h=document.querySelector(".feedback-form"),p=document.querySelector(".list"),i=document.querySelector(".loader"),m=document.querySelector(".loaderbtn"),q=document.querySelector("button[data-more]");h.addEventListener("input",E);h.addEventListener("submit",P);q.addEventListener("click",C);a(i);a(m);function P(e){l=1,p.innerHTML="",d.keySearch=e.target.keySearch.value,b(e)}function C(e){y(m),l+=1,b(e),a(m)}function E(e){}function b(e){if(e.preventDefault(),l==1&&(p.innerHTML=""),y(i),d.keySearch.trim()=="")return a(i),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});L(k,d.keySearch,l).then(o=>{if(a(i),o.hits.length===0)return a(i),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});p.insertAdjacentHTML("beforeend",$(o.hits)),f.refresh();const s=document.querySelector(".gallery-item").getBoundingClientRect();console.log("Bounding:",s.height),window.scrollBy({top:s.height*2,behavior:"smooth"})}).catch(o=>{a(i),u.error({message:`${o}`})}).finally(()=>{})}let f=new S(".list a",{captionsData:"alt",captionClass:"text-center",captionDelay:250,overlayOpacity:.8});f.on("show.simplelightbox",function(){});f.on("error.simplelightbox",function(e){console.log(e)});
//# sourceMappingURL=commonHelpers.js.map
