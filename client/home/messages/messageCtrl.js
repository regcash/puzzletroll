angular.module('puzzleTroll.MessageModule', ['puzzleTroll.Util'])
  .controller('messageCtrl', function ($scope, reqUtil) {
  	$scope.getMessages = function(){
	   	reqUtil.get('messages')
	   		.then(function(messages){
	   			
	   			$scope.messages = messages.data;
          console.log("stuff", $scope.messages);
	   		})
	   		.catch(function(err){
	   			console.log('error', err);
	   			$scope.messages = err;
	   		})
  	};
  	$scope.getMessages();
  });
