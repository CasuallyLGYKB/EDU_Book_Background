import Router from 'koa-router'
import registController from '../controllers/registController'

const router = new Router();

router.post('/',registController.regist);

export default router;