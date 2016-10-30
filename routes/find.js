import Router from 'koa-router'
import checkCookies from '../middlewares/checkCookies'
import findMsgController from '../controllers/findMsgController'

const router = new Router();

router.get('/all', checkCookies.checkCookiesTime, findMsgController.findAllBookGet);
router.get('/:id', checkCookies.checkCookiesTime, findMsgController.findOneBookGet);

export default router;