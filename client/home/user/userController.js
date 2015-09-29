angular.module('puzzleTroll.userModule', ['ui.router', 'puzzleTroll.Util'])
.controller('userController', ['$scope','$stateParams', 'reqUtil', function ($scope, $stateParams, reqUtil) {
	// $scope.user = $stateParams.user;
	console.log($stateParams.user);
	reqUtil.get('users', $stateParams.user)
		.then(function(data){
			var user = data.data;
			$scope.name = user.name;
			$scope.email = user.email;
		})
		.catch(function(err){
			console.error(err);
		});
}]);
