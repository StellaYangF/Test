const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

// Function one: index-carousel
router.get("/imglist",(req,res)=>{
    var rows=[
        {id:1,img_url:"http://localhost:3000/img/carousel/banner1.jpg"},
        {id:2,img_url:"http://localhost:3000/img/carousel/banner2.jpg"},
        {id:3,img_url:"http://localhost:3000/img/carousel/banner3.jpg"}
    ]
    res.send(rows);
});

// Function two: index-pic show
router.get("/productlist",(req,res)=>{
    var rows=[
        {id:1,title:"News",img_url:"http://127.0.0.1:3000/img/grid/menu1.png",path:"/Newslist"},
        {id:2,title:"Products",img_url:"http://127.0.0.1:3000/img/grid/menu2.png",path:"/Products"},
        {id:3,title:"Order",img_url:"http://127.0.0.1:3000/img/grid/menu3.png",path:"/Order"},
        {id:4,title:"E-Pay",img_url:"http://127.0.0.1:3000/img/grid/menu4.png",path:"/E-pay"},
        {id:5,title:"Search",img_url:"http://127.0.0.1:3000/img/grid/menu5.png",path:"/Search"},
        {id:6,title:"Phone",img_url:"http://127.0.0.1:3000/img/grid/menu6.png",path:"/Phone"},
    ]
    res.send(rows)
})

// Function 2: newslist
router.get("/newslist", (req, res) => {
    var sql ="SELECT id,img_url,title,ctime,point,content FROM e_news LIMIT ?,?";
    var pno=req.query.pno;
    var psize=req.query.psize;
    if(!pno){pno=1};
    if(!psize){psize=7};
    var start=(pno-1)*psize;
    psize=parseInt(psize);
    pool.query(sql,[start,psize],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            res.send({code:-1,msg:"Sorry, the news doesn't exist."})
        }else{
            res.send({code:1,data:result})
        }
    })
})



module.exports=router;