angular.module('puzzleTroll.homeModule', ['puzzleTroll.Util', 'ui.router'])
	.controller('homeController', ['$scope', 'reqUtil', '$state', function ($scope, reqUtil, $state) {
		reqUtil.get('users', 'me')
      .then(function(res){
        $scope.me = res.data;
			});
	}]);