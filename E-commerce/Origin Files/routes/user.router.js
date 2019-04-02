const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

// Function One: url:127.0.0.1:3000/user/login
router.get("/login",(req,res)=>{
    var $uname=req.query.uname,
    $pwd=req.query.pwd,
    sql='SELECT id FROM e_login WHERE uname=? AND pwd=md5(?)';
    pool.query(sql,[$uname,$pwd],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            var id=result[0].id;
            req.session.uid=id;
            res.send({code:1,msg:"登录成功"})
        }else{
            res.send({code:-1,msg:"用户名/密码有误"})
        }
    })
})

// Function Two: url:127.0.0.1:3000/user/verifyUname
router.get("/verifyUname",(req,res)=>{
    var $uname=req.query.uname,
    sql='SELECT id FROM e_login WHERE uname=?';
    pool.query(sql,[$uname],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send({code:1,msg:"用户名已存在"});
        }else{
            res.send({code:-1,msg:"用户名可用"})
        }
    })
})


module.exports=router;