import UserModel from '../models/user'
import BookModel from '../models/book.js'
import querystring from 'querystring'

exports.findAllBookGet = async (ctx, next) => {
  /**
   * 排序api:
   * localhost:3000/find/all?school=华南师范大学&order=price_des
   * order=
   *  1.price_des(降序) price_asc(升序)
   *  2.createdTime_des(降序) createdTime_asc(升序)
   *  3.appearanceLevel_des(新旧程度降序) appearanceLevel_asc(新旧程度升序)
   */
  var query = ctx.request.query,
    condition = query.order.split('_');
  var sortType = condition[1] == 'asc' ? 1 : -1;
  var conditions = querystring.parse(condition[0]+'='+sortType);
  console.log(conditions);
  var books = await BookModel.find(query).catch(e => console.log(e));
  console.log(books);
  if(!books.length){
    ctx.response.body = books;
    console.log("查找书籍成功！");
  } else {
    console.log("查找书籍失败！");
    ctx.status = 204;
  }
}

exports.findOneBookGet = async (ctx, next) => {
  var query = ctx.request.query;
  var book = await BookModel.findOne(query).catch(e => console.log(e));
  if (book && book._id) {
    console.log("查找书籍成功！");
    ctx.response.body = book;
  } else {
    console.log("查找书籍失败！");
    ctx.status = 204;
  }
}

