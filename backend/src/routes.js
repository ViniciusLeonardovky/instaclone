import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import MediaController from './app/controllers/MediaController';

const routes = new Router();

routes.get('/timeline', MediaController.index);

routes.post(
  '/posts',
  multer(multerConfig).single('file'),
  MediaController.store
);

export default routes;
