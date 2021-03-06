(function() {
    'use strict';

    angular
        .module('documentMgmt')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, $rootScope, AUTH_EVENTS, AuthenticationService, $state, $window, UserService, toastr) {

        var credentials = JSON.parse($window.sessionStorage.getItem("userData"));

        AuthenticationService.login(credentials, function(success) {
            
            UserService.getUserDetails().userData.$promise
            .then(function(response) {
                // Setting user details for global access.
                $rootScope.userDetails = response.data;
                $state.go('app.list');
            })
            .catch(function(error) {
                $log.error('error', error);
                toastr.error('Error', error.message);
            });
        }, function(err) {
            $log.error("error", err);
            toastr.error('Error', err);
            $window.location.href = "/login.html";
        });

        /* Before each state change, check if the user is logged in
         * and authorized to move onto the 'toState' state
         */

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {

            var authorizedRoles = toState.data.authorizedRoles;

            if (!AuthenticationService.isAuthorized(authorizedRoles)) {
                event.preventDefault();
                if (AuthenticationService.isAuthenticated()) {
                    // User is not allowed
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                } else {
                    // User is not logged in
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            } else {
                // Redirection for partial state to first child state.
                if (toState.redirectTo) {
                    event.preventDefault();
                    $state.go(toState.redirectTo, toParams);
                }
            }
        });
    }

})();