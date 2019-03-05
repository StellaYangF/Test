// import express module
const express=require('express');
// import bodyParser module
const bodyParser=require('body-parser');
// import router module
const user=require('./routes/user.router.js');

// i server from express()
var server=express();
// create pool in pool.js
server.listen(3000);

// manage static files
server.use(express.static('./public'));
server.use(bodyParser.urlencoded({
    extended:false
}));
server.use('/user',user);