angular.module('app').controller('UserCtrl',function($scope, userService, $state){

    $scope.saveUser = function(){

        console.log($scope.model);
        userService.create($scope.model);
        $state.go('users');

    };

});
