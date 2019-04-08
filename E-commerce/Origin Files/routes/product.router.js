const express = require('express');
const pool = require('../pool.js');
var router = express.Router();

// localhost:3000/product/list
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
module.exports = router;