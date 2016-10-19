import Router from 'koa-router'
import loginController from '../controllers/loginController'

const router = new Router();

router.post('/',loginController.login);

export default router;