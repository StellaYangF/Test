// import 3rd modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// import self defined modules
const user = require('./routes/user.router.js');
const session = require("express-session");

// initialize server from express()
var server = express();
// server use cors --solve "Access-Origin-Control-Allow" problems
server.use(cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
    credentials: true
}))

server.use(session({
    secret: "128位随机字符串",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));

// create pool in pool.js
server.listen(3000);

// manage static files
server.use(express.static('./public'));
server.use(bodyParser.urlencoded({
    extended: false
}));
server.use('/user', user);

