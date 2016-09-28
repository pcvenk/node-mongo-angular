angular.module('app').controller('UsersCtrl',function($scope, $state, userService, authService){

    $scope.order = 'name';
    $scope.pageSize = 5;
    $scope.list = userService.model.list;

    $scope.addUser = function(){

        $state.go('user');

    };

    $scope.toggleOrder = function(){

        $scope.orderByField = 'name';
        $scope.reverseSort = false;
    };

    $scope.signOut = function(){

        authService.logOut(function(){

            $state.go('login')

        });

    };
});
