import UserModel from '../models/user'
import { MD5, SHA256 } from 'crypto-js'
import jwt from 'jsonwebtoken'
import config from '../config'
exports.registPost = async (ctx, next) => {
  var user = null, result = null, req = ctx.request,
    name = req.body.name,
    password = SHA256(req.body.password),
    email = req.body.email;
  user = new UserModel({
    name: name,
    password: password,
    email: email,
  });
  result = await user.save().catch(e => e);
  if (result && result._id) {
    var token = jwt.sign({id: result._id , k:'112233'}, config.appKey);
    console.log(result._id);
    console.log('success');
    console.log(token);
    ctx.cookies.set('jwt', token, {overwrite:true,httpOnly:true});
    ctx.response.body = {token:token};
  } else {
    console.log("邮箱或用户名已经被注册过了！！！");
  }
}

exports.registGet = async (ctx, next) => {
  ctx.response.status = 200;
  console.log("regist Page");
  ctx.response.body = `<h1>Test</h1>
        <form action="/regist" method="post">
            <p>Name: <input name="name" type="text"></p>
            <p>Password: <input name="password" type="password"></p>
            <p>Email: <input name="email" type="text"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
}