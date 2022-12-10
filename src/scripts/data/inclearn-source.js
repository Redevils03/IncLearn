/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class IncelarnSource {
  static async getArticles() {
    const response = await fetch(API_ENDPOINT.ARTICLES);
    const responseJson = await response.json();
    return responseJson.data.articles;
  }

  static async getVideos() {
    const responese = await fetch(API_ENDPOINT.VIDEOS);
    const responseJson = await responese.json();
    return responseJson.data.videos;
  }

  static async detailArticle(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_ARTICLE(id));
    const responseJson = await response.json();
    return responseJson.data.article;
  }

  static async detailVideo(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_VIDEO(id));
    const responseJson = await response.json();
    return responseJson.data.video;
  }
}

export default IncelarnSource;
