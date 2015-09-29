angular.module('puzzleTroll.Util', [])
  .factory('reqUtil', function ($http) {

    var get = function(route, params){

      // console.log('http://localhost:8080/api/'+route);
      params = params ? '/' + params : '';
      console.log('http://localhost:8080/api/' + route + params);
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/' + route + params        
      })
      .then(function(r){
        return r;
      })
      .catch(function(c){
        return c;
      })
    };

    var post = function () {

    };


    return {
      get: get,
      post: post
    };
  });
