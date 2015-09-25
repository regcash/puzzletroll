angular.module('puzzleTroll', [
  'ui.router', 
  'puzzleTroll.listModule', 
  'puzzleTroll.MessageModule', 
  'puzzleTroll.Util',
  'puzzleTroll.userModule'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
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
