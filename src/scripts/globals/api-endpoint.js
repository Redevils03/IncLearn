import CONFIG from './config';

const API_ENDPOINT = {
  ARTICLES: `${CONFIG.BASE_URL}articles`,
  VIDEOS: `${CONFIG.BASE_URL}videos`,
  DETAIL_ARTICLE: (id) => `${CONFIG.BASE_URL}articles/${id}`,
  DETAIL_VIDEO: (id) => `${CONFIG.BASE_URL}videos/${id}`,
};

export default API_ENDPOINT;
