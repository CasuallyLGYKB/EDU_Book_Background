import Router from 'koa-router'
import loginRouter from './login'
import registRouter from './regist'

const router = new Router();

router.use('/login',loginRouter.routes(),loginRouter.allowedMethods());
router.use('/regist',registRouter.routes(),registRouter.allowedMethods());

export default router;