import Router from 'koa-router'
import checkCookies from '../middlewares/checkCookies'
import findMsgController from '../controllers/findMsgController'

const router = new Router();

router.get('/book/all', checkCookies.checkCookiesTime, findMsgController.findAllBookGet);
router.get('/book/:id', checkCookies.checkCookiesTime, findMsgController.findOneBookGet);

export default router;