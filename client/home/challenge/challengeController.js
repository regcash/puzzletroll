angular.module('puzzleTroll.challengeModule', ['puzzleTroll.Util', 'ui.router'])
.controller('challengeController', ['$scope', '$stateParams', 'reqUtil', function ($scope, $stateParams, reqUtil) {
  reqUtil.get('challenges', $stateParams.challenge)
    .then(function (resp) {
      
    })
    .catch(function (err) {
      console.error(err);
    });
}]);
