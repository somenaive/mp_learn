// 论坛中一个具体的讨论相关的API

const Router = require("koa-router") //路由
const router = new Router()

// 导入自己写的数据库工具
const db_util= require('../my_utils/db_util')

// nodejs的工具库
var util = require('util');


// 数据库的路径
var db_path = require('../my-db').db_path

//访问例：http://127.0.0.1:3000/talk_info?tid=2
router.get('/', async (ctx) => {
    // console.log('ctx.request.query: ', ctx.request.query);
    //ctx.request.query 获取？后边的参数
    ctx.body =await get_comments_bytid(ctx.request.query.tid)
})

// 根据tid显示某个讨论下的所有评论
async function get_comments_bytid(tid){
    // 拼接sql
    var sql=util.format("select * from talks where tid=%s",tid)
    console.log("拼接后的sql"+sql)
    // 通过自定义的数据库工具函数来查询，查询讨论的关键信息
    var one_talk_info=await db_util.query(sql)
    console.log(one_talk_info)

    // 拼接sql
    var sql=util.format("select * from comment where tid=%s",tid)
    console.log("拼接后的sql"+sql)
    // 查询所有的评论
    var comments=await db_util.query(sql)
    console.log(comments)

    return {"one_talk_info":one_talk_info,"comment_ls":comments}
}







// 导出
module.exports = router.routes()