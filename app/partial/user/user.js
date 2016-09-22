angular.module('app').controller('UserCtrl',function($scope, userService){

    $scope.saveUser = function(){

        console.log($scope.model);
        userService.create($scope.model);

    };

});
