angular.module('puzzleTroll.Util', [])
  .factory('reqUtil', function ($http) {

    var get = function(route){
      console.log('http://127.0.0.1:8080/api/'+route);
      return $http({
        method: 'GET',
        url: 'http://127.0.0.1:8080/api/'+route        
      }).then(function(res){
        return res;
      });
    };

    var post = function () {

    };




    return {
      get: get,
      post: post
    };
  });
