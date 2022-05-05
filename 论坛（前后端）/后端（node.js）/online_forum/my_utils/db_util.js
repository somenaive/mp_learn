// 自己写数据库相关工具函数

var sqlite3 = require('sqlite3').verbose() //数据库
// 数据库的路径
var db_path = require('../my-db').db_path

var db;

// 导出
module.exports.query=query;


function open() {
    // 打开sqlites数据库
    db = new sqlite3.Database(db_path, function (err) {
        if (err) throw err;
    })
}


// 通过sql来查询
function query(sql) {
    open()
    return new Promise(function (resolve, reject) {
        db.all(sql, function (err, row) {
            db.close()
            if (err) throw err
            else {
                // console.log('all查询结果 ', row)
                resolve(row)
            }
        })
    })
}