angular.module('puzzleTroll.MessageModule', ['puzzleTroll.Util'])
  .controller('messageCtrl', function ($scope, reqUtil) {
  	$scope.getMessages = function(){
	   	reqUtil.get('messages')
	   		.then(function(messages){
	   			$scope = messages;
	   		});
  	};
  	$scope.getMessages();
  });
