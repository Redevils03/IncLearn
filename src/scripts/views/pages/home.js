const Home = {
  async render() {
    return `
      <div class="content">
        <div class="hero">
          <div class="hero_text">
            <h1>Selamat Datang !</h1>
            <p>Jadikanlah suasana belajarmu menjadi lebih menyenangkan, lebih asik, dan lebih seru hanya di</p>
            <h3>IncLearn</h3>
          </div>
          <div class="hero_image">
            <img src="./images/hero-image.png" alt="hero-image">
          </div>
        </div>
        <article id="article" class="article">
          <div class="article_image">
            <img src="./images/inclearn-logo_1.png" alt="inclearn-logo">
          </div>
          <div class="article_text">
            <h2>IncLearn</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Temporibus ullam rem cumque qui officiis dolorem sint esse expedita voluptates, 
              aliquid non placeat labore totam itaque eos. Ipsa enim excepturi perferendis.
            </p>
          </div>
        </article>
        <div class="learning-header">
          <h2>Media Belajar</h2>
        </div>
        <div class="learning-body">
          <div class="content-media">
            <div class="feature-list" style="display: flex; flex-direction: column; justify-content: center">
              <img style="width: 300px; padding: 40px;" src="./images/Learning-pana.png">
              <a href="#/artikel">Baca Artikel</a>
            </div>
            <div class="feature-list" style="display: flex; flex-direction: column; justify-content: center">
              <img style="width: 300px; padding: 40px;" src="./images/Webinar-pana.png">
              <a href="#/video">Tonton Video</a>
            </div>
            <div class="feature-list" style="display: flex; flex-direction: column; justify-content: center">
              <img style="width: 300px; padding: 40px;" src="./images/Vowels-amico.png">
              <a href="#/permainan">Permainan</a>
            </div>
          </div>
        </div>
      </div>
      `;
  },
};

export default Home;
