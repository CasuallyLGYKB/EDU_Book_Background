import UserModel from '../models/user'

exports.login = async(ctx, next) => {
    var name = ctx.request.body.name,password = ctx.request.body.password,email = ctx.request.body.email;
    console.log(ctx.request.body);
    ctx.set('Access-Control-Allow-Origin','*'); 
    ctx.response.status = 200;
    ctx.response.type = 'application/json';
    ctx.response.body = {name:name,password:password};
}