angular.module('puzzleTroll', ['ui.router', 'puzzleTroll.listModule'])
	.config(function ($stateProvider, $urlRouterProvider) {
		// $urlRouterProvider.otherwise('/login');
		$stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.html'
      })
        .state('comments', {
          url: '/comments',
          templateUrl: 'home/home.comments.html'
        });

	});
