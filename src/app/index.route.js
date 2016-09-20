(function() {
    'use strict';

    angular
        .module('documentMgmt')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider, USER_ROLES) {
        $stateProvider
            .state('app', {
                url: '/',
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
                },
                redirectTo: 'app.list', // Since its a partial state, redirect to valid child state
                views: {
                    'app': {
                        templateUrl: 'app/views/main/main.html',
                        controller: 'MainController',
                        controllerAs: 'main'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }

})();