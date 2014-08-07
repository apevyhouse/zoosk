angular.module('zoosk')
.controller('mainController', function($scope){
  $scope.counts = {
    dogs: 5,
    horses: 2,
    cows: 8
  };

  $scope.incrementAnimal = function(animal) {
    $scope.counts[animal]++;
  };
});