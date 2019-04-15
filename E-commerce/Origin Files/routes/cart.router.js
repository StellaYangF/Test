const express = require('express');
const pool = require('../pool.js');
var router = express.Router();

// 1. 添加购物车  localhost:3000/cart/add
router.post('/add', (req, res) => {
    var obj = req.body,
        $pid = obj.pid,
        $buyCount = obj.buyCount,
        $pname = obj.pname,
        $price = obj.price,
        $uid = obj.uid;
    if (!obj.pid) {
        res.send({ code: 401, msg: "pid required" });
        return;
    }
    if (!obj.buyCount) {
        res.send({ code: 402, msg: "buyCount required" });
        return;
    }
    if (!obj.pname) {
        res.send({ code: 403, msg: "pname required" });
        return;
    }
    if (!obj.price) {
        res.send({ code: 404, msg: "price required" });
        return;
    }
    if (!obj.uid) {
        res.send({ code: 300, msg: "login required" });
        return;
    }
    var sql = 'SELECT pid FROM e_cart WHERE uid=? AND pid=?';
    pool.query(sql, [$uid, $pid], (err, result) => {
        if (err) throw err;
        var sql2 = '';
        if (result.length > 0) {
            sql2 = `UPDATE e_cart SET count=count+${$buyCount} WHERE uid=${$uid} AND pid=${$pid}`;
        } else {
            sql2 = `INSERT INTO e_cart(id,uid,pid,price,pname,count) VALUES (null, ${$uid},${$pid},${$price},'${$pname}',${$buyCount})`;
        }
        pool.query(sql2, (err, result2) => {
            if (err) throw err;
            if (result2.affectedRows > 0) {
                res.send({ code: 200, msg: "add suc" });
            } else {
                res.send({ code: 500, msg: "add err" });
            }
        })
    })
})

// 2. 购物车列表    http://localhost:3000/cart/list
router.get('/list',(req,res)=>{
    var $uid=req.query.uid,
    sql=`SELECT pid,pname,price,count FROM e_cart WHERE uid=?`;
    pool.query(sql,[$uid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:200,msg:"list suc",data:result})
        }else{
            res.send({code:500,msg:"list err"})
        }
    })

})



module.exports = router;