const express = require('express');
const pool = require('../pool.js');
var router = express.Router();

// localhost:3000/product/list?
router.get('/list', (req, res) => {
    var $pno = req.query.pno,
        $psize = req.query.psize,
        sql = `SELECT pid,pname,price,img_front,img_back FROM e_products LIMIT ?,?`;
    if (!$pno) { $pno = 1 }
    if (!$psize) { $psize = 12 }
    var offset = ($pno - 1) * $psize;
    $psize = parseInt($psize);
    pool.query(sql, [offset, $psize], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({ code: 1, msg: '查询成功', data: result });
        } else {
            res.send({ code: -1, msg: '查询失败' })
        }
    })
})

// localhost:3000/product/details?pid=***
router.get('/details', (req, res) => {
    var $product_id = parseInt(req.query.pid),
        sql = `SELECT epp.pid,epp.product_id,epp.sm,epp.md,epp.lg,ep.pname,ep.price FROM e_product_pic epp,e_products ep WHERE ep.pid=? AND epp.product_id=?`;
    if (!$product_id) { 
        res.send({ code: -1, msg: "该商品已下架" });
        return;
    };
    pool.query(sql,[$product_id,$product_id],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }else{
            res.send({code:-1,msg:'查询失败'})
        }
    })
})



module.exports = router;