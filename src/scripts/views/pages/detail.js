import IncelarnSource from '../../data/inclearn-source';
import UrlParser from '../../routes/url-parser';
import { createArticleDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="content">
        <article class="article" id="article"></article>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const article = await IncelarnSource.detailArticle(url.id);
    const articleTemplate = document.querySelector('#article');
    articleTemplate.innerHTML = createArticleDetailTemplate(article);
  },
};

export default Detail;
