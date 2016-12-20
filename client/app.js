var app = angular.module('myApp', []);
//
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

//
// var mainController = function($scope, $http) {
//   $scope.dream = {};
//
//   $http.get('/api/dreams')
//       .success(function(data) {
//         $scope.dreams = data;
//         console.log(data);
//       })
//       .error(function(data) {
//         console.log('Error: ' + data);
//       });
//
//   $scope.createDream = function() {
//     $http.post('/api/dreams', $scope.dream)
//           .success(function(data) {
//             $scope.dream = {};
//             $scope.dreams = data;
//             console.log(data);
//           })
//           .error(function(data) {
//             console.log('Error: ' + data);
//           });
//   };
// };
