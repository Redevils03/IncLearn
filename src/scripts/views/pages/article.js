const Article = {
  async render() {
    return `
      <div class="content" style="min-height: 100%">
        <h2 style="margin: 50px 0; text-align: center">Halaman Artikel</h2>
        <search-bar class="search-bar"></search-bar>
        <article id="articles" class="articles">
          <div class="article-item">
            <div class="article-item__header">
              <img class="article-item__header__poster" src="./images/Learning-pana.png" alt="test">
            </div>
            <div class="article-item__content">
              <h3 class=""article__title">Test</h3>
              <span>author</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Temporibus ullam rem cumque qui officiis dolorem sint esse expedita voluptates, 
                aliquid non placeat labore totam itaque eos. Ipsa enim excepturi perferendis.
              </p>
            </div>
          </div>
          <div class="article-item">
            <div class="article-item__header">
              <img class="article-item__header__poster" src="./images/Vowels-amico.png" alt="test">
            </div>
            <div class="article-item__content">
              <h3 class=""article__title">Test</h3>
              <span>author</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Temporibus ullam rem cumque qui officiis dolorem sint esse expedita voluptates, 
                aliquid non placeat labore totam itaque eos. Ipsa enim excepturi perferendis.
              </p>
            </div>
          </div>
          <div class="article-item">
            <div class="article-item__header">
              <img class="article-item__header__poster" src="./images/Webinar-pana.png" alt="test">
            </div>
            <div class="article-item__content">
              <h3 class=""article__title">Test</h3>
              <span>author</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Temporibus ullam rem cumque qui officiis dolorem sint esse expedita voluptates, 
                aliquid non placeat labore totam itaque eos. Ipsa enim excepturi perferendis.
              </p>
            </div>
          </div>
        </article>
      </div>
    `;
  },
};

export default Article;
