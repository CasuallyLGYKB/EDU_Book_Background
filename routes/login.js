import Router from 'koa-router'
import loginController from '../controllers/loginController'

const router = new Router();

router.post('/',loginController.loginPost);

router.get('/',loginController.loginGet);

export default router;