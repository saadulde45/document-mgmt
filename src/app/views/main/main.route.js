(function() {
    'use strict';

    angular
        .module("documentMgmt")
        .config(routeConfig);

    function routeConfig($stateProvider, USER_ROLES) {
        $stateProvider
            .state("app.dashboard", {
                url: 'dashboard',
                views: {
                    'content@app': {
                        templateUrl: 'app/views/dashboard/dashboard.html'
                    }
                },
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
                }
            })
            .state("app.list", {
                url: 'list',
                views: {
                    'content@app': {
                        templateUrl: 'app/views/list/list.html',
                        controller: 'ListController',
                        controllerAs: 'list'
                    }
                },
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
                }
            })
            .state("app.admin", {
                url: 'admin',
                views: {
                    'content': {
                        template: '<div>Admin Template</div>'
                    }
                },
                data: {
                    authorizedRoles: [USER_ROLES.admin]
                }
            });
    }
})();