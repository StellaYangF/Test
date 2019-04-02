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

#创建新闻表
#e_news
#   id INT
#   img_url VARCHAR(255)
#   title   VARCHAR(225)
#   ctime  DATETIME
#   point   INT
#   content VARCHAR(20000)
CREATE TABLE e_news(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title VARCHAR(255),
  ctime DATETIME,
  point INT,
  content VARCHAR(2000)
);
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'111',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'112',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'113',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'114',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'115',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'116',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'117',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'118',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'119',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'1110',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'1111',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'1112',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'1113',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'1114',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'1115',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'1116',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'1117',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'1118',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'1119',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'11120',now(),0,'111');
INSERT INTO e_news VALUES(null,
'http://127.0.0.1:3000/img/1.png',
'11121',now(),0,'111');

#创建新闻评论表
CREATE TABLE e_comment(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nid INT,
  content VARCHAR(120),
  ctime DATETIME
);

