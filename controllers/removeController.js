import BookModel from '../models/book'
import UserModel from '../models/user'

exports.removeOneBookGet = async (ctx, next) => {
  /**
   * 根据id来删除书籍
   * localhost:3000/remove/book/582c015dd65bc41b846a5510
   */
  console.log('remove book') 
  var result = null,
    bookId = ctx.params.id,
    userId = ctx.state._id
  result = await BookModel.remove({ _id: bookId }).then(() => {
    UserModel.update( { _id: userId}, { "$pull": { releaseBook:bookId }}).catch(e => e)
    return 'delete success'
  }).catch(e => console.log(e))
  ctx.body = result.result 
  ctx.status = 200 
}