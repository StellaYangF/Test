const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

// url:127.0.0.1:3000/user/login
router.get("/login",(req,res)=>{
    var $uname=req.query.uname,
    $pwd=req.query.pwd,
    $email=req.query.email;
    sql='SELECT id FROM e_login WHERE uname=? AND pwd=md5(?) AND email=?';
    pool.query(sql,[$uname,$pwd,$email],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send({code:1,msg:"登录成功"})
        }else{
            res.send({code:-1,msg:"用户名/密码/邮箱有误"})
        }
    })
})


module.exports=router;