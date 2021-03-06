import mongoose from 'mongoose'
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  //用户姓名
  name: { type: String, required: true },
  //用户密码
  password: { type: String, required: true },
  //用户邮箱
  email: { type: String, required: true, unique: true },
  //用户信息设置字段
  setMsg: {
    //用户如果是学生就匹配相应的学校
    school: { type: String },
    //用户的地址
    address: { type: String },
  },
  //用户收藏的书籍列表
  starBook: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  //用户发布的书籍列表
  releaseBook: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  //用户创建的时间
  createdTime: { type: Date, default: Date.now() }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;