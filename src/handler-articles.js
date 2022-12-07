const {nanoid} = require('nanoid');
const articles = require('./articles');

const addArticleHandler = (request, h) => {
  const {title, image, article, body, from, resource} = request.payload;

  const id = nanoid(15);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  
  const newArticle = {
    id, image, title, article, body, from, resource, insertedAt, updatedAt
  };
  const hasTitle = request.payload.hasOwnProperty('title')
  if (!hasTitle) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan artikel. Mohon isi nama judul artikel'
    });
    response.code(400);
    return response
  };

  articles.push(newArticle);

  const isSuccess = articles.filter((article) => article.id === id).length > 0;

  if(isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Artikel berhasil ditambahkan',
      data: {
        articleId: id,
      },
    });
    response.code(201);
    return response;
  } 
  const response = h.response({
    status: 'fail',
    message: 'Gagal menambahkan artikel, Mohon isi judul artikel',
  });
  response.code(500);
  return response;
};

const getAllArticlesHandler = () => ({
  status: 'success',
  data: {
    articles,
  },
});

const getArticleById = (request, h) => {
  const {articleId} = request.params;

  const article = articles.filter((article) => article.id === articleId)[0];

  if(article !== undefined) {
    return {
      status: 'success',
      data : {
        article,
      },
    };
  }
  const response = h.response({
    status: 'fail',
    message: 'Artikel tisak ditemukan'
  });
  response.code(404);
  return response;

};

const editArticleByIdHandler = (request, h) => {
  const {articleId} = request.params;

  const {title, image, body, from, resource} = request.payload;
  const updatedAt = new Date().toISOString();

  if(!title) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal mempebarui artikel. Mohon isi judul artikel',
  });
  response.code(400);
  return response;
  };

  const index = articles.findIndex((art) => art.id === articleId);

  if(index !== -1) {
    articles[index] = {
      ...articles[index],
      image,
      title,
      body,
      from,
      resource,
      updatedAt,
    };
    const response = h.response({
      status: 'success',
      message: 'Artikel berhasil diperbarui',
    })
    response.code(200);
    return response;
  };
};

const deleteArticleByIdHandler = (request, h) => {
  const {articleId} = request.params;

  const index = articles.findIndex((article) => article.id === articleId);

  if(index !== -1) {
    articles.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Artikel berhasil dihapus',
    });
    response.code(200)
    return response;
  };
  const response = h.response({
    status: 'fail',
    message: 'Artikel gagal dihapus. Id tidak ditemukan'
  });
  response.code(404);
  return response;
}

module.exports = {
  addArticleHandler, 
  getAllArticlesHandler, 
  getArticleById, 
  deleteArticleByIdHandler,
  editArticleByIdHandler
};