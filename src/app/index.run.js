(function() {
    'use strict';

    angular
        .module('documentMgmt')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, $rootScope, AUTH_EVENTS, Auth, $state, $window) {

        $log.debug('runBlock end');

        var credentials = JSON.parse(window.sessionStorage.getItem("userData"));

        Auth.login(credentials, function(success) {
            //success function
            $log.info('logging in', success);
            $state.go('home');
        }, function(err) {
            $log.error("error", err);
            $window.location.href = "/login.html";
        });

        //before each state change, check if the user is logged in
        //and authorized to move onto the next state

        $rootScope.$on('$stateChangeStart', function(event, next) {

            var authorizedRoles = next.data.authorizedRoles;

            if (!Auth.isAuthorized(authorizedRoles)) {
                event.preventDefault();
                if (Auth.isAuthenticated()) {
                    // user is not allowed
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                } else {
                    // user is not logged in
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            }
        });
    }

})();