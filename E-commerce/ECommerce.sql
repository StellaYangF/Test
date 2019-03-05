SET NAMES UTF8;
DROP DATABASE IF EXISTS e_commerce;
CREATE DATABASE e_commerce CHARSET=UTF8;
USE e_commerce;
CREATE TABLE e_login(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(25),
    pwd VARCHAR(32),
    email VARCHAR(30)
);
#增
INSERT INTO e_login VALUES ("1","Stella",md5
("123456"),"stella@foxmail.com");
#查
SELECT id,uname,pwd,email FROM e_login;
#改
#删
