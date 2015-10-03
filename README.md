# PuzzleTroll

Tech Stack:
- Mysql
- Express
- Angular
- Node

## Database - db/
- Sequelize ORM with Mysql

Models:
- Challenge:
  name: STRING,
  prompt: STRING,
  answer: STRING,
  score: INTEGER,
  difficulty: INTEGER

- Message: 
  name: STRING,
  message: STRING,
  challenge: STRING

- User:
  name: STRING,
  email: STRING,
  completedChallenges: INTEGER,
  authoredChallenges: INTEGER,
  solvedScore: INTEGER,
  contributedScore: INTEGER,
  isMod: BOOLEAN,
  googleId: STRING,
  googleToken: STRING

Relationships:
  Challenge belongs to many User
  User belongs to many Challenge


## Server-Side - server/
Using Node and Express we have created a REST API:
GET /api/users/      responds with all users
GET /api/users/:id  responds with user queried by provided id
GET /api/users/me   responds with id of current user
GET /api/users/checkChallenges    responds with completed challenges of current user
POST /api/users/updateScore data={id: challengeID, score: challengeScore} adds the challenge from the given id to the user's list of completed challenges and adds the challenge's score to the user's total score.
GET /api/challenges/  responds with all challenges
GET /api/challenges/:challengeName  responds with the challenge matching the provided name
POST /api/challenges/ data={
  name: challenge name,
  prompt: challenge prompt,
  answer: challenge answer,
  score: challenge score,
  difficulty: challenge difficulty
} 
creates the provided challenge in the database
GET /api/messages/  responds with all messages
GET /api/messages/:challenge responds with all messages for a given challenge
POST /api/messages/ data={
  name: username,
  message: message,
  challenge: challenge
}
adds the given message to the database

server.js uses router.js which uses handler.js for all API requests.

Server also uses PassportJS with Google OAuth authentcication. see server/config/auth.js and server/config/passport.js

## Client-Side - client/
Client side uses Angular and Angular-route.
client/index.html is our login page. Once a user has successfully authenticated via Google OAuth, they will be sent client/home/home.html.
client/utils.js has the factory 'reqUtil' which manages the API calls for the user.
client/app.js is the angularApp and manages states for each of html templates that will be rendered.
Inside client/home/ we have angular controllers and views for challenge(+challengeAnswer view), challengeList, message, user.
