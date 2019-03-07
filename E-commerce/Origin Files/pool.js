const mysql=require('mysql');
var pool=mysql.createPool({
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    password:"",
    database:"e_commerce",
    connectionLimit:20
});
module.exports=pool;