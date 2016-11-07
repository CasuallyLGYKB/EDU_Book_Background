exports.checkCookiesTime = async (ctx, next) => {
    var time = ctx.state.lastTime;
    if (Date.now() - time > 10000 * 1000) {
        console.log("超过10000s");
        //超出登录的期限需要重新登录
        ctx.cookies.set('jwt', null, { overwrite: true, httpOnly: true });
        ctx.throw(401);
    } else {
        await next();
    }
}