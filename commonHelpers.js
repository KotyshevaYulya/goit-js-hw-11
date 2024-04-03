import{S as u,i as a}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(o){return o.map(r=>`<li class = "gallery-item">
         <a class="gallery-link" href="${r.largeImageURL}">
         <img
         class = "gallery-image"
         src="${r.webformatURL}" 
         alt="${r.tags}" 
         width="1280"
         height="152"">
           <ul class="gallery-description">
             <li>
             <h3>Likes</h3>
             <p>${r.likes}</p>
             </li>
             <li>
             <h3>Views</h3>
             <p>${r.views}
             </p>
             </li>
             <li>
             <h3>Comments</h3>
             <p>${r.comments}</p>
             </li>
             <li>
             <h3>Downloads</h3>
             <p>${r.downloads}</p>
             </li>
             </ul>       
         </li>`).join("")}function p(o){const r="43135550-1722255432324a30f15700264",s="https://pixabay.com",i="/api/?key=",e=new URLSearchParams({q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${s}${i}${r}&${e}`;return fetch(t).then(n=>{if(!n.ok)throw new Error(response.status);return n.json()})}//!
const h=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".block");let d=new u(".gallery a");d.on("show.simplelightbox",function(){});d.on("error.simplelightbox",function(o){console.log(o)});h.addEventListener("submit",o=>{o.preventDefault(),l.classList.remove("hidden");const r=h.elements.query.value.trim();c.innerHTML='<div class="loader"></div>',r===""?(a.error({color:"red",position:"topRight",message:"Fill in the input!"}),l.classList.add("hidden")):p(r).then(s=>{if(s.total===0)a.error({color:"red",position:"topRight",message:'"Sorry, there are no images matching your search query. Please try again!"'}),o.target.reset(),l.classList.add("hidden");else{const i=m(s.hits);c.insertAdjacentHTML("beforeend",i),d.refresh(),o.target.reset(),l.classList.add("hidden")}}).catch(s=>{a.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, a technical error has occurred!"}),l.classList.add("hidden")}),c.innerHTML=""});
//# sourceMappingURL=commonHelpers.js.map
