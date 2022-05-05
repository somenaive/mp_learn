const Router = require("koa-router") //路由
const router = new Router()

router.get('/', async (ctx) => {
	ctx.body = 'user 首页'    
})

//  /user/info页面
router.get('/info', async (ctx) => {
	ctx.body = 'user info'    
})

// 导出
module.exports = router.routes()
