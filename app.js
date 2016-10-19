import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import session from 'koa-session'
import convert from 'koa-convert'
import mongoose from 'mongoose'

import config from './config'
import router from './routes/index'

mongoose.connect(`mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.dbname}`);

const app = new Koa();
app.keys = ['some secret hurr'];

app.use(convert(session(app)));

// parse request body:
app.use(bodyParser());

// add router middleware:
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log('app started at port 3000...');
