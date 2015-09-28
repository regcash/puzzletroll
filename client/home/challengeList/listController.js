angular.module('puzzleTroll.listModule', ['puzzleTroll.Util'])
  .controller('listController', function ($scope, reqUtil) {
    $scope.getChallenges = function () {
      reqUtil.get('challenges')
        .then(function (challenges) {
          $scope.challenges = challenges.data;
        });
    }
    $scope.getChallenges();
  });
