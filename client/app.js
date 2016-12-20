var app = angular.module('myApp', []);

app.controller('submitController', function($scope) {
  $scope.dream = {
    title: '',
    body: ''
  };
  $scope.dreams = [];
  $scope.submit = function() {
    $scope.dreams.push($scope.dream);
    console.log($scope.dream);
    console.log($scope.dreams);
  };



});


console.log('testetstset');
