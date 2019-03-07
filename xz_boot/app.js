const express=require('express');
const bodyPaser=require('body-parser');
const userRouter=require('./routers/user.js');
var server=express();
server.listen(3000);

server.use(express.static('public'));
server.use(bodyPaser.urlencoded({
    extended:false
}));
server.use('/user',userRouter);