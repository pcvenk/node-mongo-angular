angular.module('app').controller('LoginCtrl',function(
    $scope,
    $http,
    $state,
    authService
){

    $scope.loginUser = {};

    $scope.login = function(){

        authService.loginUser($scope.loginUser, function(res){

            $state.go('users');

        });


    };

});
