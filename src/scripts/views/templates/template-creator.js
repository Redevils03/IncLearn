const createArticleTemplate = (article) => `
  <a class="click-detail" href="${`/#/detail/${article.id}`}"><div class="card-item">
    <div class="card-item__header">
      <img class="card-item__header__poster" src="${article.image}" alt="${article.title}">
    </div>
    <div class="card-item__content">
      <h3 class=""card__title">${article.title}</h3>
      <span>${article.from}</span>
      <p>${article.body}</p>
    </div>
  </div></a>
`;

const createArticleDetailTemplate = (article) => `
  <img class="card-item__header__poster" src="${article.image}" alt="${article.title}">
  <p>${article.body}</p>
`;

const createVideoTemplate = (video) => `
  <div class="card-item">
    <div class="card-item__header">
    <iframe width='400' height='300' src="http://www.youtube.com/embed/WJmzSr0VNxI" frameborder='0' allowFullScreen></iframe>
    </div>
    <div class="card-item__content">
      <h3 class=""card__title">${video.title}</h3>
      <span>${video.desc}</span>
    </div>
  </div>
`;

export { createArticleTemplate, createArticleDetailTemplate, createVideoTemplate };
