angular.module('app').factory('userService',function($http) {

    var user = {

        create: function(data){

            $http.post('/api/user', data)
                .then(function(res){

                    console.log(res);

                });

        }
    };

    return user;
});
