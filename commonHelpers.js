import{a as k,i as u,S as w}from"./assets/vendor-f144e563.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const L="https://pixabay.com",$="/api/";async function q(e,o,n,a){const t=new URLSearchParams({key:e,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${n}`,per_page:a}),r=`${L}${$}?${t}`;return(await k.get(r)).data}function C(e){return console.log("totalHits",e.totalHits),e.map(({tags:o,likes:n,views:a,comments:t,downloads:r,previewURL:i,largeImageURL:y})=>`<li class="gallery-item">
  <a class="gallery-link" href="${y}">
    <img
      class="gallery-image"
      src="${i}"
      data-source="${y}"
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
                 <span class = "info">${a}</span>
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
</li>`).join("")}function p(e){e.style.display="block"}function s(e){e.style.display="none"}const E="43441081-c9c9daac9af91d4227dda2db1";let c=1;const m={keySearch:""},b=15,S=document.querySelector(".feedback-form"),f=document.querySelector(".list"),g=document.querySelector(".loader"),l=document.querySelector(".loaderbtn"),d=document.querySelector(".loadermorebtn"),N=document.querySelector("button[data-more]");S.addEventListener("input",O);S.addEventListener("submit",P);N.addEventListener("click",B);s(g);s(l);s(d);function P(e){c=1,f.innerHTML="",m.keySearch=e.target.keySearch.value,v(e)}function B(e){p(l),c+=1,v(e)}function O(e){}function v(e){if(e.preventDefault(),c==1&&(f.innerHTML=""),p(l),m.keySearch.trim()=="")return s(l),u.error({message:"Sorry, there is no search request. You must enter a keyword.",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});q(E,m.keySearch,c,b).then(o=>{if(s(l),p(d),o.totalHits<=c*b&&o.hits.length>0&&(s(d),u.error({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"})),o.hits.length===0)return s(g),s(d),u.error({message:"Sorry, there are no images matching your search query, or the search query is incorrect. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});f.insertAdjacentHTML("beforeend",C(o.hits)),h.refresh();const a=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"})}).catch(o=>{s(g),u.error({message:`${o}`})}).finally(()=>{})}let h=new w(".list a",{captionsData:"alt",captionClass:"text-center",captionDelay:250,overlayOpacity:.8});h.on("show.simplelightbox",function(){});h.on("error.simplelightbox",function(e){console.log(e)});
//# sourceMappingURL=commonHelpers.js.map
