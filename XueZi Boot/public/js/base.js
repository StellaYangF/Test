/**
 * Created by soft01 on 2019/1/25.
 */
//register
//global var declearation
var upwd3="",
    uname="",
    email="",
    phone="";

function remindName(){
    unameRemind.innerHTML="用户名为4~10位的数字或者中英文";
};
function checkName(){
    xhr=new XMLHttpRequest();
    console.log(xhr);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==400){
            var result=xhr.responseText;
            unameRemind.innerHTML=result;
            console.log(result);
        }else if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            unameRemind.innerHTML=result;
        }
    };
    uname=uuname.value;
    xhr.open('get','/user/checkName?uname='+uname,true);
    xhr.send(null);
};

function remindPwd1(){
    pwdRemind1.innerHTML="密码最少为6位数";
};
function checkPwd1(){
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==400){
            var result=xhr.responseText;
            pwdRemind1.innerHTML=result;
            console.log(result);
        }else if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            pwdRemind1.innerHTML=result;
        }
    };
    xhr.open('post','/user/checkPwd',true);
    upwd3=uupwd1.value;
    var formdata="pwd="+upwd3;
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(formdata);
};

function remindPwd2(){
    pwdRemind2.innerHTML="请再次输入密码";
};
function checkPwd2(){
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==400){
            var result=xhr.responseText;
            pwdRemind2.innerHTML=result;
        }else if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            pwdRemind2.innerHTML=result;
        }
    };
    xhr.open('post','/user/checkPwd2',true);
    var formdata="pwd="+uupwd2.value+"&upwd3="+upwd3;
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(formdata);
};

function remindEmail(){
    emailRemind.innerHTMl="输入正确的邮箱格式";
};
function checkEmail(){
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==400){
            var result=xhr.responseText;
            emailRemind.innerHTML=result;
        }else if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            emailRemind.innerHTML=result;
        }
    };
    xhr.open('post','/user/checkEmail',true);
    email=uemail.value;
    var formdata="email="+email;
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(formdata);
};

function remindPhone(){
    phoneRemind.innnerHTML="请填写正确的手机号";
};
function checkPhone(){
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==400){
            var result=xhr.responseText;
            phoneRemind.innerHTML=result;
        }else if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            phoneRemind.innerHTML=result;
        }
    };
    xhr.open('post','/user/checkPhone',true);
    phone=uphone.value;
    var formdata="phone="+phone;
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(formdata);
};

function register(){
    var xhr=new XMLHttpRequest();
    console.log(xhr);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status!=200){
            var result=xhr.responseText;
            alert(result);
        }
        else if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            alert(result);
        }
    };
    var url="/user/register";
    xhr.open("post",url,true);
    var formdata="uname="+uname+"&upwd="+upwd3+"&email="+email+"&phone="+phone;
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(formdata);
};

//login
var unameLogin="";
function remindUnameLo(){
    unameRemind.innerHTML="请输入用户名";
};
function checkUnameLo(){
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==400){
            var result=xhr.responseText;
            unameRemind.innerHTML=result;
        }else if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            unameRemind.innerHTML=result;
        }
    };
    unameLogin=unameLo.value;
    xhr.open('get','/user/unameCheck?uname='+unameLogin,true);
    xhr.send(null);
};
function remindUpwdLo(){
    upwdRemind.innerHTML="请输入密码";
}
function checkUpwdLo(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==400){
            var result=xhr.responseText;
            upwdRemind.innerHTML=result;
        }
        else if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            upwdRemind.innerHTML=result;
        }
    };
    var url="/user/upwdCheck";
    xhr.open("post",url,true);
    var formdata="&upwd="+upwdLo.value+"&uname="+unameLogin;
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(formdata);
};

function login(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==400){
            var result=xhr.responseText;
            alert(result);
        }
        else if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            alert(result);
        }
    };
    var url="/user/login";
    xhr.open("post",url,true);
    var formdata="&upwd="+upwdLo.value+"&uname="+unameLogin;
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(formdata);
};
