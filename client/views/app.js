var app = angular.module('myApp', []);

app.controller('formCtrl', function($scope) {
    $scope.title = "John";
});
$scope.dreams = [];
$scope.submit = function() {
    console.log('test')
}
