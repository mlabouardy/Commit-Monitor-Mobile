


 angular.module('starter.controllers')
 .controller('HomeCtrl', function ($scope, repoFactory) {
 	repoFactory.getInfo("mlabouardy", "Commit-Monitor").success(function(data){
 		$scope.owner={
 			login:data.owner.login,
 			avatar:data.owner.avatar_url,
 			url:data.owner.html_url
 		};
 	});
 });
