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
          reqUtil.get('users', 'checkChallenges')
            .then(function (resp) {
              var found = false;
              if (resp.data.length > 0) {
                for (var x in resp.data) {
                  if (resp.data[x].id === $scope.challenge.id) {
                    $scope.text = "Correct!";
                    found = true;
                  }
                }
              } else if (!found || resp.data[0].id !== $scope.challenge.id) {
                  //update user score
                  console.log('littlecheck', resp.data);
                  reqUtil.post('users', 'updateScore', { 
                    score : $scope.challenge.score, 
                    id : $scope.challenge.id
                  }).then(function (resp) {
                      $scope.text = "Correct!";
                    });
                }
              //}
              
              
            });
        } else {
          $scope.text = "Sorry Try Again!";
        }
      })
      .catch(function (err) {
        console.error(err);
      });
  };
}]);
