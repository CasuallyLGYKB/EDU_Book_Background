import UserModel from '../models/user'
import { MD5, SHA256 } from 'crypto-js';
exports.regist = async(ctx,next) => {
  var user = null,result = null,req = ctx.request,
  name = req.body.name,
  password = SHA256(req.body.password),
  email = req.body.email;
  user = new UserModel({
    name: name,
    password: password,
    email: email,
  });
  result = await user.save().catch(e => e);
  if(result && result._id) {
    console.log(result._id);
    console.log('success');
    ctx.response.redirect('/login');
  } else {
    console.log("邮箱或用户名已经被注册过了！！！");
  }
}