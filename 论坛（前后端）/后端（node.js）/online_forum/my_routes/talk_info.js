// 论坛中一个具体的讨论相关的API

const Router = require("koa-router") //路由
const router = new Router()

var sqlite3 = require('sqlite3').verbose() //数据库

// 数据库的路径
var db_path = require('../my-db').db_path

router.get('/', async (ctx) => {
    ctx.body = 'talk_info 首页'
})

// 根据tid显示某个讨论下的所有评论
function get_comments_bytid(tid){
    
}







// 导出
module.exports = router.routes()