import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import MediaController from './app/controllers/MediaController';
import LikeController from './app/controllers/LikeController';
import CommentController from './app/controllers/CommentController';

const routes = new Router();

routes.get('/medias', MediaController.index);

routes.post(
  '/medias',
  multer(multerConfig).single('file'),
  MediaController.store
);

routes.post('/likes/:id', LikeController.store);

routes.post('/comments/id', CommentController.store);
routes.get('/comments/:id', CommentController.index);

export default routes;
