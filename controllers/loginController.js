import UserModel from '../models/user'
import { MD5, SHA256 } from 'crypto-js'
import jwt from 'koa-jwt'

exports.loginPost = async (ctx, next) => {
    var req = ctx.request,
        name = req.body.name,
        password = SHA256(req.body.password),
        email = req.body.email;
    var result = await UserModel.findOne({
        name: name,
        password: password.toString(),
        email: email
    });
    console.log(result);
    if (result && result._id) {
        console.log('登录成功！！！');
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.response.status = 200;
        ctx.response.type = 'application/json';
        ctx.response.body = { name: name, password: password, email: email };
    } else {
        ctx.throw(400, 'some information wrong!');
        console.log('登录信息不匹配！');
    }
}

exports.loginGet = async (ctx, next) => {
    ctx.response.status = 200;
    console.log("login Page");
    console.log(ctx.cookies.get('jwt'));
    ctx.response.body = `<h1>Login</h1>
        <form action="/login" method="post">
            <p>Name: <input name="name" type="text"></p>
            <p>Password: <input name="password" type="password"></p>
            <p>Email: <input name="email" type="text"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
}