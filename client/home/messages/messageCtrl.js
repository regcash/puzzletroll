angular.module('puzzleTroll.MessageModule', ['puzzleTroll.Util'])
  .controller('messageCtrl', function ($scope, http) {
  	$scope.getMessages = function(){
	   	http.get('messages')
	   		.then(function(messages){
	   			console.log(messages);
	   			$scope.messages = messages;
	   		})
	   		.catch(function(err){
	   			console.log('error', err);
	   			$scope.messages = err;
	   		})
  	};
  	$scope.getMessages();
  })