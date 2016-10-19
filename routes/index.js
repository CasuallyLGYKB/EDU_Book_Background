import Router from 'koa-router'
import homeRouter from './home'
import loginRouter from './login'
import registRouter from './regist'

const router = new Router();

router.use('/login',loginRouter.routes(),loginRouter.allowedMethods());
router.use('/',homeRouter.routes(),homeRouter.allowedMethods());
router.use('/regist',registRouter.routes(),registRouter.allowedMethods());

export default router;