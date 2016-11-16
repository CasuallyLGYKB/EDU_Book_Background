import UserModel from '../models/user'
import BookModel from '../models/book'
import { MD5, SHA256 } from 'crypto-js'

exports.userMsgSetPost = async (ctx, next) => {
  var result = null, req = ctx.request,
    school = req.body.school,
    address = req.body.address,
    id = ctx.state._id;
  result = await UserModel.update({ _id: id }, { setMsg: { school: school, address: address }}).catch(e => e);
  console.log(result);
}

exports.userMsgSetGet = async (ctx, next) => {
  console.log("userMsgSet Page");
  ctx.response.body = `<h1>userMsgSet</h1>
        <form action="/setting/usermsg" method="post">
            <p>Address: <input name="address" type="text"></p>
            <p>School: <input name="school" type="text"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
}

exports.bookMsgSetPost = async (ctx, next) => {
  /**
   * 根据id来修改书籍的信息
   */
  var result = null,
    id = ctx.params.id,
    message = ctx.request.body;
  console.log(id);
  console.log(message);
  result = await BookModel.update({ _id: id }, message).catch(e => console.log(e));
  ctx.body = result;
  console.log(result);
}

exports.bookMsgSetGet = async (ctx, next) => {
  console.log("BookMsgSet Page");
  ctx.response.body = `<h1>BookMsgSet</h1>
         <form action="/setting/bookmsg/5816b85eb5d2f714f417a8eb" method="post">
            <p>BookName: <input name="bookName" type="text"></p>
            <p>Price: <input name="price" type="text"></p>
            <p>SwapMode: <input name="swapMode" type="text"></p>
            <p>AppearanceLevel: <input name="appearanceLevel" type="text"></p>
            <p>BookIntroduce: <input name="bookIntroduce" type="text"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
}