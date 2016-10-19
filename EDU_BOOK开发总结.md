# EDU_BOOK 开发总结

## KOA2整体框架搭建

> Koa2是目前Node.js世界最火的web框架，无论从性能，还是流程控制上，koa 2和它的后宫（中间件）都是非常好的解决方案。本文主要koa 2的文档解读和runkoa介绍，让大家对koa 2有一个更简单直接的理解

### 1.项目目录生成

搭建一个项目首先要要清楚地建立起一个文件系统目录，这样才会清晰明了地安放项目的文件路径，对项目的结构也有所明确。

项目暂时的文件目录如下:

```
EDU_Book_Background/
├── app
├── controllers/
│ 	├── loginController.js
│		└── registController.js
├── modules/
│		└── user.js
├── node_mudules
├── public
├── routes/
│		├──home.js
│		├──index.js
│		├──login.js
│		└──regist.js
├── app.js
├── config.js
├── package.json
├── start.js
└── README.md
```

文件目录解析：

1. app用于存放前端的JavaScript视图模板
2. controllers用于存放后台的控制器
3. modules是数据的原型
4. public用于存放静态资源
5. routers用于存放路由系统
6. app.js是后台的入口文件
7. config.js是配置文件
8. start.js用于es6和es7babel转换

### 2.Koa2的搭建

(1) 首先先安装koa2的npm包:

	npm --save-dev install koa@next

(2) 接着安装koa的路由系统npm包:

	npm --save-dev install koa-router@next

(3) 安装babel的npm包进行js语言的转换

	npm --save-dev install babel-core babel-polyfill babel-preset-es2015-node6 babel-preset-stage-3

这时候我们已经安装好koa2框架的基本使用需求依赖包了。但是我们要怎么在node环境中运行es6和es7的语法呢？所以我们需要写一个js脚本来进行对app.js的转换操作，那就是

server.js文件:

```
require('babel-core/register')({
    presets: ['stage-3','es2015-node6']
});

require("babel-polyfill");

require('./app.js');//确定入口文件是app.js

```

然后每次要启动或者调试程序就是在cmd下运行:

	node start.js


这样我们就可以通过koa2来编写需要的后台服务api了^_^

### 3.Koa2的服务编写

我们之前已经说过了，app.js是入口文件，一起来看看吧！

```
import Koa from 'koa'//引入koa2


const app = new Koa();

app.listen(3000);

console.log('app started at port 3000...');

```

这样Koa的服务运行就开启了！可是这样远远是无法为web提供api的，我们首先需要的是路由系统。

### 4.Koa2的路由系统搭建

之前已经安装了koa-router支持koa2的路由系统npm包

于是app.js就变为:

```
import Koa from 'koa'
import bodyParser from 'koa-bodyparser' //用于解析request中body的数据
import session from 'koa-session' //用于session会话服务
import convert from 'koa-convert' //koa2使用koa-session需要先进行convert
import mongoose from 'mongoose' //连接mongodb使用

import config from './config' //程序的配置文件
import router from './routes/index' //引入路由系统文件

mongoose.connect(`mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.dbname}`); //从配置文件中加载数据连接数据库

const app = new Koa();
app.keys = [config.appKey];

app.use(convert(session(app)));

// parse request body:
app.use(bodyParser());

// add router middleware:
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log('app started at port 3000...');

```

接下来看主要部分，路由系统

(1) 主路由文件index.js:

```
//分多个文件来对路由进行处理
import Router from 'koa-router'
import homeRouter from './home'
import loginRouter from './login'
import registRouter from './regist'

const router = new Router();

//登录响应路由
router.use('/login',loginRouter.routes(),loginRouter.allowedMethods());
//注册响应路由
router.use('/',homeRouter.routes(),homeRouter.allowedMethods());
//主页响应路由
router.use('/regist',registRouter.routes(),registRouter.allowedMethods());

export default router;
```

(2)举例登录路由文件:  

login.js:

```
import Router from 'koa-router'
import loginController from '../controllers/loginController'

const router = new Router();

router.post('/',loginController.loginPost); //对post方法的/login进行处理，调用登录管理控制器

router.get('/',loginController.loginGet); //对get方法的/login进行处理

export default router;
```

控制器处理路由:

loginController.js

```
import UserModel from '../models/user' //加载数据原型
import { MD5, SHA256 } from 'crypto-js'; //引入加密方式

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
    ctx.response.body = `<h1>Login</h1>
        <form action="/login" method="post">
            <p>Name: <input name="name" type="text"></p>
            <p>Password: <input name="password" type="password"></p>
            <p>Email: <input name="email" type="text"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
}
```

当我们搭建好各种路由响应后就要配置数据库了。

### 5.Mongoose数据库搭建

要用mongoose链接并搭建数据库得先建立一个数据原型:

user.js:

```
import mongoose from 'mongoose'
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true},
  password: { type: String, required: true },
  email: { type: String, required: true ,unique: true},
  createdTime: { type: Date, default: Date.now() }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
```

这样当我们需要写入或查询数据时就先引入数据原型,然后创建数据原型的新对象，进行匹配后如果正确就可以保存到数据库中:

```
var user = null,result = null,req = ctx.request,
  name = req.body.name,
  password = SHA256(req.body.password),
  email = req.body.email;
  user = new UserModel({
    name: name,
    password: password,
    email: email,
  });
  result = await user.save().catch(e => e); //使用await进行异步操作保存数据到数据库
  if(result && result._id) {
    console.log(result._id);
    console.log('success');
    ctx.response.redirect('/login');
  } else {
    console.log("邮箱或用户名已经被注册过了！！！");
  }
```

查找数据:

```
 var req = ctx.request,
        name = req.body.name,
        password = SHA256(req.body.password),
        email = req.body.email;
    var result = await UserModel.findOne({
        name: name,
        password: password.toString(),
        email: email
    }); //使用await进行异步操作查询数据库中的数据
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
```

这样一来我们的服务器的大致框架就搭建好了，接下来就需要编写各种api方法,数据模型，关系存储以及安全权限验证了，接下来的开发过程中会进一步补充这一系列的总结。




