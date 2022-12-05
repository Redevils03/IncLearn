import createArticleTemplate from '../templates/article-template';

const Article = {
  async render() {
    return `
      <div class="content" style="min-height: 100%">
        <search-bar class="search-bar"></search-bar>
        <article id="articles" class="articles">
          
        </article>
      </div>
    `;
  },

  async afterRender() {
    const articleContainer = document.querySelector('#articles');
    articleContainer.innerHTML = createArticleTemplate();
  },
};

export default Article;
