angular.module('zoosk')
.controller('mainController', function($scope){
  $scope.dogs = 1;
  $scope.horses = 2;
  $scope.cows = 8;

  $scope.incrementAnimal = function(animal) {
    $scope[animal]++;
  };
});