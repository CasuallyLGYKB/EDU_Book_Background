import UserModel from '../models/user'
import BookModel from '../models/book.js'

exports.findAllBookGet = async (ctx, next) => {
  //find?name=123123&school=123123&order=1
  var query = ctx.request.query;
  var condition = query.order;
  var books = await BookModel.find(query).sort(condition).catch(e => console.log(e));
  if(!books.length){
    ctx.response.body = books;
  } else {
    console.log("查找书籍失败！");
    ctx.status = 204;
  }
}

exports.findOneBookGet = async (ctx, next) => {
  var query = ctx.request.query;
  var book = await BookModel.findOne(query).catch(e => console.log(e));
  if(book && book._id) {
    ctx.response.body = book;
  } else {
    console.log("查找书籍失败！");
    ctx.status = 204;
  }
}

