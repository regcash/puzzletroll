
angular.module('puzzleTroll.userModule', ['ui.router', 'puzzleTroll.Util'])
.controller('userController', ['$scope','$stateParams', 'reqUtil', function ($scope, $stateParams, reqUtil) {
	reqUtil.get('users', $stateParams.user)
		.then(function(data){
		  console.log(data);
			var user = data.data;
			$scope.name = user.name;
			$scope.email = user.email;
      $scope.completedChallenges = user.completedChallenges;
      $scope.authoredChallenges = user.authoredChallenges;
      $scope.solvedScore = user.solvedScore;
      $scope.contribScore = user.contributedScore;
      $scope.isMod = user.isMod;
		})
		.catch(function(err){
			console.error(err);
		});
}]);
