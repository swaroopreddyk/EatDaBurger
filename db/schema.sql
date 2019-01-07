DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE BURGERS (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  devoured BOOLEAN, -- 0 still on the menu and 1 is devoured
  PRIMARY KEY (id)
);