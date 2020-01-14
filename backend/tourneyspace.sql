#create the database

CREATE DATABASE IF NOT EXISTS tourneyspace;
USE tourneyspace;
GRANT ALL PRIVILEGES ON *.* TO 'user' IDENTIFIED BY 'user';
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS `Team`
(
    `teamId` varchar(40) NOT NULL PRIMARY KEY,
    `name`   varchar(50) NOT NULL
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `Tourney`
(
    `tourneyId`  varchar(40)   NOT NULL PRIMARY KEY,
    `name`       varchar(40)   NOT NULL,
    `location`   varchar(30),
    `image`      varchar(50),
    `date`       varchar(10),
    `teams`      varchar(100),
    `courts`     integer,
    `startTime`  varchar(10)   NOT NULL,
    `pause`      double(10,1)   NOT NULL,
    `gameLength` double(10, 1) NOT NULL
) DEFAULT CHARSET = utf8;