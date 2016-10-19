import UserModel from '../models/user'
import { MD5, SHA256 } from 'crypto-js';
exports.regist = async(ctx,next) => {
  var user = null,result = null,
  name = ctx.request.body.name,
  password = SHA256(ctx.request.body.password),
  email = ctx.request.body.email;
  user = new UserModel({
    name: name,
    password: password,
    email: email,
  });
  result = await user.save().catch(e => e);
  if(result && result._id) {
    console.log(result._id);
    console.log('success');
  }
}