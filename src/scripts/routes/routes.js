import Home from '../views/pages/home';
import Article from '../views/pages/article';
import Video from '../views/pages/video';
import Game from '../views/pages/game';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/artikel': Article,
  '/video': Video,
  '/permainan': Game,
  '/detail/:id': Detail,
};

export default routes;
