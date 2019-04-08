SET NAMES UTF8;
DROP DATABASE IF EXISTS e_commerce;
CREATE DATABASE e_commerce CHARSET=UTF8;
USE e_commerce;

/*_login*/
CREATE TABLE e_login(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(25),
    pwd VARCHAR(32)
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

#创建注册表
CREATE TABLE e_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(25),
    upwd VARCHAR(32),
    email VARCHAR(64),
    tel VARCHAR(16),
    sex INT
); 

#创建商品列表
CREATE TABLE e_products(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(25),
  price DECIMAL(10,2),
  img_front VARCHAR(50),
  img_back VARCHAR(50)
);

INSERT INTO e_products(pid,pname,price,img_front,img_back) VALUES (NULL,'Hollister轻便格纹衬衫',109.99,'img/fashion/fashion_women/product_1_front.jpg','img/fashion/fashion_women/product_1_back.jpg'),
(NULL,'Boyfriend轻松格子衬衫',200.79,'img/fashion/fashion_women/product_2_front.jpg','img/fashion/fashion_women/product_2_back.jpg'),
(NULL,'Zara BASIC DENIM SHIRT',208.79,'img/fashion/fashion_women/product_3_front.jpg','img/fashion/fashion_women/product_3_back.jpg'),
(NULL,'Zara BASIC STRAPPY TOP',299.79,'img/fashion/fashion_women/product_4_front.jpg','img/fashion/fashion_women/product_4_back.jpg'),
(NULL,'Zara BOMBER JACKET',255.99
,'img/fashion/fashion_women/product_5_front.jpg','img/fashion/fashion_women/product_5_back.jpg'),
(NULL,'Zara CHECK SHIRT',269.99,'img/fashion/fashion_women/product_6_front.jpg','img/fashion/fashion_women/product_6_back.jpg'),
(NULL,'Zara CROPPED SHIRT',279.99,'img/fashion/fashion_women/product_7_front.jpg','img/fashion/fashion_women/product_7_back.jpg'),
(NULL,'Zara ELASTICITY JEGGINGS',299.99,'img/fashion/fashion_women/product_8_front.jpg','img/fashion/fashion_women/product_8_back.jpg'),
(NULL,'Zara LAPEL JACKET',669.99,'img/fashion/fashion_women/product_9_front.jpg','img/fashion/fashion_women/product_9_back.jpg'),
(NULL,'Zara CIGARETTE JEANS',369.99,'img/fashion/fashion_women/product_10_front.jpg','img/fashion/fashion_women/product_10_back.jpg'),
(NULL,'Zara OVERSIZED PARKA',469.99,'img/fashion/fashion_women/product_11_front.jpg','img/fashion/fashion_women/product_11_back.jpg'),
(NULL,'Zara OVERSIZED SHIRT',569.99,'img/fashion/fashion_women/product_12_front.jpg','img/fashion/fashion_women/product_12_back.jpg'),
(NULL,'Zara SHIRT White Navy',169.99,'img/fashion/fashion_women/product_13_front.jpg','img/fashion/fashion_women/product_13_back.jpg'),
(NULL,'Zara PEG LEG TROUSERS',199.99,'img/fashion/fashion_women/product_14_front.jpg','img/fashion/fashion_women/product_14_back.jpg'),
(NULL,'Zara ROSES PARKA',599.99,'img/fashion/fashion_women/product_15_front.jpg','img/fashion/fashion_women/product_15_back.jpg'),
(NULL,'Zara SWEATER WITH SLITS',299.99,'img/fashion/fashion_women/product_16_front.jpg','img/fashion/fashion_women/product_16_back.jpg'),
(NULL,'Zara V-NECK CHECK SHIRT',399.99,'img/fashion/fashion_women/product_17_front.jpg','img/fashion/fashion_women/product_17_back.jpg'),
(NULL,'Zara V-NECK SWEATER',499.99,'img/fashion/fashion_women/product_18_front.jpg','img/fashion/fashion_women/product_18_back.jpg'),
(NULL,'Zara WATER REPELLENT JACKET',399.99,'img/fashion/fashion_women/product_19_front.jpg','img/fashion/fashion_women/product_19_back.jpg'),
(NULL,'Zara JOGGING TROUSERS',799.99,'img/fashion/fashion_women/product_20_front.jpg','img/fashion/fashion_women/product_20_back.jpg'),
(NULL,'Orbrooklyn Short Sleeve Shirt',699.99,'img/fashion/fashion_women/product_21_front.jpg',NULL),
(NULL,'Jam Remix Sunglasses',99.99,'img/fashion/fashion_women/product_22_front.jpg',NULL),
(NULL,'Crew Neck Short Sleeve T-Shirt',21.99,'img/fashion/fashion_women/product_23_front.jpg',NULL),
(NULL,'Vicki Straight Jeans Shorts',69.99,'img/fashion/fashion_women/product_24_front.jpg',NULL),
(NULL,'Cat Eye Sunglasses',39.99,'img/fashion/fashion_women/product_25_front.jpg',NULL),
(NULL,'Sleeve Deep V Neck Tee',79.99,'img/fashion/fashion_women/product_26_front.jpg',NULL),
(NULL,'Buttonless Suede Jacket',89.99,'img/fashion/fashion_women/product_27_front.jpg',NULL),
(NULL,'Valentine Straight Leg Jeans',49.99,'img/fashion/fashion_women/product_28_front.jpg',NULL),
(NULL,'GMI Striped Cuffed Knit Hat',39.99,'img/fashion/fashion_women/product_29_front.jpg',NULL),
(NULL,'GMI Striped Cuffed Knit Hat',39.99,'img/fashion/fashion_women/product_30_front.jpg',NULL),
(NULL,'DKNY Vintage Leather Hobo',59.99,'img/fashion/fashion_women/product_31_front.jpg',NULL);
