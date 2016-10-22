import Router from 'koa-router'
import loginRouter from './login'
import registRouter from './regist'
import logoutRouter from './logout'

const router = new Router();

router.use('/login',loginRouter.routes(),loginRouter.allowedMethods());
router.use('/regist',registRouter.routes(),registRouter.allowedMethods());
router.use('/logout',logoutRouter.routes(),logoutRouter.allowedMethods());

export default router;