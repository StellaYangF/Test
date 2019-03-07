/**
 * Created by soft01 on 2019/1/25.
 */
const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

//register relative routers
router.get('/checkName',(req,res)=>{
    var uname=req.query.uname;
    if(!uname){
        res.status(400).send("用户名不能为空");
        return;
    }
    if(uname.length>10||uname.length<4){
        res.status(400).send("用户名长度不符");
        return;
    }
    var sql="SELECT * FROM xz_user WHERE uname=?";
    pool.query(sql,[uname],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.status(400).send("用户名已存在，请重新命名");
        }else{
            res.status(200).send("用户名可使用");
        }
    });
});

router.post('/checkPwd',(req,res)=>{
    var pwd=req.body.pwd;
    if(!pwd){
        res.status(400).send("密码不能为空");
        return;
    }
    if(pwd.length<6){
        res.status(400).send("密码长度不符");
        return;
    }else{
        res.status(200).send("密码长度OK");
    }
});

router.post('/checkPwd2',(req,res)=>{
    var pwd=req.body.pwd,
        upwd3=req.body.upwd3;
    if(!pwd){
        res.status(400).send("密码不能为空");
        return;
    }
    if(pwd!=upwd3){
        res.status(400).send("两次填写的密码不一致");
        return;
    }else if(pwd==upwd3){
        res.status(200).send("密码输入正确");
    }
});

router.post('/checkEmail',(req,res)=>{
    var email=req.body.email;
    if(!email){
        res.status(400).send("邮箱不能为空");
        return;
    }
    if(email.indexOf("@")==-1){
        res.status(400).send("邮箱格式输入不正确");
        return;
    }else{
        res.status(200).send("邮箱地址有效");
    }
});

router.post('/checkPhone',(req,res)=>{
    var tel=req.body.phone;
    if(!tel){
        res.status(400).send("手机号不能为空");
        return;
    }
    if(tel.length!=11){
        res.status(400).send("手机号格式不正确");
        return;
    }else{
        res.status(200).send("手机号输入成功");
    }
});

router.post('/register',(req,res)=>{
    var obj=req.body;
    var i=401;
    for(var key in obj){
        if(!obj.key){
            res.status(i).send(key+"不能为空");
            return;
        }
        i++;
    };
    var name=obj.uname,
        pwd=obj.upwd,
        email=obj.email,
        phone=obj.phone;
    var sql="INSERT INTO xz_user (uname,upwd,email,phone) VALUES (?,?,?,?)";
    pool.query(sql,[name,pwd,email,phone],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            console.log(result);
            res.status(200).send("注册成功");
        }else{
            res.status(400).send("注册失败");
        }
    });
});

//login relative routers
router.get('/unameCheck',(req,res)=>{
    var $uname=req.query.uname;
    if(!$uname){
        res.status(400).send("用户名不能为空");
        return;
    }
    var sql="SELECT uid FROM xz_user WHERE uname=?";
    pool.query(sql,[$uname],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.status(200).send("用户名输入正确");
        }else{
            res.status(400).send("用户名不存在");
        }
    });
});
router.post('/upwdCheck',(req,res)=>{
    var $upwd=req.body.upwd,
        $uname=req.body.uname;
    console.log($upwd);
    if(!$upwd){
        res.status(400).send("密码不能为空");
        return;
    }
    var sql="SELECT uid FROM xz_user WHERE upwd=? AND uname=?";
    pool.query(sql,[$upwd,$uname],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.status(200).send("密码输入正确");
        }else{
            res.status(400).send("密码输入不正确");
        }
    });
});
router.post('/login',(req,res)=>{
    var $uname=req.body.uname,
        $upwd=req.body.upwd;
    if(!$uname){
        res.status(400).send("用户名不能为空");
        return;
    }
    if(!$upwd){
        res.status(400).send("密码不能为空");
        return;
    }
    var sql="SELECT uid FROM xz_user WHERE upwd=? AND uname=?";
    pool.query(sql,[$upwd,$uname],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.status(200).send("登陆成功");
        }else{
            res.status(400).send("登陆失败");
        }
    });
});
module.exports=router;