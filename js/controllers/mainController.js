angular.module('zoosk')
.controller('mainController', function($scope){
  $scope.counts = {
    dogs: 5,
    horses: 2,
    cows: 8
  };

  $scope.animals = Object.keys($scope.counts);

  $scope.incrementAnimal = function(animal) {
    $scope.counts[animal]++;
  };

  $scope.decrementAnimal = function(animal) {
    $scope.counts[animal]--;
  };
});