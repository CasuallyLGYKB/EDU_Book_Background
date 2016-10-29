import BookModel from '../models/book.js'
import UserModel from '../models/user'

exports.releaseBookPost = async (ctx, next) => {
  var book = null, result = null, req = ctx.request,
    userId = ctx.state._id,
    bookName = req.body.bookName,
    price = req.body.price,
    swapMode = req.body.swapMode,
    appearanceLevel = req.body.appearanceLevel,
    bookIntroduce = req.body.bookIntroduce;
  var releaseUser = await UserModel.findById({ _id: userId }).catch(e => e);
  console.log(releaseUser.name);
  book = new BookModel({
    bookName: bookName,
    price: price,
    releaseUser: releaseUser,
    swapMode: swapMode,
    appearanceLevel: appearanceLevel,
    bookIntroduce: bookIntroduce
  });
  result = await book.save().catch(e => e);
  if (result && result._id) {
    ctx.status = 200;
    console.log('success');
  } else {
    console.log('发布书籍失败！');
  }
}

exports.releaseBookGet = async(ctx, next) => {
  console.log("RealseBook Page");
  ctx.response.body = `<h1>RealseBook</h1>
        <form action="/releasebook" method="post">
            <p>BookName: <input name="bookName" type="text"></p>
            <p>Price: <input name="price" type="text"></p>
            <p>SwapMode: <input name="swapMode" type="text"></p>
            <p>AppearanceLevel: <input name="appearanceLevel" type="text"></p>
            <p>BookIntroduce: <input name="bookIntroduce" type="text"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
}