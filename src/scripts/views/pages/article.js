/* eslint-disable linebreak-style */
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
    const showArticles = (articleItem) => {
      articleTemplate.innerHTML = '';
      if (articleItem.length === 0) {
        articleTemplate.innerHTML += `
          <p class="searchNotFound">Mohon Maaf, Pencarian Anda Tidak Dapat Ditemukan!</p>
        `;
      }
      articleItem.forEach((article) => {
        articleTemplate.innerHTML += createArticleTemplate(article);
      });
    };
    showArticles(articles);

    const searchInput = document.querySelector('search-bar').shadowRoot.getElementById('searchElement');
    searchInput.addEventListener('keyup', (event) => {
      const searchResult = [];
      articles.forEach((article) => {
        if (article.title.toLowerCase().includes(event.target.value.toLowerCase())) {
          searchResult.push(article);
        }
      });

      showArticles(searchResult);
    });
  },
};

export default Article;
