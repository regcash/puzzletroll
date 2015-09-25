angular.module('puzzleTroll.Util', [])
  .factory('http', function ($http) {

    var get = function(route){
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