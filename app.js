import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import unless from 'koa-unless'
import mongoose from 'mongoose'
import jwt from 'koa-jwt'
import config from './config'
import router from './routes/index'

//connetct to the mongodb
mongoose.connect(`mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.dbname}`);

const app = new Koa();

//Middleware below this line is only reached if JWT token is valid
// unless the URL starts with '/public'
app.use(jwt({ secret: config.appKey }).unless({ path: [/^\/public/,/^\/login/,/^\/regist/]}));

//parse the request body
app.use(bodyParser());

//use the router system
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log('app started at port 3000...');
