import IncelarnSource from '../../data/inclearn-source';
import UrlParser from '../../routes/url-parser';
import { createVideoDetailTemplate } from '../templates/template-creator';

const DetailVideo = {
  async render() {
    return `
      <div class="content">
        <article class="article" id="article"></article>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const article = await IncelarnSource.detailVideo(url.id);
    const articleTemplate = document.querySelector('#article');
    articleTemplate.innerHTML = createVideoDetailTemplate(article);
  },
};

export default DetailVideo;
