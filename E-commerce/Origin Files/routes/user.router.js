const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

// Function One: url:127.0.0.1:3000/user/login
router.post("/login",(req,res)=>{
    var $uname=req.body.uname,
    $upwd=req.body.upwd,
    sql='SELECT uid FROM e_user WHERE uname=? AND upwd=md5(?)';
    console.log($upwd,$uname)
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            var uid=result[0].uid;
            req.session.uid=uid;
            res.send({code:1,msg:"登录成功",data:uid})
        }else{
            res.send({code:-1,msg:"用户名/密码有误"})
        }
    })
})

// Function Two: url:127.0.0.1:3000/user/verifyUname
router.get("/verifyUname",(req,res)=>{
    var $uname=req.query.uname,
    sql='SELECT uid FROM e_user WHERE uname=?';
    pool.query(sql,[$uname],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send({code:1,msg:"用户名已存在"});
        }else{
            res.send({code:-1,msg:"用户名可用"})
        }
    })
})

// Function Three: register url: localhost:3000/user/register
router.post("/register",(req,res)=>{
    var $uname=req.body.uname,
    $upwd=req.body.upwd,
    $email=req.body.email,
    $tel=req.body.tel,
    $sex=req.body.sex,
    sql=`INSERT INTO e_user(uid,uname,upwd,email,tel,sex) VALUES(null,?,md5(?),?,?,?)`;
    pool.query(sql,[$uname,$upwd,$email,$tel,$sex],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){res.send({code:1,msg:"注册成功"})}
        else{res.send({code:-1,msg:"注册失败"})}
    })
})

module.exports=router;