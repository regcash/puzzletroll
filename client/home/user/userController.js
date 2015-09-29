angular.module('puzzleTroll.userModule', ['puzzleTroll.Util'])
.controller('userController', function ($scope, http) {
  $scope.name = http.get('users');
  $scope.email;
  $scope.completedChallenges;
  $scope.authoredChallenges;
  $scope.solvedScore;
  $scope.authoredScore;
});