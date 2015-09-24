angular.module('puzzleTroll', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/login');

		$stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.html'
      });

	});
