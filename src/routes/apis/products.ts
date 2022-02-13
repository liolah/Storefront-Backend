import { Router } from 'express';
import { index, show, create, destroy } from '../../controllers/productsController';
import { mostPopularProducts, getProductsByCategory } from '../../handlers/productsServicesHandler';

const routes = Router();

routes.get('/', index);
routes.get('/:productId', show);
routes.get('/MostPopular', mostPopularProducts);
routes.get('/:category', getProductsByCategory);
routes.post('/', create);
routes.delete('/:productId', destroy);

export default routes;
