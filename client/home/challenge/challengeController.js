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
    //Had to check if answer was correct, and if so, check if User has already completed challenge
    // Finally, add points/challenge if not completed.
    reqUtil.get('challenges', $stateParams.name)
      .then(function (resp) {
        if ($scope.answer === resp.data.answer) {
          reqUtil.get('users', 'checkChallenges')
            .then(function (resp) {
              var found = false;
              console.log(resp.data);
              if (resp.data.length > 0) {
                for (var x in resp.data) {
                  if (resp.data[x].id === $scope.challenge.id) {
                    $scope.text = "Correct!";
                    found = true;
                    console.log('we in here');
                  }
                }
              } 
              if (!found || resp.data[0].id !== $scope.challenge.id) {
                //update user score
                reqUtil.post('users', 'updateScore', { 
                  score : $scope.challenge.score, 
                  id : $scope.challenge.id
                }).then(function (resp) {
                    $scope.text = "Correct! You earned " + $scope.challenge.score + " points!";
                  });
              }  
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
