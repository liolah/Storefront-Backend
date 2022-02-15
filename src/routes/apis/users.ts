import { Router } from 'express';
import { index, show, create, destroy } from '../../controllers/usersController';
import { authorize } from '../../middlewares/authToken';

const routes = Router();

routes.get('/', index);
routes.get('/:userId', show);
routes.post('/', create);
routes.delete('/:userId',authorize, destroy);

export default routes;
