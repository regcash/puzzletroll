angular.module('puzzleTroll.MessageModule', ['puzzleTroll.Util', 'ui.router'])
  .controller('messageCtrl',['$scope', 'reqUtil', '$stateParams', function ($scope, reqUtil, $stateParams) {
  	
  	$scope.getMessages = function(){
	   	reqUtil.get('messages', $stateParams.name)
	   		.then(function(messages){	  
	   			if(!Array.isArray(messages.data)){
	   				messages.data = [messages.data];
	   			}
	   			$scope.messages = messages.data;
	   		})
	   		.catch(function(err){
	   			console.error('msgctrl get message error', err);
	   			$scope.messages = err;
	   		});
  	};

  	$scope.getMessages();

  	$scope.postMessage = function(){
      reqUtil.get('users', 'me')
        .then(function(res){
          var user = res.data;
          console.log(user);
      		return message = {
      			name : user.name || 'test/error',
            userId: user.id,
      			message : $scope.textToPost,
      			challenge: $stateParams.name
      		};
        })
        .then(function(message){
      		$scope.textToPost = '';
      		return reqUtil.post('messages', $stateParams.name, message)
        })
        .then(function (data) {
          $scope.getMessages();
        })
        .catch(function (err) {
          console.error('msgctrl post message error: ', err);
        });
  	};

  }]);
