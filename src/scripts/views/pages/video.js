/* eslint-disable linebreak-style */
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
    const showVideos = (videoItem) => {
      videoTemplate.innerHTML = '';
      if (videoItem.length === 0) {
        videoTemplate.innerHTML += `
          <p class="searchNotFound">Mohon Maaf, Pencarian Anda Tidak Dapat Ditemukan!</p>
        `;
      }
      videoItem.forEach((video) => {
        videoTemplate.innerHTML += createVideoTemplate(video);
      });
    };
    showVideos(videos);

    const searchInput = document.querySelector('search-bar').shadowRoot.getElementById('searchElement');
    searchInput.addEventListener('keyup', (event) => {
      const searchResult = [];
      videos.forEach((video) => {
        if (video.title.toLowerCase().includes(event.target.value.toLowerCase())) {
          searchResult.push(video);
        }
      });

      showVideos(searchResult);
    });
  },
};

export default Video;
