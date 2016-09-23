angular.module('app').factory('userService',function($http) {

    var user = {

        model: {
            list:[],
            item:null
        },
        create: function(data){

            $http.post('/api/user', data)
                .then(function(res){

                    console.log(res.data);

                });

        },
        getList: function(cb){

            return $http.get('/api/users')
                .then(function(res){

                    var list = res.data;
                    user.model.list = list;

                    if(cb) {
                        cb(list);
                    }

                });

        }

    };

    return user;
});
