import{i as m,S as f}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h=({webformatURL:i,largeImageURL:o,tags:r,likes:s,views:e,comments:t,downloads:a})=>`
  <a href="${o}" class="gallery__item">
  <img src="${i}" alt="${r}" class="gallery__image" />
  <div class="info">
<p class="info-item"><b>Likes</b> ${s}</p>
<p class="info-item"><b>Views</b> ${e}</p>
<p class="info-item"><b>Comments</b> ${t}</p>
<p class="info-item"><b>Downloads</b> ${a}</p>
</div>
</a>
`,u="https://pixabay.com/api/",p=i=>{const o=new URLSearchParams({key:"45517792-9e921d102392e39380fbae016",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${u}?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})};fetch(`${u}?key=45517792-9e921d102392e39380fbae016&q=userSerch&image_type=photo&orientation=horizontal&safesearch=true`);const n=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),c=document.createElement("div");c.classList.add("loading-indicator","hidden");document.body.appendChild(c);function y(){c.classList.remove("hidden")}function d(){c.classList.add("hidden")}const g=i=>{i.preventDefault();const o=n.elements.user_query.value.trim();y(),p(o).then(r=>{if(r.total===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="",n.reset(),d();return}const s=r.hits.map(t=>h(t)).join("");l.innerHTML=s,new f(".js-gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.7}).refresh()}).catch(r=>{console.error(r)}).finally(()=>{d(),n.reset()})};n.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
