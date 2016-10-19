import Router from 'koa-router'

const router = new Router();

router.get('/', async (ctx, next) => {  
    ctx.response.status = 200;
    ctx.response.body = `<h1>Test</h1>
        <form action="/regist" method="post">
            <p>Name: <input name="name" type="text"></p>
            <p>Password: <input name="password" type="password"></p>
            <p>Email: <input name="email" type="text"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

export default router;


