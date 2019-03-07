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
        {id:1,title:"News",img_url:"http://127.0.0.1:3000/img/grid/menu1.png"},
        {id:2,title:"Products",img_url:"http://127.0.0.1:3000/img/grid/menu2.png"},
        {id:3,title:"Order",img_url:"http://127.0.0.1:3000/img/grid/menu3.png"},
        {id:4,title:"E-Pay",img_url:"http://127.0.0.1:3000/img/grid/menu4.png"},
        {id:5,title:"Search",img_url:"http://127.0.0.1:3000/img/grid/menu5.png"},
        {id:6,title:"Phone",img_url:"http://127.0.0.1:3000/img/grid/menu6.png"},
    ]
    res.send(rows)
})

module.exports=router;