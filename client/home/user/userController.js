angular.module('puzzleTroll.userModule', [])
.controller('userController', function ($scope) {
  $scope.name;
  $scope.email;
  $scope.completedChallenges;
  $scope.authoredChallenges;
  $scope.solvedScore;
  $scope.authoredScore;
});