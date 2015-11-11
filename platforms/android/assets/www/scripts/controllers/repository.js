

 angular.module('starter.controllers')
 .controller('RepositoryCtrl', function ($scope) {
 	$scope.getInfo=function(repository){
 		console.log(repository);
 	};
 });