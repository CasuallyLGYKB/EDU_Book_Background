import mongoose from 'mongoose'
var Schema = mongoose.Schema;

const BookSchema = new Schema({
  //书籍名称
  bookName: { type: String, required: true },
  //书籍的价格
  price: { type: Number, required: true },
  //书籍创建时间
  createdTime: { type: Date, default: Date.now() },
  //发布书籍的用户
  releaseUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  //交换书籍的方式
  swapMode: { type: String, required: true },
  //书籍的新旧程度
  appearanceLevel: { type: String, required: true },
  //对书籍的介绍
  bookIntroduce: { type: String, default: "当前用户并没有对此书进行任何介绍" }
});

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;