DROP DATABASE SendMe;
GO
CREATE DATABASE SendMe;
GO
use SendMe
GO
CREATE TABLE provider(
id int,
name nvarchar(100),
iban nvarchar(24),
telephone int,
email nvarchar(100),
PRIMARY KEY (id)
);
GO
CREATE TABLE city(
id int,
name nvarchar(100)
PRIMARY KEY (id)
);
GO
CREATE TABLE customer(
id int,
name nvarchar(100),
iban nvarchar(24),
telephone int,
email nvarchar(100),
cityId int,
PRIMARY KEY (id),
CONSTRAINT fk_cust_city FOREIGN KEY (cityId) REFERENCES city(id)
);
GO
CREATE TABLE adds(
id int,
status int NOT NULL DEFAULT 0,
picture nvarchar(255),
weight float(24),
height int,
width int,
depth int,
destination nvarchar(255),
source nvarchar(255),
cityDestination int,
citySource int,
cpDestination nvarchar(20),
cpSource nvarchar(20),
created datetime,
expectedDelivery datetime,
pickDate datetime,
durationActive date,
customerId int,
cityId int,
PRIMARY KEY (id),
CONSTRAINT fk_adds_customer FOREIGN KEY (customerId) REFERENCES customer(id),
CONSTRAINT fk_adds_city FOREIGN KEY (cityId) REFERENCES city(id)
);
GO
CREATE TABLE transactions(
code int,
status int,
dateCurrent datetime,
dateExpedition datetime,
customerId int,
providerId int,
addId int,
PRIMARY KEY (code),
CONSTRAINT fk_trans_provider FOREIGN KEY (providerId) REFERENCES provider(id),
CONSTRAINT fk_trans_cust FOREIGN KEY (customerId) REFERENCES customer(id),
CONSTRAINT fk_trans_adds FOREIGN KEY (addId) REFERENCES adds(id)
);
GO
CREATE TABLE status(
id int,
description nvarchar(100),
PRIMARY KEY (id)
);
GO
CREATE TABLE betHist(
id int,
betQty float(24),
providerId int,
addId int,
PRIMARY KEY (id),
CONSTRAINT fk_bet_provider FOREIGN KEY (providerId) REFERENCES provider(id),
CONSTRAINT fk_bet_adds FOREIGN KEY (addId) REFERENCES adds(id)
);