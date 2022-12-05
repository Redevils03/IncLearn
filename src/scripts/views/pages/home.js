const Home = {
  async render() {
    return `
      <div class="content">
        <section id="hero" class="hero">
          <div class="hero_text">
            <h1>Selamat Datang !</h1>
            <p>Jadikanlah suasana belajarmu menjadi lebih menyenangkan, lebih asik, dan lebih seru hanya di</p>
            <h3>IncLearn</h3>
          </div>
          <div class="hero_image">
            <img src="./images/hero-image.png" alt="hero-image">
          </div>
        </section>
        <section id="product" class="product">
          <div class="product_image">
            <img src="./images/inclearn-logo_1.png" alt="inclearn-logo">
          </div>
          <div class="product_text">
            <h2>IncLearn</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Temporibus ullam rem cumque qui officiis dolorem sint esse expedita voluptates, 
              aliquid non placeat labore totam itaque eos. Ipsa enim excepturi perferendis.
            </p>
          </div>
        </section>
        <section id="feature">
          <div class="feature-header">
            <h2>Media Belajar</h2>
          </div>
          <div class="feature-body">
            <div class="feature-list">
              <img src="./images/Learning-pana.png">
              <a class="button" href="#/artikel"><span>Baca Artikel</span></a>
            </div>
            <div class="feature-list">
              <img src="./images/Webinar-pana.png">
              <a class="button" href="#/video"><span>Tonton Video</span></a>
            </div>
            <div class="feature-list">
              <img src="./images/Vowels-amico.png">
              <a class="button" href="#/permainan"><span>Permainan</span></a>
            </div>
          </div>
        </section>
      </div>
      `;
  },
};

export default Home;
