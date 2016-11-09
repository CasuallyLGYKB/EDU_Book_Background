import send from 'koa-send'

module.exports = function () {
  return async (ctx, next) => {
    if(/^\/(mark|square|feed|feeds|post|posts|me|search)/.test(ctx.request.url)) {
      await send(ctx, '/public/index.html')
    }
    await next()
  }
}
