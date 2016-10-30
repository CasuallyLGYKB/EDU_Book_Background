import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import unless from 'koa-unless'
import mongoose from 'mongoose'
import jwt from 'koa-jwt'
import config from './config'
import router from './routes/index'
import validation from './middlewares/validation'

//链接数据库
mongoose.connect(`mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.dbname}`);
//把mongoose的写法转换成Promise调用
mongoose.Promise = require('bluebird');
global.Promise = require('bluebird');

const app = new Koa();
//提取cookie进行判断是否登录超出期限以及jwt是否签名是否符合
app.use(validation());
app.use(jwt({ secret: config.appKey }).unless({ path: [/^\/public/,/^\/login/,/^\/regist/]}));

//使得ctx能够解析body的内容
app.use(bodyParser());

//路由系统
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log('app started at port 3000...');
