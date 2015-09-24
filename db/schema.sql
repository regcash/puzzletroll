CREATE DATABASE puzzletrolldb;

USE puzzletrolldb;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name varChar(25),
  authoredChallenges int,
  completedChallenges int,
  solvedScore int,
  contributedScore int,
  isMod bit NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE challenges (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(25),
  prompt varchar(500),
  answer varchar(255),
  score int,
  dificulty int,
  PRIMARY KEY (ID)
);

