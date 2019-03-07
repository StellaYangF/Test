// import 3rd modules
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
// import self defined modules
const user=require('./routes/user.router.js');

// initialize server from express()
var server=express();
// server use cors --solve "Access-Origin-Control-Allow" problems
server.use(cors({
    origin:"http://localhost:8080",
    credentials:true
}))
// create pool in pool.js
server.listen(3000);

// manage static files
server.use(express.static('./public'));
server.use(bodyParser.urlencoded({
    extended:false
}));
server.use('/user',user);