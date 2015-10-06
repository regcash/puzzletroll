angular.module('puzzleTroll.Util', [])
  .factory('reqUtil', function ($http) {

    var get = function(route, params){
      params = params ? '/' + params : '';
      return $http({
        method: 'GET',
        url: 'https://fast-scrubland-2219.herokuapp.com/api/' + route + params        
      })
      .then(function (data) {
        return data;
      })
      .catch(function (err) {
        return err;
      });
    };

    var post = function (route, params, data) {
      params = params ? '/' + params : '';
      return $http({
        method : 'POST',
        url : 'https://fast-scrubland-2219.herokuapp.com/api/' + route + params,
        data : data 
      })
      .then(function(r){
        return r;
      })
      .catch(function(c){
        return c;
      });
    };

    return {
      get: get,
      post: post
    };
  });
