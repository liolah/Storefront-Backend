import { Router } from 'express';
import { index, show, create, destroy } from '../../controllers/usersController';

const routes = Router();

routes.get('/', index);
routes.get('/:userId', show);
routes.post('/', create);
routes.delete('/:userId', destroy);

export default routes;
