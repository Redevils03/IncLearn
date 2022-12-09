/* eslint-disable linebreak-style */
const createArticleTemplate = (article) => `
  <a class="click-detail" href="${`/#/detail/${article.id}`}"><div class="card-item">
    <div class="card-item__header">
      <img class="card-item__header__poster" src="${article.image}" alt="${article.title}">
    </div>
    <div class="card-item__content">
      <h3 class="card__title">${article.title}</h3>
      <span>oleh: ${article.from}</span>
      <p>${article.body}</p>
    </div>
  </div></a>
`;

const createArticleDetailTemplate = (article) => {
  let articleContentContainer = '';
  article.body.forEach((paragraph) => {
    articleContentContainer += `<p class="article-content">${paragraph}</p><br>`;
  });

  return `
    <div class="card-item__article-detail">
      <h2>${article.title}</h2>
      <img class="card-item__header__poster" src="${article.image}" alt="${article.title}">
      <p class="article-info">Taken from: <a href="${article.resource}">${article.from}</a> | ${article.updatedAt}</p>
      <div class="article-content-container">${articleContentContainer}</div>
    </div>
  `;
};

const createVideoTemplate = (video) => `
  <a class="click-detail" href="${`/#/detail-video/${video.id}`}"><div class="card-item">
    <div class="card-item__header">
    <img class="card-item__header__poster" src="./images/Learning-pana.png" alt="${video.title}">
    </div>
    <div class="card-item__content">
      <h3 class="card__title">${video.title}</h3>
    </div>
  </div></a>
`;

const createVideoDetailTemplate = (video) => {
  let videoContentContainer = '';
  video.desc.forEach((paragraph) => {
    videoContentContainer += `<p class="article-content">${paragraph}</p><br>`;
  });

  return `
    <div class="card-item__article-detail">
      <h2>${video.title}</h2>
      <iframe height='500' src="${video.link}" alt="${video.title}" frameborder='0' allowFullScreen></iframe>
      <h3>Transkrip:</h3>
      <div class="article-content-container">${videoContentContainer}</div>
    </div>
  `;
};

export {
  createArticleTemplate,
  createArticleDetailTemplate,
  createVideoTemplate,
  createVideoDetailTemplate,
};
