angular.module('assessment').directive("petDirective", function(){
return{
  templateUrl: './views/pet-tmpl.html',
  restrict: "EA",
  scope:{
    pet: "=",
  },
      link: function(scope, element, attributes){
        // scope.getPets().then(function(response){
        //   scope.pets = response.data;
        // });
      },
      controller: function($scope, $stateParams){
        $scope.showImage = false;
      }
};

});
