import Router from 'koa-router'
import checkCookies from '../middlewares/checkCookies'
import settingController from '../controllers/settingController'

const router = new Router();

router.post('/usermsg',checkCookies.checkCookiesTime,settingController.userMsgSetPost);
router.get('/usermsg',settingController.userMsgSetGet);
export default router;