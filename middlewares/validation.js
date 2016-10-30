import jwt from 'jsonwebtoken'
import config from '../config'

module.exports = function () {
  return async (ctx, next) => {
    //从cookie中获取token签名
    var token = ctx.cookies.get('jwt');
    //设置可以进行跨域访问
    ctx.set('Access-Control-Allow-Origin', '*');
    if (token !== undefined) {
      //把token追加到header中
      ctx.request.header.authorization = 'Bearer ' + token;
      //解析jwt的token
      var verifyPromise = Promise.promisify(jwt.verify);
      await verifyPromise(token, config.appKey)
        .then(async (decoded) => {
          //获取当前用户在数据库中的id
          ctx.state._id = decoded._id;
          //console.log(decoded._id);
          //获取当前用户上一次登录的时间
          ctx.state.lastTime = decoded.exp;
        }, err => {
          //如果信息获取出错就把cookie置为null
          ctx.cookies.set('jwt', null, { overwrite: true, httpOnly: true });
        });
    }
    await next();
  }
}