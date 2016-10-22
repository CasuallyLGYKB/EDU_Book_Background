exports.logoutPost = async (ctx, next) => {
  ctx.cookies.set('jwt', null, { overwrite: true, httpOnly: true });
  ctx.response.body = "退出成功！";
}

exports.logoutGet = async (ctx, next) => {
  console.log("logout Page");
  ctx.response.body = `<h1>Logout</h1>
        <form action="/logout" method="post">
            <p><input type="submit" value="Submit"></p>
        </form>`;
}

