import { Router } from 'express';
import { verifyAuthToken } from '../../middlewares/authToken';
import { index, show, create, destroy } from '../../controllers/productsController';
import { mostPopularProducts, getProductsByCategory } from '../../handlers/productsServicesHandler';

const routes = Router();

routes.get('/', index);
routes.get('/MostPopular', mostPopularProducts);
routes.get('/category/:category', getProductsByCategory);
routes.get('/:productId', show);
routes.post('/', verifyAuthToken, create);
routes.delete('/:productId', destroy);

export default routes;
