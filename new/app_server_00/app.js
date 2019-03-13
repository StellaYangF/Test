// 0：下载mysql express模块
// 1：引入第三方模块
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

// 2.创建连接池
var pool = mysql.createPool({
    host: "127.0.0.1",
    //port:"3306",
    user: "root",
    password: "",
    database: "xz"
    //connectionLimit:20    
});

// 3.创建服务器并监听
var server = express();
// 3.1： cors1:配置允许8080端口的所有请求
server.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}))
// 3.2:配置静态资源目录public
server.use(express.static('public'));
// 3.3配置第三方的中间件,json是否自动转换
server.use(bodyParser.urlencoded({
    extended: false
}))
// 4.为express对象绑定监听端口
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

// 功能二：商品分页显示
// 1.用户get请求路径：/getProducts
server.get("/getProducts", (req, res) => {
    // 2.获取用户参数 pno psize
    var pno = parseInt(req.query.pno),
        psize = parseInt(req.query.psize);
    // 3.为参数设置默认值 pno:1 psize:4
    if (!pno) { pno = 1 };
    if (!psize) { psize = 4 };
    // 4.创建sql语句
    var sql = `SELECT l.lid,l.family_id,l.lname,l.price,p.md,pid FROM xz_laptop l, xz_laptop_pic p WHERE l.lid=p.laptop_id GROUP BY l.lid LIMIT ?,?`;
    var start = (pno - 1) * psize;
    //psize=parseInt(psize);
    // 5.执行sql语句
    pool.query(sql, [start, psize], (err, result) => {
        if (err) throw err;
        // 6.获取数据库返回结果并发送脚手架
        res.send({ code: 1, data: result });
        // console.log(result);
    })
})

// 功能三：首页轮播图
server.get("/imglist", (req, res) => {
    var sql = `SELECT cid,img,title,href FROM xz_index_carousel`;
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "Opps,List is empty now." })
        } else {
            res.send({ code: 1, data: result });
            // console.log(result);
        }
    })
    /*  test steps
    var rows=[
        {id:1,img_url:"http://127.0.0.1:3000/img/index/banner1.png"},  
        {id:2,img_url:"http://127.0.0.1:3000/img/index/banner2.png"},
        {id:3,img_url:"http://127.0.0.1:3000/img/index/banner3.png"},
        {id:4,img_url:"http://127.0.0.1:3000/img/index/banner4.png"}
    ];
    */
    // res.send({code:1,data:rows})
})

// 功能四：首页九宫格
server.get("/grid", (req, res) => {
    var rows = [
        { id: 1, title: "News", img_url: "http://localhost:3000/img/grid/menu1.png" },
        { id: 2, title: "Products", img_url: "http://localhost:3000/img/grid/menu2.png" },
        { id: 3, title: "Chat", img_url: "http://localhost:3000/img/grid/menu3.png" },
        { id: 4, title: "Location", img_url: "http://localhost:3000/img/grid/menu4.png" },
        { id: 5, title: "Search", img_url: "http://localhost:3000/img/grid/menu5.png" },
        { id: 6, title: "Phone", img_url: "http://localhost:3000/img/grid/menu6.png" }
    ];
    res.send(rows);
})

// 功能五：新闻列表
server.get("/newslist", (req, res) => {
    var pno = req.query.pno,
        psize = req.query.psize;
    if (!pno) { pno = 1 };
    if (!psize) { psize = 7 }
    var start = (pno - 1) * psize;
    psize = parseInt(psize);
    var sql = `SELECT id,title,ctime, img_url,point,content FROM xz_news LIMIT ?,?`;
    pool.query(sql, [start, psize], (err, result) => {
        if (err) throw err;
        res.send(result);
    })
});

// 功能六：显示新/商品详情
server.get("/newsInfo", (req, res) => {
    var nid = req.query.nid,
        reg = /^[0-9]{1,}$/,
        sql = "SELECT content,ctime,img_url,point FROM xz_news WHERE id=?";
    // 拦截用户非常传参
    if (!reg.test(nid)) {
        // Toast("参数格式不正确")在newsIngo组件中引入{Toast},进行双重拦截
        res.send({ code: -1, msg: "参数格式不正确" })
        return;
    };
    nid = parseInt(nid);
    pool.query(sql, [nid], (err, result) => {
        if (err) throw err;
        res.send(result[0]);
    })
})

// 功能七：发送评论
server.post("/addcomment", (req, res) => {
    var nid = req.body.nid,
        content = req.body.content;
    var sql = 'INSERT INTO xz_comment(id,nid,ctime,content) VALUES (null,?,now(),?)';
    pool.query(sql, [nid, content], (err, result) => {
        if (err) throw err;
        res.send({ code: 1, msg: "评论成功" })
    })
})

// 功能八：评论列表
server.get("/getcomment", (req, res) => {
    var nid = req.query.nid,
        pno = req.query.pno,
        psize = req.query.psize;
    if (!pno) { pno = 1 }
    if (!psize) { psize = 5 }
    var sql = `SELECT id,nid,content,ctime FROM xz_comment WHERE nid=? LIMIT ?,?`;
    var start = (pno - 1) * psize;
    psize = parseInt(psize);
    pool.query(sql, [nid, start, psize], (err, result) => {
        if (err) throw err;
        res.send({ code: 1, data: result })
    })
})

// 功能九：查询购物车列表
server.get("/getShopCart", (req, res) => {
    var uid = 1;
    var sql = `SELECT id,pid,price,uid,count,pname FROM xz_cart WHERE uid=?`;
    pool.query(sql, uid, (err, result) => {
        if (err) throw err;
        res.send({ code: 1, data: result })
    })
})

// 功能十：删除购物车中的某个商品
server.post("/removeItem", (req, res) => {
    var id = req.body.id;
    var sql = `DELETE FROM xz_cart WHERE id=?`;
    id = parseInt(id);
    pool.query(sql, [id], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.send({ code: 1, msg: "删除成功" })
        } else {
            res.send({ code: -1, msg: "删除失败" })
        }
    })
})

// 功能十一：批量删除多个商品
server.get("/removeMItem", (req, res) => {
    // 将所有参数拼接为字符串形式
    var ids = req.query.ids;
    var sql = `DELETE FROM xz_cart WHERE id IN (${ids})`;
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.send({ code: 1, msg: "删除成功" })
        } else {
            res.send({ code: -1, msg: "删除失败" })
        }
    })
})

// 功能十二：用户点击添加购物车按钮
server.get("/addcart", (req, res) => {
    // 0:向数据表xz_cart添加一列count INT
    // var sql = `ALTER TABLE xz_cart ADD count INT`;
    // pool.query(sql, (err, result) => {
    //     if (err) throw err;
    // })
    // 1:获取参数 uid pid pnam price
    var obj = req.query,
        uid = obj.uid,
        pid = obj.pid,
        pname = obj.pname,
        price = obj.price,
        count=obj.count;
    // 1.1:判断用户是否登录
    // 1.2：如果当前用户未登录，程序停止
    // 1.3：返回出错信息 请登录
    var uid=1;
    // 2:创建sql语句查询当前用户是否添加过此商品
    var sql = `SELECT id FROM xz_cart WHERE uid=? AND pid=?`
    pool.query(sql, [uid, pid], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            // 3:创建sql语句如果有结果更新数量
            var sql = `UPDATE xz_cart SET count=count+${count} WHERE uid=${uid} AND pid=${pid}`;
        } else {
            // 4:创建sql语句如果没有查询结果添加次商品
            var sql = `INSERT INTO xz_cart(id,uid,pid,price,pname,count) VALUES (NULL,${uid},${pid},${price},'${pname}',${count})`;
        }
        pool.query(sql, (err, result) => {
            if (err) throw err;
            if(result.affectedRows>0){
            res.send({ code: 1, msg: "添加成功" })
        }else{
            res.send({code:-1,msg:"添加失败"})
        }
        })
    })
}) 