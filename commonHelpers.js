import{i as h,S as p}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=r=>`
  <div class="img-container">
  <li class="gallery-card">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-img"
      src="${r.webformatURL}"
      alt="${r.tags}"
      width="360" height="200"
    />
    <div class="info">
<p><b>Likes:</b> ${r.likes}</p>
        <p><b>Views:</b> ${r.views}</p>
        <p><b>Coments:</b> ${r.comments}</p>
        <p><b>Downloads:</b> ${r.downloads}</p>
    </div>
  </a>
</li>
</div>`,u="https://pixabay.com/api/",f=r=>{const s=new URLSearchParams({key:"45517792-9e921d102392e39380fbae016",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${u}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})};fetch(`${u}?key=45517792-9e921d102392e39380fbae016&q=userSerch&image_type=photo&orientation=horizontal&safesearch=true`);const i=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),n=document.createElement("div");n.classList.add("loading-indicator","hidden");document.body.appendChild(n);function y(){n.classList.remove("hidden")}function d(){n.classList.add("hidden")}const g=r=>{r.preventDefault();const s=i.elements.user_query.value.trim();y(),f(s).then(o=>{if(o.total===0){h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="",i.reset(),d();return}const a=o.hits.map(t=>m(t)).join("");l.innerHTML=a,new p(".js-gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.7}).refresh()}).catch(o=>{console.error(o)}).finally(()=>{d(),i.reset()})};i.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
