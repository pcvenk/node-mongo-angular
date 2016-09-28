angular.module('app').controller('RegisterCtrl',function(
    $scope,
    $http,
    authService,
    $state
){

    $scope.user = {};

    $scope.register = function(){

        console.log($scope.user);

        authService.registerUser($scope.user, function(){

            console.log($scope.user);
            $state.go('login');

        });

    };


});
