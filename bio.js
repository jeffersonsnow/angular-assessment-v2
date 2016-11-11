angular.module('assessment').directive("bioDirective", function(){
return{
  templateUrl: './views/pet-bio.html',
  restrict: "EA",
  scope:{
    pet: "=",
  },
      link: function(scope, element, attributes){
        scope.getPets.then(function(response){
          scope.pets = response.data;
        });
      },
};

});
