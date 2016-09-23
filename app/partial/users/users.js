angular.module('app').controller('UsersCtrl',function($scope, $state, userService){

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
});
