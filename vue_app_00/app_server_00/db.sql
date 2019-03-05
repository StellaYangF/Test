#完成任务用户登录
#创建用户表 xz_login
CREATE TABLE xz_login (
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(25),
    upwd VARCHAR(32)
);
#增
INSERT INTO xz_login VALUES (null, 'tom',md5('123'))
#改
UPDATE xz_login SET pwd=md5('456') WHERE id=5;
UPDATE xz_login SET name='eva' WHERE id=5;
#删
DELETE FROM xz_login WHERE id=4;
#查
SELECT id,name,pwd FROM xz_login;