import Home from '../views/pages/home';
import Article from '../views/pages/article';
import Video from '../views/pages/video';
import Game from '../views/pages/game';
import Detail from '../views/pages/detail';
import DetailVideo from '../views/pages/detail-video';

const routes = {
  '/': Home,
  '/artikel': Article,
  '/video': Video,
  '/permainan': Game,
  '/detail/:id': Detail,
  '/detail-video/:id': DetailVideo,
};

export default routes;
