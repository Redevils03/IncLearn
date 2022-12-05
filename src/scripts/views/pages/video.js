import createVideoTemplate from '../templates/video-template';

const Video = {
  async render() {
    return `
      <div class="content" style="min-height: 100%">
        <search-bar class="search-bar"></search-bar>
        <article id="videos" class="videos">

        </article>
      </div>
    `;
  },

  async afterRender() {
    const videoTemplate = document.querySelector('#videos');
    videoTemplate.innerHTML = createVideoTemplate();
  },
};

export default Video;
