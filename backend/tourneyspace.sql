#create the database

CREATE DATABASE IF NOT EXISTS tourneyspace;
USE tourneyspace;
GRANT ALL PRIVILEGES ON *.* TO 'user' IDENTIFIED BY 'user';
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS `Product`
(
    `productId`          varchar(40)  NOT NULL,
    `productType`        varchar(50)  NOT NULL,
    `productName`        varchar(50)  NOT NULL PRIMARY KEY,
    `productDescription` varchar(500) NOT NULL,
    `bikeSpeed`          DOUBLE(10, 1),
    `bikeComfort`        DOUBLE(10, 1),
    `bikeAgility`        DOUBLE(10, 1)
) DEFAULT CHARSET = utf8;

create table if not exists users
(

    username              varchar(50)                       not null primary key,
    userId                char(36)                          not null,
    email                 varchar(30)                       not null,
    firstName             varchar(20)                       not null,
    lastName              varchar(25)                       not null,
    password              varchar(100)                      not null,
    enabled               boolean                           not null,
    role                  varchar(15) default ('USER') not null,
    accountNonExpired     boolean     default false         not null,
    credentialsNonExpired boolean     default false         not null,
    accountNonLocked      boolean     default false         not null

);
create table if not exists authorities
(
    username  varchar(50) not null,
    authority varchar(50) not null,
    constraint fk_authorities_users foreign key (username) references users (username)
);
create unique index ix_auth_username on authorities (username, authority);