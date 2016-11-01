import Router from 'koa-router'
import checkCookies from '../middlewares/checkCookies'
import removeController from '../controllers/removeController'

const router = new Router();

router.get('/book/:id', checkCookies.checkCookiesTime, removeController.removeOneBookGet);

export default router;