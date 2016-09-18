(function() {
    'use strict';

    angular
        .module('documentMgmt')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, $rootScope, AUTH_EVENTS, AuthenticationService, $state, $window, UserService) {

        var credentials = JSON.parse($window.sessionStorage.getItem("userData"));

        AuthenticationService.login(credentials, function(success) {
            
            UserService.getUserDetails().userData.$promise
            .then(function(response) {
                $rootScope.userDetails = response.data;
                $state.go('app.list');
            })
            .catch(function(error) {
                $log.error('error', error);
            });
        }, function(err) {
            $log.error("error", err);
            $window.location.href = "/login.html";
        });

        //before each state change, check if the user is logged in
        //and authorized to move onto the 'toState' state

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {

            var authorizedRoles = toState.data.authorizedRoles;

            if (!AuthenticationService.isAuthorized(authorizedRoles)) {
                event.preventDefault();
                if (AuthenticationService.isAuthenticated()) {
                    // user is not allowed
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                } else {
                    // user is not logged in
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            } else {
                if (toState.redirectTo) {
                    event.preventDefault();
                    $state.go(toState.redirectTo, toParams);
                }
            }
        });
    }

})();