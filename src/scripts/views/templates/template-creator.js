/* eslint-disable linebreak-style */
const createArticleTemplate = (article) => `
  <a class="click-detail" href="${`/#/detail/${article.id}`}"><div class="card-item">
    <div class="card-item__header">
      <img class="card-item__header__poster" src="${article.image}" alt="${article.title}">
    </div>
    <div class="card-item__content">
      <h3 class="card__title">${article.title}</h3>
      <span>${article.from}</span>
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
  <div class="card-item">
    <div class="card-item__header">
    <iframe width='400' height='300' src="${video.link}" frameborder='0' allowFullScreen></iframe>
    </div>
    <div class="card-item__content">
      <h3 class="card__title">${video.title}</h3>
      <p>${video.desc}</p>
    </div>
  </div>
`;

export { createArticleTemplate, createArticleDetailTemplate, createVideoTemplate };
