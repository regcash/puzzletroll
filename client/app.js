angular.module('puzzleTroll', [
  'ui.router', 
  'puzzleTroll.listModule', 
  'puzzleTroll.challengeModule',
  'puzzleTroll.MessageModule', 
  'puzzleTroll.Util',
  'puzzleTroll.userModule'])
	.config(function ($stateProvider, $urlRouterProvider) {
		//$urlRouterProvider.otherwise('/');
		$stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'challengeList/listView.html'
      })
      .state('messages', {
        url: '/messages',
        templateUrl: 'messages/message.html'
      })
      .state('user', {
        url: '/users/:user',
        templateUrl: 'user/userView.html'
      })
      .state('challenges', {
        url: '/challenges/challenge1',
        templateUrl: 'challenge/challengeView.html'
      })
        .state('challenges.messages', {
          url: '/messages',
          templateUrl: 'challenge/challengeMsg.html'
        })
        .state('challenges.answer', {
          url: '/answer',
          templateUrl: 'challenge/challengeAnswer.html'
        });
      //putting here temporarily, will make more localized to each challenge later
	});
