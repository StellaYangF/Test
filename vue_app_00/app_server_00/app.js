// 0：下载mysql express模块
const express = require('express');
const mysql = require('mysql');
var pool = mysql.createPool({
    host: "127.0.0.1",
    //port:"3306",
    user: "root",
    password: "",
    database: "xz"
    //connectionLimit:20    
});
var server = express();
server.listen(3000);

// 功能一：用户登录
server.get("/login", (req, res) => {
    var uname = req.query.name,
        upwd = req.query.pwd;
    // 测试是否成功收到数据
    var sql = "SELECT id FROM xz_login WHERE name=? AND pwd=md5(?)";
    pool.query(sql, [uname, upwd], (err, result) => {
        if (err) throw err;
        // res.send(result);
        // 返回结果为数组
        if (result.length > 0) {
            res.send({ code: 1, msg: "登录成功" })
            // 在客户端中结果为json字符串
        } else {
            res.send({ code: -1, msg: "用户名或密码有误" })
        }
    })
});