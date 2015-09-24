angular.module('puzzleTroll', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/login');

		$stateProvider
			.state('login', {
				url : '/login',
				templateUrl: 'login/login.html',
			})

	})