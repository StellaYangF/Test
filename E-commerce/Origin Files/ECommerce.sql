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


CREATE TABLE e_products(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(25),
  price DECIMAL(10,2),
  img_front VARCHAR(50),
  img_back VARCHAR(50)
);

#创建商品图片表
CREATE TABLE e_product_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT ,
  product_id INT,
  sm VARCHAR(50),
  md VARCHAR(50),
  lg VARCHAR(50)
);

INSERT INTO e_product_pic(pid,product_id,sm,md,lg) VALUES (NULL,1,'img/fashion/fashion_details/sm_1_1.jpg','img/fashion/fashion_details/md_1_1.jpg','img/fashion/fashion_details/lg_1_1.jpg'),
(NULL,1,'img/fashion/fashion_details/sm_1_2.jpg','img/fashion/fashion_details/md_1_2.jpg','img/fashion/fashion_details/lg_1_2.jpg'),
(NULL,1,'img/fashion/fashion_details/sm_1_3.jpg','img/fashion/fashion_details/md_1_3.jpg','img/fashion/fashion_details/lg_1_3.jpg'),
(NULL,1,'img/fashion/fashion_details/sm_1_4.jpg','img/fashion/fashion_details/md_1_4.jpg','img/fashion/fashion_details/lg_1_4.jpg'),
(NULL,2,'img/fashion/fashion_details/sm_2_1.jpg','img/fashion/fashion_details/md_2_1.jpg','img/fashion/fashion_details/lg_2_1.jpg'),
(NULL,2,'img/fashion/fashion_details/sm_2_2.jpg','img/fashion/fashion_details/md_2_2.jpg','img/fashion/fashion_details/lg_2_2.jpg'),
(NULL,2,'img/fashion/fashion_details/sm_2_3.jpg','img/fashion/fashion_details/md_2_3.jpg','img/fashion/fashion_details/lg_2_3.jpg'),
(NULL,2,'img/fashion/fashion_details/sm_2_4.jpg','img/fashion/fashion_details/md_2_4.jpg','img/fashion/fashion_details/lg_2_4.jpg'),
(NULL,2,'img/fashion/fashion_details/sm_2_5.jpg','img/fashion/fashion_details/md_2_5.jpg','img/fashion/fashion_details/lg_2_5.jpg'),
(NULL,2,'img/fashion/fashion_details/sm_2_6.jpg','img/fashion/fashion_details/md_2_6.jpg','img/fashion/fashion_details/lg_2_6.jpg'),
(NULL,3,'img/fashion/fashion_details/sm_3_1.jpg','img/fashion/fashion_details/md_3_1.jpg','img/fashion/fashion_details/lg_3_1.jpg'),
(NULL,3,'img/fashion/fashion_details/sm_3_2.jpg','img/fashion/fashion_details/md_3_2.jpg','img/fashion/fashion_details/lg_3_2.jpg'),
(NULL,3,'img/fashion/fashion_details/sm_3_3.jpg','img/fashion/fashion_details/md_3_3.jpg','img/fashion/fashion_details/lg_3_3.jpg'),
(NULL,3,'img/fashion/fashion_details/sm_3_4.jpg','img/fashion/fashion_details/md_3_4.jpg','img/fashion/fashion_details/lg_3_4.jpg'),
(NULL,3,'img/fashion/fashion_details/sm_3_5.jpg','img/fashion/fashion_details/md_3_5.jpg','img/fashion/fashion_details/lg_3_5.jpg'),
(NULL,3,'img/fashion/fashion_details/sm_3_6.jpg','img/fashion/fashion_details/md_3_6.jpg','img/fashion/fashion_details/lg_3_6.jpg'),
(NULL,4,'img/fashion/fashion_details/sm_4_1.jpg','img/fashion/fashion_details/md_4_1.jpg','img/fashion/fashion_details/lg_4_1.jpg'),
(NULL,4,'img/fashion/fashion_details/sm_4_2.jpg','img/fashion/fashion_details/md_4_2.jpg','img/fashion/fashion_details/lg_4_2.jpg'),
(NULL,4,'img/fashion/fashion_details/sm_4_3.jpg','img/fashion/fashion_details/md_4_3.jpg','img/fashion/fashion_details/lg_4_3.jpg'),
(NULL,4,'img/fashion/fashion_details/sm_4_4.jpg','img/fashion/fashion_details/md_4_4.jpg','img/fashion/fashion_details/lg_4_4.jpg'),
(NULL,4,'img/fashion/fashion_details/sm_4_5.jpg','img/fashion/fashion_details/md_4_5.jpg','img/fashion/fashion_details/lg_4_5.jpg'),
(NULL,4,'img/fashion/fashion_details/sm_4_6.jpg','img/fashion/fashion_details/md_4_6.jpg','img/fashion/fashion_details/lg_4_6.jpg'),
(NULL,5,'img/fashion/fashion_details/sm_5_1.jpg','img/fashion/fashion_details/md_5_1.jpg','img/fashion/fashion_details/lg_5_1.jpg'),
(NULL,5,'img/fashion/fashion_details/sm_5_2.jpg','img/fashion/fashion_details/md_5_2.jpg','img/fashion/fashion_details/lg_5_2.jpg'),
(NULL,5,'img/fashion/fashion_details/sm_5_3.jpg','img/fashion/fashion_details/md_5_3.jpg','img/fashion/fashion_details/lg_5_3.jpg'),
(NULL,5,'img/fashion/fashion_details/sm_5_4.jpg','img/fashion/fashion_details/md_5_4.jpg','img/fashion/fashion_details/lg_5_4.jpg'),
(NULL,5,'img/fashion/fashion_details/sm_5_5.jpg','img/fashion/fashion_details/md_5_5.jpg','img/fashion/fashion_details/lg_5_5.jpg'),
(NULL,6,'img/fashion/fashion_details/sm_6_1.jpg','img/fashion/fashion_details/md_6_1.jpg','img/fashion/fashion_details/lg_6_1.jpg'),
(NULL,6,'img/fashion/fashion_details/sm_6_2.jpg','img/fashion/fashion_details/md_6_2.jpg','img/fashion/fashion_details/lg_6_2.jpg'),
(NULL,6,'img/fashion/fashion_details/sm_6_3.jpg','img/fashion/fashion_details/md_6_3.jpg','img/fashion/fashion_details/lg_6_3.jpg'),
(NULL,6,'img/fashion/fashion_details/sm_6_4.jpg','img/fashion/fashion_details/md_6_4.jpg','img/fashion/fashion_details/lg_6_4.jpg'),
(NULL,6,'img/fashion/fashion_details/sm_6_5.jpg','img/fashion/fashion_details/md_6_5.jpg','img/fashion/fashion_details/lg_6_5.jpg'),
(NULL,6,'img/fashion/fashion_details/sm_6_6.jpg','img/fashion/fashion_details/md_6_6.jpg','img/fashion/fashion_details/lg_6_6.jpg'),
(NULL,6,'img/fashion/fashion_details/sm_6_7.jpg','img/fashion/fashion_details/md_6_7.jpg','img/fashion/fashion_details/lg_6_7.jpg'),
(NULL,7,'img/fashion/fashion_details/sm_7_1.jpg','img/fashion/fashion_details/md_7_1.jpg','img/fashion/fashion_details/lg_7_1.jpg'),
(NULL,7,'img/fashion/fashion_details/sm_7_2.jpg','img/fashion/fashion_details/md_7_2.jpg','img/fashion/fashion_details/lg_7_2.jpg'),
(NULL,7,'img/fashion/fashion_details/sm_7_3.jpg','img/fashion/fashion_details/md_7_3.jpg','img/fashion/fashion_details/lg_7_3.jpg'),
(NULL,7,'img/fashion/fashion_details/sm_7_4.jpg','img/fashion/fashion_details/md_7_4.jpg','img/fashion/fashion_details/lg_7_4.jpg'),
(NULL,7,'img/fashion/fashion_details/sm_7_5.jpg','img/fashion/fashion_details/md_7_5.jpg','img/fashion/fashion_details/lg_7_5.jpg'),
(NULL,7,'img/fashion/fashion_details/sm_7_6.jpg','img/fashion/fashion_details/md_7_6.jpg','img/fashion/fashion_details/lg_7_6.jpg'),
(NULL,8,'img/fashion/fashion_details/sm_8_1.jpg','img/fashion/fashion_details/md_8_1.jpg','img/fashion/fashion_details/lg_8_1.jpg'),
(NULL,8,'img/fashion/fashion_details/sm_8_2.jpg','img/fashion/fashion_details/md_8_2.jpg','img/fashion/fashion_details/lg_8_2.jpg'),
(NULL,8,'img/fashion/fashion_details/sm_8_3.jpg','img/fashion/fashion_details/md_8_3.jpg','img/fashion/fashion_details/lg_8_3.jpg'),
(NULL,8,'img/fashion/fashion_details/sm_8_4.jpg','img/fashion/fashion_details/md_8_4.jpg','img/fashion/fashion_details/lg_8_4.jpg'),
(NULL,8,'img/fashion/fashion_details/sm_8_5.jpg','img/fashion/fashion_details/md_8_5.jpg','img/fashion/fashion_details/lg_8_5.jpg'),
(NULL,8,'img/fashion/fashion_details/sm_8_6.jpg','img/fashion/fashion_details/md_8_6.jpg','img/fashion/fashion_details/lg_8_6.jpg'),
(NULL,9,'img/fashion/fashion_details/sm_9_1.jpg','img/fashion/fashion_details/md_9_1.jpg','img/fashion/fashion_details/lg_9_1.jpg'),
(NULL,9,'img/fashion/fashion_details/sm_9_2.jpg','img/fashion/fashion_details/md_9_2.jpg','img/fashion/fashion_details/lg_9_2.jpg'),
(NULL,9,'img/fashion/fashion_details/sm_9_3.jpg','img/fashion/fashion_details/md_9_3.jpg','img/fashion/fashion_details/lg_9_3.jpg'),
(NULL,9,'img/fashion/fashion_details/sm_9_4.jpg','img/fashion/fashion_details/md_9_4.jpg','img/fashion/fashion_details/lg_9_4.jpg'),
(NULL,9,'img/fashion/fashion_details/sm_9_5.jpg','img/fashion/fashion_details/md_9_5.jpg','img/fashion/fashion_details/lg_9_5.jpg'),
(NULL,9,'img/fashion/fashion_details/sm_9_6.jpg','img/fashion/fashion_details/md_9_6.jpg','img/fashion/fashion_details/lg_9_6.jpg'),
(NULL,10,'img/fashion/fashion_details/sm_10_1.jpg','img/fashion/fashion_details/md_10_1.jpg','img/fashion/fashion_details/lg_10_1.jpg'),
(NULL,10,'img/fashion/fashion_details/sm_10_2.jpg','img/fashion/fashion_details/md_10_2.jpg','img/fashion/fashion_details/lg_10_2.jpg'),
(NULL,10,'img/fashion/fashion_details/sm_10_3.jpg','img/fashion/fashion_details/md_10_3.jpg','img/fashion/fashion_details/lg_10_3.jpg'),
(NULL,10,'img/fashion/fashion_details/sm_10_4.jpg','img/fashion/fashion_details/md_10_4.jpg','img/fashion/fashion_details/lg_10_4.jpg'),
(NULL,10,'img/fashion/fashion_details/sm_10_5.jpg','img/fashion/fashion_details/md_10_5.jpg','img/fashion/fashion_details/lg_10_5.jpg'),
(NULL,10,'img/fashion/fashion_details/sm_10_6.jpg','img/fashion/fashion_details/md_10_6.jpg','img/fashion/fashion_details/lg_10_6.jpg'),
(NULL,10,'img/fashion/fashion_details/sm_10_7.jpg','img/fashion/fashion_details/md_10_7.jpg','img/fashion/fashion_details/lg_10_7.jpg'),
(NULL,11,'img/fashion/fashion_details/sm_11_1.jpg','img/fashion/fashion_details/md_11_1.jpg','img/fashion/fashion_details/lg_11_1.jpg'),
(NULL,11,'img/fashion/fashion_details/sm_11_2.jpg','img/fashion/fashion_details/md_11_2.jpg','img/fashion/fashion_details/lg_11_2.jpg'),
(NULL,11,'img/fashion/fashion_details/sm_11_3.jpg','img/fashion/fashion_details/md_11_3.jpg','img/fashion/fashion_details/lg_11_3.jpg'),
(NULL,11,'img/fashion/fashion_details/sm_11_4.jpg','img/fashion/fashion_details/md_11_4.jpg','img/fashion/fashion_details/lg_11_4.jpg'),
(NULL,11,'img/fashion/fashion_details/sm_11_5.jpg','img/fashion/fashion_details/md_11_5.jpg','img/fashion/fashion_details/lg_11_5.jpg'),
(NULL,11,'img/fashion/fashion_details/sm_11_6.jpg','img/fashion/fashion_details/md_11_6.jpg','img/fashion/fashion_details/lg_11_6.jpg'),
(NULL,11,'img/fashion/fashion_details/sm_11_7.jpg','img/fashion/fashion_details/md_11_7.jpg','img/fashion/fashion_details/lg_11_7.jpg'),
(NULL,12,'img/fashion/fashion_details/sm_12_1.jpg','img/fashion/fashion_details/md_12_1.jpg','img/fashion/fashion_details/lg_12_1.jpg'),
(NULL,12,'img/fashion/fashion_details/sm_12_2.jpg','img/fashion/fashion_details/md_12_2.jpg','img/fashion/fashion_details/lg_12_2.jpg'),
(NULL,12,'img/fashion/fashion_details/sm_12_3.jpg','img/fashion/fashion_details/md_12_3.jpg','img/fashion/fashion_details/lg_12_3.jpg'),
(NULL,12,'img/fashion/fashion_details/sm_12_4.jpg','img/fashion/fashion_details/md_12_4.jpg','img/fashion/fashion_details/lg_12_4.jpg'),
(NULL,12,'img/fashion/fashion_details/sm_12_5.jpg','img/fashion/fashion_details/md_12_5.jpg','img/fashion/fashion_details/lg_12_5.jpg'),
(NULL,12,'img/fashion/fashion_details/sm_12_6.jpg','img/fashion/fashion_details/md_12_6.jpg','img/fashion/fashion_details/lg_12_6.jpg'),
(NULL,12,'img/fashion/fashion_details/sm_12_7.jpg','img/fashion/fashion_details/md_12_7.jpg','img/fashion/fashion_details/lg_12_7.jpg'),
(NULL,12,'img/fashion/fashion_details/sm_12_8.jpg','img/fashion/fashion_details/md_12_8.jpg','img/fashion/fashion_details/lg_12_8.jpg'),
(NULL,13,'img/fashion/fashion_details/sm_13_1.jpg','img/fashion/fashion_details/md_13_1.jpg','img/fashion/fashion_details/lg_13_1.jpg'),
(NULL,13,'img/fashion/fashion_details/sm_13_2.jpg','img/fashion/fashion_details/md_13_2.jpg','img/fashion/fashion_details/lg_13_2.jpg'),
(NULL,13,'img/fashion/fashion_details/sm_13_3.jpg','img/fashion/fashion_details/md_13_3.jpg','img/fashion/fashion_details/lg_13_3.jpg'),
(NULL,13,'img/fashion/fashion_details/sm_13_4.jpg','img/fashion/fashion_details/md_13_4.jpg','img/fashion/fashion_details/lg_13_4.jpg'),
(NULL,13,'img/fashion/fashion_details/sm_13_5.jpg','img/fashion/fashion_details/md_13_5.jpg','img/fashion/fashion_details/lg_13_5.jpg'),
(NULL,13,'img/fashion/fashion_details/sm_13_6.jpg','img/fashion/fashion_details/md_13_6.jpg','img/fashion/fashion_details/lg_13_6.jpg'),
(NULL,14,'img/fashion/fashion_details/sm_14_1.jpg','img/fashion/fashion_details/md_14_1.jpg','img/fashion/fashion_details/lg_14_1.jpg'),
(NULL,14,'img/fashion/fashion_details/sm_14_2.jpg','img/fashion/fashion_details/md_14_2.jpg','img/fashion/fashion_details/lg_14_2.jpg'),
(NULL,14,'img/fashion/fashion_details/sm_14_3.jpg','img/fashion/fashion_details/md_14_3.jpg','img/fashion/fashion_details/lg_14_3.jpg'),
(NULL,14,'img/fashion/fashion_details/sm_14_4.jpg','img/fashion/fashion_details/md_14_4.jpg','img/fashion/fashion_details/lg_14_4.jpg'),
(NULL,14,'img/fashion/fashion_details/sm_14_5.jpg','img/fashion/fashion_details/md_14_5.jpg','img/fashion/fashion_details/lg_14_5.jpg'),
(NULL,14,'img/fashion/fashion_details/sm_14_6.jpg','img/fashion/fashion_details/md_14_6.jpg','img/fashion/fashion_details/lg_14_6.jpg'),
(NULL,15,'img/fashion/fashion_details/sm_15_1.jpg','img/fashion/fashion_details/md_15_1.jpg','img/fashion/fashion_details/lg_15_1.jpg'),
(NULL,15,'img/fashion/fashion_details/sm_15_2.jpg','img/fashion/fashion_details/md_15_2.jpg','img/fashion/fashion_details/lg_15_2.jpg'),
(NULL,15,'img/fashion/fashion_details/sm_15_3.jpg','img/fashion/fashion_details/md_15_3.jpg','img/fashion/fashion_details/lg_15_3.jpg'),
(NULL,15,'img/fashion/fashion_details/sm_15_4.jpg','img/fashion/fashion_details/md_15_4.jpg','img/fashion/fashion_details/lg_15_4.jpg'),
(NULL,15,'img/fashion/fashion_details/sm_15_5.jpg','img/fashion/fashion_details/md_15_5.jpg','img/fashion/fashion_details/lg_15_5.jpg'),
(NULL,15,'img/fashion/fashion_details/sm_15_6.jpg','img/fashion/fashion_details/md_15_6.jpg','img/fashion/fashion_details/lg_15_6.jpg'),
(NULL,15,'img/fashion/fashion_details/sm_15_7.jpg','img/fashion/fashion_details/md_15_7.jpg','img/fashion/fashion_details/lg_15_7.jpg'),
(NULL,15,'img/fashion/fashion_details/sm_15_8.jpg','img/fashion/fashion_details/md_15_8.jpg','img/fashion/fashion_details/lg_5_8.jpg'),
(NULL,15,'img/fashion/fashion_details/sm_15_9.jpg','img/fashion/fashion_details/md_15_9.jpg','img/fashion/fashion_details/lg_15_9.jpg'),
(NULL,16,'img/fashion/fashion_details/sm_16_1.jpg','img/fashion/fashion_details/md_16_1.jpg','img/fashion/fashion_details/lg_16_1.jpg'),
(NULL,16,'img/fashion/fashion_details/sm_16_2.jpg','img/fashion/fashion_details/md_16_2.jpg','img/fashion/fashion_details/lg_16_2.jpg'),
(NULL,16,'img/fashion/fashion_details/sm_16_3.jpg','img/fashion/fashion_details/md_16_3.jpg','img/fashion/fashion_details/lg_16_3.jpg'),
(NULL,16,'img/fashion/fashion_details/sm_16_4.jpg','img/fashion/fashion_details/md_16_4.jpg','img/fashion/fashion_details/lg_16_4.jpg'),
(NULL,16,'img/fashion/fashion_details/sm_16_5.jpg','img/fashion/fashion_details/md_16_5.jpg','img/fashion/fashion_details/lg_16_5.jpg'),
(NULL,16,'img/fashion/fashion_details/sm_16_6.jpg','img/fashion/fashion_details/md_16_6.jpg','img/fashion/fashion_details/lg_16_6.jpg'),
(NULL,16,'img/fashion/fashion_details/sm_16_7.jpg','img/fashion/fashion_details/md_16_7.jpg','img/fashion/fashion_details/lg_16_7.jpg'),
(NULL,16,'img/fashion/fashion_details/sm_16_8.jpg','img/fashion/fashion_details/md_16_8.jpg','img/fashion/fashion_details/lg_5_8.jpg'),
(NULL,16,'img/fashion/fashion_details/sm_16_9.jpg','img/fashion/fashion_details/md_16_9.jpg','img/fashion/fashion_details/lg_16_9.jpg'),
(NULL,17,'img/fashion/fashion_details/sm_17_1.jpg','img/fashion/fashion_details/md_17_1.jpg','img/fashion/fashion_details/lg_17_1.jpg'),
(NULL,17,'img/fashion/fashion_details/sm_17_2.jpg','img/fashion/fashion_details/md_17_2.jpg','img/fashion/fashion_details/lg_17_2.jpg'),
(NULL,17,'img/fashion/fashion_details/sm_17_3.jpg','img/fashion/fashion_details/md_17_3.jpg','img/fashion/fashion_details/lg_17_3.jpg'),
(NULL,17,'img/fashion/fashion_details/sm_17_4.jpg','img/fashion/fashion_details/md_17_4.jpg','img/fashion/fashion_details/lg_17_4.jpg'),
(NULL,17,'img/fashion/fashion_details/sm_17_5.jpg','img/fashion/fashion_details/md_17_5.jpg','img/fashion/fashion_details/lg_17_5.jpg'),
(NULL,17,'img/fashion/fashion_details/sm_17_6.jpg','img/fashion/fashion_details/md_17_6.jpg','img/fashion/fashion_details/lg_17_6.jpg'),
(NULL,18,'img/fashion/fashion_details/sm_18_1.jpg','img/fashion/fashion_details/md_18_1.jpg','img/fashion/fashion_details/lg_18_1.jpg'),
(NULL,18,'img/fashion/fashion_details/sm_18_2.jpg','img/fashion/fashion_details/md_18_2.jpg','img/fashion/fashion_details/lg_18_2.jpg'),
(NULL,18,'img/fashion/fashion_details/sm_18_3.jpg','img/fashion/fashion_details/md_18_3.jpg','img/fashion/fashion_details/lg_18_3.jpg'),
(NULL,18,'img/fashion/fashion_details/sm_18_4.jpg','img/fashion/fashion_details/md_18_4.jpg','img/fashion/fashion_details/lg_18_4.jpg'),
(NULL,18,'img/fashion/fashion_details/sm_18_5.jpg','img/fashion/fashion_details/md_18_5.jpg','img/fashion/fashion_details/lg_18_5.jpg'),
(NULL,18,'img/fashion/fashion_details/sm_18_6.jpg','img/fashion/fashion_details/md_18_6.jpg','img/fashion/fashion_details/lg_18_6.jpg'),
(NULL,18,'img/fashion/fashion_details/sm_18_7.jpg','img/fashion/fashion_details/md_18_7.jpg','img/fashion/fashion_details/lg_18_7.jpg'),
(NULL,18,'img/fashion/fashion_details/sm_18_8.jpg','img/fashion/fashion_details/md_18_8.jpg','img/fashion/fashion_details/lg_5_8.jpg'),
(NULL,18,'img/fashion/fashion_details/sm_18_9.jpg','img/fashion/fashion_details/md_18_9.jpg','img/fashion/fashion_details/lg_18_9.jpg'),
(NULL,19,'img/fashion/fashion_details/sm_19_1.jpg','img/fashion/fashion_details/md_19_1.jpg','img/fashion/fashion_details/lg_19_1.jpg'),
(NULL,19,'img/fashion/fashion_details/sm_19_2.jpg','img/fashion/fashion_details/md_19_2.jpg','img/fashion/fashion_details/lg_19_2.jpg'),
(NULL,19,'img/fashion/fashion_details/sm_19_3.jpg','img/fashion/fashion_details/md_19_3.jpg','img/fashion/fashion_details/lg_19_3.jpg'),
(NULL,19,'img/fashion/fashion_details/sm_19_4.jpg','img/fashion/fashion_details/md_19_4.jpg','img/fashion/fashion_details/lg_19_4.jpg'),
(NULL,19,'img/fashion/fashion_details/sm_19_5.jpg','img/fashion/fashion_details/md_19_5.jpg','img/fashion/fashion_details/lg_19_5.jpg'),
(NULL,19,'img/fashion/fashion_details/sm_19_6.jpg','img/fashion/fashion_details/md_19_6.jpg','img/fashion/fashion_details/lg_19_6.jpg'),
(NULL,19,'img/fashion/fashion_details/sm_19_7.jpg','img/fashion/fashion_details/md_19_7.jpg','img/fashion/fashion_details/lg_19_7.jpg'),
(NULL,20,'img/fashion/fashion_details/sm_20_1.jpg','img/fashion/fashion_details/md_20_1.jpg','img/fashion/fashion_details/lg_20_1.jpg'),
(NULL,20,'img/fashion/fashion_details/sm_20_2.jpg','img/fashion/fashion_details/md_20_2.jpg','img/fashion/fashion_details/lg_20_2.jpg'),
(NULL,20,'img/fashion/fashion_details/sm_20_3.jpg','img/fashion/fashion_details/md_20_3.jpg','img/fashion/fashion_details/lg_20_3.jpg'),
(NULL,20,'img/fashion/fashion_details/sm_20_4.jpg','img/fashion/fashion_details/md_20_4.jpg','img/fashion/fashion_details/lg_20_4.jpg'),
(NULL,20,'img/fashion/fashion_details/sm_20_5.jpg','img/fashion/fashion_details/md_20_5.jpg','img/fashion/fashion_details/lg_20_5.jpg'),
(NULL,20,'img/fashion/fashion_details/sm_20_6.jpg','img/fashion/fashion_details/md_20_6.jpg','img/fashion/fashion_details/lg_20_6.jpg'),
(NULL,21,'img/fashion/fashion_details/sm_21_1.jpg','img/fashion/fashion_details/md_21_1.jpg','img/fashion/fashion_details/lg_21_1.jpg'),
(NULL,22,'img/fashion/fashion_details/sm_22_1.jpg','img/fashion/fashion_details/md_22_1.jpg','img/fashion/fashion_details/lg_22_1.jpg'),
(NULL,23,'img/fashion/fashion_details/sm_23_1.jpg','img/fashion/fashion_details/md_23_1.jpg','img/fashion/fashion_details/lg_23_1.jpg'),
(NULL,24,'img/fashion/fashion_details/sm_24_1.jpg','img/fashion/fashion_details/md_24_1.jpg','img/fashion/fashion_details/lg_24_1.jpg'),
(NULL,25,'img/fashion/fashion_details/sm_25_1.jpg','img/fashion/fashion_details/md_25_1.jpg','img/fashion/fashion_details/lg_25_1.jpg'),
(NULL,26,'img/fashion/fashion_details/sm_26_1.jpg','img/fashion/fashion_details/md_26_1.jpg','img/fashion/fashion_details/lg_26_1.jpg'),
(NULL,27,'img/fashion/fashion_details/sm_27_1.jpg','img/fashion/fashion_details/md_27_1.jpg','img/fashion/fashion_details/lg_27_1.jpg'),
(NULL,28,'img/fashion/fashion_details/sm_28_1.jpg','img/fashion/fashion_details/md_28_1.jpg','img/fashion/fashion_details/lg_28_1.jpg'),
(NULL,29,'img/fashion/fashion_details/sm_29_1.jpg','img/fashion/fashion_details/md_29_1.jpg','img/fashion/fashion_details/lg_29_1.jpg'),
(NULL,30,'img/fashion/fashion_details/sm_30_1.jpg','img/fashion/fashion_details/md_30_1.jpg','img/fashion/fashion_details/lg_30_1.jpg'),
(NULL,31,'img/fashion/fashion_details/sm_31_1.jpg','img/fashion/fashion_details/md_31_1.jpg','img/fashion/fashion_details/lg_31_1.jpg');

