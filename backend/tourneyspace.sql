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
    `location`   varchar(30)   NOT NULL,
    `image`      varchar(50),
    `date`       date          NOT NULL,
    `teams`      varchar(100)  NOT NULL,
    `courts`     integer       NOT NULL,
    `startTime`  datetime          NOT NULL,
    `pause`      datetime          NOT NULL,
    `gameLength` datetime NOT NULL
) DEFAULT CHARSET = utf8;