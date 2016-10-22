import Router from 'koa-router'
import checkCookies from '../middlewares/checkCookies'
import logoutController from '../controllers/logoutController'

const router = new Router();

router.post('/', checkCookies.checkCookiesTime, logoutController.logoutPost);
router.get('/', logoutController.logoutGet);

export default router;