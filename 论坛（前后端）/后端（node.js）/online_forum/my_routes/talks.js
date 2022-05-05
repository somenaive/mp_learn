// 论坛中讨论（帖子）相关的API

const Router = require("koa-router") //路由
const router = new Router()

var sqlite3 = require('sqlite3').verbose() //数据库

// 数据库的路径
var db_path = require('../my-db').db_path

router.get('/', async (ctx) => {
    ctx.body = 'talks 首页'
})

// 返回所有的讨论列表
router.get('/showall', async (ctx) => {
    var dt = await showall();//等待数据库返回数据
    ctx.body =dt
}
)

// 获取所有的讨论列表
function showall() {
    return new Promise(function (resolve) {
        // 打开sqlites数据库
        var db;
        db = new sqlite3.Database(db_path, function (err) {
            if (err) throw err;
        })
        // all查询所有数据
        db.all(`select * from talks`, function (err, row) {
            db.close()
            if (err) throw err
            else {
                // console.log('all查询结果 ', row)
                resolve(row)
            }
        })
    })

}



// 导出
module.exports = router.routes()