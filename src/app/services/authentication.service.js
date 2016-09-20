(function() {
    'use strict';

    angular
        .module('documentMgmt')
        .service('AuthenticationService', AuthenticationService);

    function AuthenticationService($http, $rootScope, $window, Session, AUTH_EVENTS, USERS) {
        var authService = {};


        // The login function
        authService.login = function(user, success, error) {
            /* This is my dummy technique, normally here the 
             * user is returned with his data from the db
             */
            var users = USERS;

            if (user && users[user.username]) {
                var loginData = users[user.username];

                if (user.username == loginData.username && user.password == loginData.username) {

                    // Delete password not to be seen clientside 
                    delete loginData.password;

                    // Update current user into the Session service
                    Session.create(loginData);

                    // Fire event of successful login
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);

                    success(loginData);
                } else {
                    // Unsuccessful login, fire login failed event
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    error();
                }
            } else {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                error();
            }

        };

        // Check if the user is authenticated
        authService.isAuthenticated = function() {
            return !!Session.user;
        };

        /* Check if the user is authorized to access the next route
         * this function can be also used on element level
         */
        authService.isAuthorized = function(authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return (authService.isAuthenticated() &&
                authorizedRoles.indexOf(Session.userRole) !== -1);
        };

        // Log out the user and broadcast the logoutSuccess event
        authService.logout = function() {
            Session.destroy();
            $window.sessionStorage.removeItem("userData");
            $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
            $window.location.href = "/login.html";
        }

        return authService;
    }

})();