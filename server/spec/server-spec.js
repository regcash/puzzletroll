var mysql = require('mysql');
var request = require('request'); 
var expect = require('../../node_modules/chai/chai').expect;
var Promise = require('bluebird');
var User = require('../../db/models/User.js');
var app = require('../server.js');
var supertest = require('supertest');
var agent = supertest.agent(app);
// var db = require('/../../db/queryHandler.js');

describe("Puzzle Troll server spec", function() {

  describe("Passport authentication", function(){
    beforeEach(function(done) {
      var user = new User({
        name: 'test',
        completedChallenges: 0,
        authoredChallenges: 0,
        solvedScore: 0,
        contributedScore: 0,
        isMod: false
      });
      user.save(done);
    });


    
  })

// var User, app, mongoose, request, server, should, user, agent;

//   should   = require("should");
//   app      = require("../server");
//   mongoose = require("mongoose");
//   User     = mongoose.model("User");
//   request  = require("supertest");
//   agent = request.agent(app)

//   describe('User', function () {
//     before(function(done) {
//         user = new User({
//           email    : "user@user.com",
//           firstName: "Full Name",
//           lastName : "Last Name",
//           password : "pass11"
//         });
//         user.save(done)
//       });
//     describe('Login test', function () {
//         it('should redirect to /', function (done) {
//           agent
//           .post('/users/session')
//           .field('email', 'user@user.com')
//           .field('password', 'pass11')
//           .expect('Location','/')
//           .end(done)
//         })

//     after(function(done) {
//         User.remove().exec();
//         return done();
//       });

//   })
// })























  // beforeEach(function(done) {
    
    // dbConnection = mysql.createConnection({
    //   user: "root",
    //   password: "",
    //   database: "testdb"
    // });
    // dbConnection.connect();

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    // dbConnection.query("truncate messages", done);
  // });

  // afterEach(function() {
    // dbConnection.end();

  // });
  describe('Server side api calls', function(){




    it("Should get user from server", function(done) {
      return new Promise(function(resolve, reject){
        request({
          method: 'get',
          url: 'http://127.0.0.1:8080/api/users',
          headers: {
            'Content-Type' : 'application/json'
          }
        }, function (err, res, body) {
            reject(err);
            resolve(res, body);
          }
        );
      })
      .then(function(res, body){
        expect(res).to.eql(200);
        expect(body).to.be.an('object');
      })
      .catch(function(err){
        expect(err).to.eql(null);
      })
      .finally(function(){
        done();
      })
    });

    it("Should get challenge from server", function(done) {
      return new Promise(function(resolve, reject){
        request({
          method: 'get',
          url: 'http://127.0.0.1:8080/api/challenges',
          headers: {
            'Content-Type' : 'application/json'
          }
        }, function (err, res, body) {
            reject(err);
            resolve(res, body);
          }
        );
      })
      .then(function(res, body){
        expect(res).to.eql(200);
        expect(body).to.be.an('object');
      })
      .catch(function(err){
        expect(err).to.eql(null);
      })
      .finally(function(){
        done();
      })
    });

    it("Should post user to the server", function(done) {
      return new Promise(function(resolve, reject){
        request({
          method: 'post',
          url: 'http://127.0.0.1:8080/api/users',
          headers: {
            'Content-Type' : 'application/json'
          },
          json: {
            name: 'test user',
            prompt: 'test prompt',
            answer: 'test answer',
            score:0,
            difficulty: 0
          }
        }, function (err, res, body) {
            reject(err);
            resolve(res, body);
          }
        );
      })
      .then(function(res, body){
        expect(res).to.eql(200);
        expect(body).to.be.a('string');
      })
      .catch(function(err){
        expect(err).to.eql(null);
      })
      .finally(function(){
        done();
      })
    });

    it("Should post challenge to the server", function(done) {
      return new Promise(function(resolve, reject){
        request({
          method: 'post',
          url: 'http://127.0.0.1:8080/api/challenges',
          headers: {
            'Content-Type' : 'application/json'
          },
          json: {
            name: 'test user'
          }
        }, function (err, res, body) {
            reject(err);
            resolve(res, body);
          }
        );
      })
      .then(function(res, body){
        expect(res).to.eql(200);
        expect(body).to.be.a('string');
      })
      .catch(function(err){
        expect(err).to.eql(null);
      })
      .finally(function(){
        done();
      })
    });
  });

//   it("Should output all messages from the DB", function(done) {
//     // Let's insert a message into the db
//        var tablename = "messages"; // TODO: fill this out
//     // TODO - The exact query string and query args to use
//     // here depend on the schema you design, so I'll leave
//     // them up to you. */

//     var queryString = "INSERT INTO messages (body, UserId, roomname) VALUES ('Men like you can never change!', (SELECT id from Users WHERE name = 'Valjean' LIMIT 1), 'main');";
//     var queryArgs = [];

//     dbConnection.query(queryString, queryArgs, function(err) {
//       if (err) { throw err; }

//       // Now query the Node chat server and see if it returns
//       // the message we just inserted:
//       request("http://127.0.0.1:3000/classes/messages", function(error, response, body) {
//         var messageLog = JSON.parse(body);
//         expect(messageLog[0].body).to.equal("Men like you can never change!");
//         expect(messageLog[0].roomname).to.equal("main");
//         done();
//       });
//     });
//   });
});