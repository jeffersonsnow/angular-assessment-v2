angular.module('assessment').service("mainService", function($http, $stateParams){
  this.getPets = function(){
    return $http({
      method: "GET",
      url: 'http://practiceapi.devmounta.in/pets'
    }).then(function(response){
      if(response.status === 200){
        return response.data;
      }
      return "Could not find pets!";
    });
  };
  this.getCurrentPet = function(id){
    return $http({
      method: "GET",
      url: 'http://practiceapi.devmounta.in/pets/' + id
    }).then(function(response){
      return response.data;
    });
  };
});
