import IncelarnSource from '../../data/inclearn-source';
import { createArticleTemplate } from '../templates/template-creator';

const Article = {
  async render() {
    return `
      <div class="content">
        <search-bar class="search-bar"></search-bar>
        <div id="articles" class="articles">
          
        </div>
      </div>
    `;
  },

  async afterRender() {
    const articles = await IncelarnSource.getArticles();
    const articleTemplate = document.querySelector('#articles');
    articles.forEach((article) => {
      articleTemplate.innerHTML += createArticleTemplate(article);
    });
  },
};

export default Article;
