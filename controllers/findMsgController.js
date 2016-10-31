import UserModel from '../models/user'
import BookModel from '../models/book.js'
import querystring from 'querystring'
import _ from 'underscore'

exports.findAllBookGet = async (ctx, next) => {
  /**
   * 排序api:
   * localhost:3000/find/book/all?swapMode=快递&price=20&order=price_des
   * order=
   *  1.price_des(降序) price_asc(升序)
   *  2.createdTime_des(降序) createdTime_asc(升序)
   *  3.appearanceLevel_des(新旧程度降序) appearanceLevel_asc(新旧程度升序)
   */
  var query = _.omit(ctx.request.query,'order'),
   condition = _.pick(ctx.request.query,'order').order.split('_'), 
   sortType = condition[1] == 'asc' ? 1 : -1, 
   conditions = querystring.parse(condition[0] + '=' + sortType);
  console.log(query);
  console.log(conditions);
  var books = await BookModel.find(query).sort(conditions).catch(e => console.log(e));
  console.log(books);
  if (books.length) {
    ctx.response.body = books;
    console.log("查找书籍成功！");
  } else {
    console.log("查找书籍失败！");
    ctx.status = 204;
  }
}

exports.findOneBookGet = async (ctx, next) => {
  //localhost:3000/find/book/:id
  //localhost:3000/find/book/5816b85eb5d2f714f417a8eb
  var id = ctx.params.id;
  var book = await BookModel.findById({_id:id}).catch(e => console.log(e));
  if (book && book._id) {
    console.log("查找书籍成功！");
    ctx.response.body = book;
  } else {
    console.log("查找书籍失败！");
    ctx.status = 204;
  }
}

