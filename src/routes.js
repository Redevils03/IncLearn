const {
  getAllArticlesHandler, 
  getArticleById, 
  addArticleHandler, 
  deleteArticleByIdHandler, 
  editArticleByIdHandler} = require('./handler-articles')
const {
  getAllVideosHandler, 
  getVideoById, 
  addVideoHandler, 
  deleteVideoByIdHandler, 
  editVideoByIdHandler} = require('./handler-videos')

const routes = [
  {
    method: 'GET',
    path: '/articles',
    handler: getAllArticlesHandler
  },
  {
    method: 'GET',
    path: '/articles/{articleId}',
    handler: getArticleById,
  },
  {
    method: 'POST',
    path: '/articles',
    handler: addArticleHandler,
  },
  {
    method: 'PUT',
    path: '/articles/{articleId}',
    handler: editArticleByIdHandler
  },
  {
    method: 'DELETE',
    path: '/articles/{articleId}',
    handler: deleteArticleByIdHandler,
  },
  {
    method: 'GET',
    path: '/videos',
    handler: getAllVideosHandler
  },
  {
    method: 'GET',
    path: '/videos/{videoId}',
    handler: getVideoById
  },
  {
    method: 'POST',
    path: '/videos',
    handler: addVideoHandler,
  },
  {
    method: 'PUT',
    path: '/videos/{videoId}',
    handler: editVideoByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/videos/{videoId}',
    handler: deleteVideoByIdHandler
  }
]

module.exports = routes;