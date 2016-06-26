angular.module("todoListApp", [])
.controller("mainCtrl", function($scope){
    $scope.helloWorld = function() {
        console.log("Hello there! This is the hellowWorld controller function in the mainCtrl!");
    };
});