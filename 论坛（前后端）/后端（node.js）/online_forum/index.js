// 引入对象
const Koa = require('koa');  //koa框架
const Router = require("koa-router") //koa路由
// 引入自定义的子路由
const user_route=require('./my_routes/user');
const talks_route=require('./my_routes/talks');


// 创建对象
const app = new Koa();
const router = new Router()


router.get("/", (ctx) => {
    ctx.body = "主页"
})


// 使用子路由
router.use('/user',user_route) //访问 /user 路径下的页面都会使用这个子路由
router.use('/talks',talks_route) //访问 /talks 路径下的页面都会使用这个子路由


//使用路由
app.use(router.routes())


// 设置使用的端口
var port=3000;
// 127.0.0.1:port
app.listen(port);
console.log("服务已经启动，端口："+port)