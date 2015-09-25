angular.module('puzzleTroll', ['ui.router', 'puzzleTroll.listModule', 'puzzleTroll.userModule'])
	.config(function ($stateProvider, $urlRouterProvider) {
		// $urlRouterProvider.otherwise('/login');
		$stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'challengeList/listView.html'
      })
      .state('user', {
        url: '/:user',
        templateUrl: 'user/userView.html'
      });
	});
