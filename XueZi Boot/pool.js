const mysql=require('mysql');
var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'xz',
    connectionLimit:20,
    post:'3306'
});

module.exports=pool;