import{a as L,i as d,S as k}from"./assets/vendor-f144e563.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const w="https://pixabay.com",$="/api/";async function C(e,o,n,s){const t=new URLSearchParams({key:e,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${n}`,per_page:s}),r=`${w}${$}?${t}`;return(await L.get(r)).data}function q(e){return console.log("totalHits",e.totalHits),e.map(({tags:o,likes:n,views:s,comments:t,downloads:r,previewURL:i,largeImageURL:h})=>`<li class="gallery-item">
  <a class="gallery-link" href="${h}">
    <img
      class="gallery-image"
      src="${i}"
      data-source="${h}"
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
</li>`).join("")}function u(e){e.style.display="block"}function a(e){e.style.display="none"}const P="43441081-c9c9daac9af91d4227dda2db1";let l=1;const p={keySearch:""},b=15,S=document.querySelector(".feedback-form"),m=document.querySelector(".list"),f=document.querySelector(".loader"),c=document.querySelector(".loaderbtn"),g=document.querySelector(".loadermorebtn"),E=document.querySelector("button[data-more]");S.addEventListener("input",O);S.addEventListener("submit",N);E.addEventListener("click",B);a(f);a(c);a(g);function N(e){l=1,m.innerHTML="",p.keySearch=e.target.keySearch.value,u(c),v(e)}function B(e){u(c),l+=1,v(e)}function O(e){}function v(e){if(e.preventDefault(),l==1&&(m.innerHTML=""),u(c),p.keySearch.trim()=="")return a(c),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});C(P,p.keySearch,l,b).then(o=>{if(a(c),u(g),o.totalHits<=l*b&&(a(g),d.error({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"})),o.hits.length===0)return a(f),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",messageColor:"white",backgroundColor:"red",progressBarColor:"black"});m.insertAdjacentHTML("beforeend",q(o.hits)),y.refresh();const s=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s.height*2,behavior:"smooth"})}).catch(o=>{a(f),d.error({message:`${o}`})}).finally(()=>{})}let y=new k(".list a",{captionsData:"alt",captionClass:"text-center",captionDelay:250,overlayOpacity:.8});y.on("show.simplelightbox",function(){});y.on("error.simplelightbox",function(e){console.log(e)});
//# sourceMappingURL=commonHelpers.js.map
