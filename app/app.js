angular.module('app',
    ['ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'angularUtils.directives.dirPagination'
    ]);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('users', {
        url: '/users',
        templateUrl: 'partial/users/users.html',
        controller: 'UsersCtrl',
        resolve:{
            list:function(userService){

                return userService.getList();
            }
        }
    });
    $stateProvider.state('user', {
        url: '/user',
        templateUrl: 'partial/user/user.html',
        controller: 'UserCtrl'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/users');

});

angular.module('app').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
