angular.module('puzzleTroll.listModule', ['puzzleTroll.Util'])
  .controller('listController', function ($scope, reqUtil) {
    var storeName = function () {
      reqUtil.get('users', 'me')
        .then(function (resp) {
          localStorage.setItem("userId", resp.data);
        });
    };
    $scope.getChallenges = function () {
      reqUtil.get('challenges')
        .then(function (challenges) {
          $scope.challenges = challenges.data;
        });
    };

    if (!localStorage.getItem("userId")) {
      storeName();
    }
    $scope.getChallenges();
  });
