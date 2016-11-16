# EDU_BOOK API 文档

## 注册API

1. url: /regist  

2. method: post  

3. arguments:

		name     		type:[string][required]				用户姓名
		password		type:[string][required]				用户密码
		email			type:[string][required][unique] 	用户邮箱

4. response:
	
		{"name":"lgybetter","email":"437675103@qq.com"}

## 登录API

1. url: /login

2. method: post

3. arguments:

		email			type:[string][required][unique]		用户邮箱
		password		type:[string][required]				用户密码

4. response:

		{ token: token, email: email, name: name }

## 注销API

1. url: /logout

2. method: post

3. arguments:

		null

4. response:
	
		success  注销成功

## 设置用户信息API

1. url: /setting/usermsg

2. method: post

3. arguments:

		school 			type:[string]					用户所在学校
		address			type:[string]					用户所在地址

4. response:

		{ ok: 1, nModified: 1, n: 1 }

## 发布书籍API

1. url: /releasebook

2. method: post

3. arguments:

		bookName  		type:[string][required]			书籍名称
		price			type:[Number][required]			书籍价格
		swapMode		type:[string][required]  		交换方式
		appearanceLevel	type:[string][required] 		新旧程度
		bookIntroduce	type:[string]					书籍简介

4. response:

		ok

## 修改书籍API

1. url: /setting/bookmsg/:id

2. method: post

3. arguments:

		bookName  		type:[string][required]			书籍名称
		price			type:[Number][required]			书籍价格
		swapMode		type:[string][required]  		交换方式
		appearanceLevel	type:[string][required] 		新旧程度
		bookIntroduce	type:[string]					书籍简介
		
4. response:

		ok

## 删除书籍API

1. url: /remove/book/:id

2. method: get

3. arguments:

		null

4. response:

		ok

## 查找书籍API

### 查找一本书籍

1. url: /find/book/:id

2. method: get

3. arguments:

		示例：localhost:3000/find/book/all?swapMode=快递&price=20&order=price_des

		条件:?
		1.swapMode=: 交换方式
		2.school=: 发布者所在学校
		排序条件:order=(asc升序，des降序)
		1.price
		2.appearanceLevel

4. response:

		{"_id":"581885c670cefc1fa43d88f0","bookName":"你的孤独虽败尤荣","price":123,"releaseUser":"5818557788afc7112cc4c4d3","swapMode":"快递","school":"华南师范大学","appearanceLevel":"4成新","__v":0,"bookIntroduce":"刘同第三部作品","createdTime":"2016-11-01T12:08:23.332Z"}

### 查找所有的书籍

1. url: /find/book/all/?swapMode=快递&order=price_des

2. method: get

3. arguments:

		null

4. response:

		[{"_id":"58188cb6c789140e4862b5e4","bookName":"你的孤独虽败尤荣","price":20,"releaseUser":"5818557788afc7112cc4c4d3","swapMode":"快递","school":"华南师范大学","appearanceLevel":"9成新","__v":0,"bookIntroduce":"人的力量","createdTime":"2016-11-01T12:35:25.799Z"}]



		
	

		

