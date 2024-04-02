import{S as h,i as l}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function m(o){return o.map(r=>`<li class = "gallery-item">
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
         </li>`).join("")}function p(o){const r="43135550-1722255432324a30f15700264",i="https://pixabay.com",s="/api/?key=",e=new URLSearchParams({q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${i}${s}${r}&${e}`;return fetch(t).then(n=>{if(!n.ok)throw new Error(response.status);return n.json()})}//!
const u=document.querySelector(".search-form"),a=document.querySelector(".gallery");let c=new h(".gallery a");c.on("show.simplelightbox",function(){});c.on("error.simplelightbox",function(o){console.log(o)});u.addEventListener("submit",o=>{o.preventDefault();const r=u.elements.query.value.trim();a.innerHTML='<div class="loader"></div>',r===""?l.error({color:"red",position:"topRight",message:"Fill in the input!"}):p(r).then(i=>{if(i.total===0)l.error({color:"red",position:"topRight",message:'"Sorry, there are no images matching your search query. Please try again!"'}),o.target.reset();else{const s=m(i.hits);a.insertAdjacentHTML("beforeend",s),c.refresh(),o.target.reset()}}).catch(i=>{l.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, a technical error has occurred!"})}),a.innerHTML=""});
//# sourceMappingURL=commonHelpers.js.map
