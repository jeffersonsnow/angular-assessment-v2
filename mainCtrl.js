angular.module('assessment').controller("mainCtrl", function($scope, mainService, $stateParams, $http){
  $scope.test = "this is working";
  $scope.getPets = mainService.getPets().then(function(pets){
    $scope.pets = pets;
  });
  $scope.petId = $stateParams.id;
  console.log($stateParams.id);
  $scope.getCurrentPet = mainService.getCurrentPet($scope.petId).then(function(currentPet){
    $scope.currentPet = currentPet;
  });

  //
  // function getCurrentPet(){
  //   return $http({
  //     method: "GET",
  //     url: 'http://practiceapi.devmounta.in/pets/' + $scope.petId
  //       }).then(function(response){
  //         return response.data;
  //       });
  //     }
  //   });
  // }
  // $scope.getCurrentPet = function(){
  //   return $http({
  //     method: "GET",
  //     url: 'http://practiceapi.devmounta.in/pets/' + $scope.petId
  //   });
  // };
  // getCurrentPet.then(function(response){
  //     $scope.currentPet = response.data;
    // });


//   function looper(){
//   for(var i = 0; i < mainService.getPets.length; i++){
//     if($stateParams.id == mainService.getCurrentPet.id){
//       $scope.currentPet = mainService.getCurrentPets[i];
//     }
//
//       }
//       }
//       looper();
});
