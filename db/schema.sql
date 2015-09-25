CREATE DATABASE IF NOT EXISTS puzzletrolldb ;

USE puzzletrolldb;

CREATE TABLE IF NOT EXISTS users  (
  id int NOT NULL AUTO_INCREMENT,
  name varChar(25),
  email varChar(50),
  authoredChallenges int,
  completedChallenges int,
  solvedScore int,
  contributedScore int,
  isMod bit NOT NULL,
  googleId varChar(25),
  googleToken varChar(80),
  createdAt datetime,
  updatedAt datetime,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS challenges (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(25),
  prompt varchar(500),
  answer varchar(255),
  score int,
  dificulty int,
  PRIMARY KEY (ID)
);

