import jwt from 'jsonwebtoken'
import config from '../config'

module.exports = function () {
  return async (ctx, next) => {
    var token = ctx.cookies.get('jwt');
    ctx.set('Access-Control-Allow-Origin', '*');
    if (token !== undefined) {
      ctx.request.header.authorization = 'Bearer ' + token;
      var Promise = require('bluebird');
      var verifyPromise = Promise.promisify(jwt.verify);
      await verifyPromise(token, config.appKey)
        .then(async (decoded) => {
          ctx.state.lastTime = decoded.exp;
        }, err => {
          ctx.cookies.set('jwt', null, { overwrite: true, httpOnly: true });
          token = ctx.cookies.get('jwt') + "123123";
        });
    }
    await next();
  }
}