import IncelarnSource from '../../data/inclearn-source';
import { createVideoTemplate } from '../templates/template-creator';

const Video = {
  async render() {
    return `
      <div class="content">
        <search-bar class="search-bar"></search-bar>
        <div id="videos" class="videos">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const videos = await IncelarnSource.getVideos();
    const videoTemplate = document.querySelector('#videos');
    videos.forEach((video) => {
      videoTemplate.innerHTML += createVideoTemplate(video);
    });
  },
};

export default Video;
