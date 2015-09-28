angular.module('puzzleTroll.MessageModule', ['puzzleTroll.Util'])
  .controller('messageCtrl', function ($scope, http) {
  	$scope.getMessages = function(){
	   	http.get('messages')
	   		.then(function(messages){
	   			$scope = messages;
	   		});
  	};
  	$scope.getMessages();
  })