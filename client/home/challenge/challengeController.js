angular.module('puzzleTroll.challengeModule', ['puzzleTroll.Util', 'ui.router'])
.controller('challengeController', ['$scope', '$stateParams', 'reqUtil', function ($scope, $stateParams, reqUtil) {
  var queryChallenge = function () {
    reqUtil.get('challenges', $stateParams.name)
      .then(function (resp) {
        $scope.challenge = resp.data;
      })
      .catch(function (err) {
        console.error(err);
      });
  };
  queryChallenge();
  
  $scope.checkAnswer = function () {
    $scope.text = '';
    reqUtil.get('challenges', $stateParams.name)
      .then(function (resp) {
        if ($scope.answer === resp.data.answer) {
          console.log("true");
          $scope.text = "Correct!";
        } else {
          $scope.text = "Sorry Try Again!";
        }
      })
      .catch(function (err) {
        console.error(err);
      });
  };
}]);
