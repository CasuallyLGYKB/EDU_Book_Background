import Router from 'koa-router'
import checkCookies from '../middlewares/checkCookies'
import releaseBookController from '../controllers/releaseBookController'

const router = new Router();

router.post('/',checkCookies.checkCookiesTime,releaseBookController.releaseBookPost);
router.get('/',releaseBookController.releaseBookGet);
export default router;