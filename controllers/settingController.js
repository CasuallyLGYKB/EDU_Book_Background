import UserModel from '../models/user'
import { MD5, SHA256 } from 'crypto-js'

exports.userMsgSetPost = async (ctx, next) => {
  var result = null, req = ctx.request,
    school = req.body.school,
    address = req.body.address,
    email = req.body.email;
  var query = { email: email };
  result = await UserModel.update(query, { school: school ,address: address },{overwrite : true}).catch(e => e);
  // if (result && result._id) {
  //   console.log("用户信息更新完成！！");
  // } else {
  //   console.log("用户信息更新失败！！");
  // }
  console.log(result);
}

exports.userMsgSetGet = async (ctx, next) => {
  console.log("userMsgSet Page");
  ctx.response.body = `<h1>userMsgSet</h1>
        <form action="/setting/usermsg" method="post">
            <p>Address: <input name="address" type="text"></p>
            <p>School: <input name="school" type="text"></p>
            <p>Email: <input name="email" type="text"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
}