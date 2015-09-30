angular.module('puzzleTroll.challengeModule', ['puzzleTroll.Util', 'ui.router'])
.controller('challengeController', ['$scope', '$stateParams', 'reqUtil', function ($scope, $stateParams, reqUtil) {
  reqUtil.get('challenges', $stateParams.name)
    .then(function (resp) {
      $scope.challenge = resp.data;
    })
    .catch(function (err) {
      console.error(err);
    });
}]);
