import{i as l,S as u}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function m(o){return o.map(t=>`<li class = "gallery-item">
         <a class="gallery-link" href="${t.largeImageURL}">
         <img
         class = "gallery-image"
         src="${t.webformatURL}" 
         alt="${t.tags}" 
         width="1280"
         height="152"">
           <ul class="gallery-description">
             <li>
             <h3>Likes</h3>
             <p>${t.likes}</p>
             </li>
             <li>
             <h3>Views</h3>
             <p>${t.views}
             </p>
             </li>
             <li>
             <h3>Comments</h3>
             <p>${t.comments}</p>
             </li>
             <li>
             <h3>Downloads</h3>
             <p>${t.downloads}</p>
             </li>
             </ul>       
         </li>`).join("")}function p(o){const t="43135550-1722255432324a30f15700264",s="https://pixabay.com",i="/api/?key=",e=new URLSearchParams({q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${s}${i}${t}&${e}`;return fetch(r).then(n=>n.json())}//!
const a=document.querySelector(".search-form"),c=document.querySelector(".gallery");a.addEventListener("submit",o=>{o.preventDefault();const t=a.elements.query.value;t===""?l.error({color:"red",position:"topRight",message:"Будь ласка введіть дані!"}):p(t).then(s=>{if(s.total===0)l.error({color:"red",position:"topRight",message:'"Sorry, there are no images matching your search query. Please try again!"'}),o.target.reset();else{c.innerHTML="";const i=m(s.hits);c.insertAdjacentHTML("beforeend",i),o.target.reset(),new u(".gallery a",{captionsData:"alt",captionDelay:250})}})});
//# sourceMappingURL=commonHelpers.js.map
