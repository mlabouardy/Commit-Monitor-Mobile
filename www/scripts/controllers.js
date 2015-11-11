
angular.module('starter.controllers', [])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
    })
    .state('tabs.repository', {
      url: "/repository",
      views: {
        'repository-tab': {
          templateUrl: "templates/repository.html",
          controller: 'RepositoryCtrl'
        }
      }
    })
    .state('tabs.create', {
      url: "/create",
      views: {
        'create-tab': {
          templateUrl: "templates/create.html",
          controller: 'ManagerCtrl'
        }
      }
    });
   $urlRouterProvider.otherwise("/tab/home");
});