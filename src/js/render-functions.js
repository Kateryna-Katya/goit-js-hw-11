export const createGalleryCardTemplate = imgInfo => {
  return `
  <div class="img-container">
  <li class="gallery-card">
  <a class="gallery-link" href="${imgInfo.largeImageURL}">
    <img
      class="gallery-img"
      src="${imgInfo.webformatURL}"
      alt="${imgInfo.tags}"
      width="360" height="200"
    />
    <div class="info">
<p><b>Likes:</b> ${imgInfo.likes}</p>
        <p><b>Views:</b> ${imgInfo.views}</p>
        <p><b>Coments:</b> ${imgInfo.comments}</p>
        <p><b>Downloads:</b> ${imgInfo.downloads}</p>
    </div>
  </a>
</li>
</div>`
}






