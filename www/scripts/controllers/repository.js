

 angular.module('starter.controllers')
 .controller('RepositoryCtrl', function ($scope, $state) {
 	$scope.getInfo=function(repository){
 		if(repository!=""){
 			$state.go('tabs.info');
 		}
 	};
 });