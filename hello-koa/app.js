/**
 * Created by weiqiujuan on 17-9-25.
 */
const Koa = require('koa');
const app = new Koa;

app.use(async (ctx, next) => {
    "use strict";
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>HELLO,KOA2</h1>'
});
app.listen(3000);
console.log('app started at port 3000');