import UserModel from '../models/user'
import { MD5, SHA256 } from 'crypto-js'
import jwt from 'jsonwebtoken'
import config from '../config'

exports.loginPost = async (ctx, next) => {
    var req = ctx.request,
        password = SHA256(req.body.password),
        email = req.body.email;
    var result = await UserModel.findOne({
        password: password.toString(),
        email: email
    });
    if (result && result._id) {
        var token = jwt.sign({ id: result._id, exp: Date.now() }, config.appKey);
        console.log('登录成功！！！');
        ctx.cookies.set('jwt', token, { overwrite: true, httpOnly: true });
        ctx.response.body = { token: token };
    } else {
        result = await UserModel.findOne({
            email: email
        });
        if (result && result._id) {
            console.log("密码出错！");
        } else {
            console.log("该邮箱并未认证！");
        }
        ctx.throw(400);
    }
}

exports.loginGet = async (ctx, next) => {
    console.log("login Page");
    ctx.response.body = `<h1>Login</h1>
        <form action="/login" method="post">
            <p>Password: <input name="password" type="password"></p>
            <p>Email: <input name="email" type="text"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
}

