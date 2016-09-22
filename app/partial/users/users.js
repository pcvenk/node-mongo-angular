angular.module('app').controller('UsersCtrl',function($scope, $state){

    $scope.addUser = function(){

        $state.go('user');

    };

});
