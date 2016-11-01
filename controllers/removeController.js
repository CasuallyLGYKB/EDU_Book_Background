import BookModel from '../models/book'

exports.removeOneBookGet = async (ctx, next) => {
  /**
   * 根据id来删除书籍
   * localhost:3000/remove/book/58187e54d63a47035888c22b
   */
  console.log('remove book');
  var result = null,
    id = ctx.params.id;
  result = await BookModel.remove({ _id: id }).catch(e => console.log(e));
  ctx.body = result.result;
  ctx.status = 200;
}