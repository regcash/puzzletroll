angular.module('puzzleTroll.Util', [])
  .factory('http', function ($http) {

    var get = function(route){

      // console.log('http://localhost:8080/api/'+route);

      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/' + route        
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