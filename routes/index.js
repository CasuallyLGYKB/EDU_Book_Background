import Router from 'koa-router'
import loginRouter from './login'
import registRouter from './regist'
import logoutRouter from './logout'
import settingRouter from './setting'
import releasebookRouter from './releasebook'
import findRouter from './find'

const router = new Router();

router.use('/login',loginRouter.routes(),loginRouter.allowedMethods());
router.use('/regist',registRouter.routes(),registRouter.allowedMethods());
router.use('/logout',logoutRouter.routes(),logoutRouter.allowedMethods());
router.use('/setting',settingRouter.routes(),settingRouter.allowedMethods());
router.use('/releasebook',releasebookRouter.routes(),releasebookRouter.allowedMethods());
router.use('/find',findRouter.routes(),findRouter.allowedMethods());
export default router;