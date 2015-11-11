angular.module('starter.services',[])
  .factory('repoFactory', function ($http) {
    var baseUrl="https://api.github.com/repos/";

    return {
      getInfo: function(user, repo){
      	return $http.get(baseUrl+user+'/'+repo);
      },
      getContributors: function (user, repo) {
        return $http.get(baseUrl+user+'/'+repo+'/contributors');
      },
      getLanguages:function(user, repo){
      	return $http.get(baseUrl+user+'/'+repo+'/languages');
      },
      getContents:function(user, repo){
      	return $http.get(baseUrl+user+'/'+repo+'/contents');
      },
      getCommits:function(user, repo){
      	return $http.get(baseUrl+user+'/'+repo+'/commits');
      }
    };
  });