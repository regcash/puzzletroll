angular.module('puzzleTroll', [
  'ui.router', 
  'puzzleTroll.listModule', 
  'puzzleTroll.MessageModule', 
  'puzzleTroll.Util'])

	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'challengeList/listView.html'
      });
	});
