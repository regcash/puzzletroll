angular.module('puzzleTroll', ['ui.router', 'puzzleTroll.listModule'])
	.config(function ($stateProvider, $urlRouterProvider) {
		// $urlRouterProvider.otherwise('/login');
		$stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'challengeList/listView.html'
      });
	});
