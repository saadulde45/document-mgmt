(function() {
        'use strict';

        angular.module('documentMgmt')
            .service('AuthenticationService', AuthenticationService);

        function AuthenticationService($http, $rootScope, $window, Session, AUTH_EVENTS, USERS) {
            var authService = {};


            //the login function
            authService.login = function(user, success, error) {
                //this is my dummy technique, normally here the 
                //user is returned with his data from the db
                var users = USERS;

                if (user && users[user.username]) {
                    var loginData = users[user.username];
                    //insert your custom login function here 
                    if (user.username == loginData.username && user.password == loginData.username) {

                        //delete password not to be seen clientside 
                        delete loginData.password;

                        //update current user into the Session service or $rootScope.currentUser
                        //whatever you prefer
                        Session.create(loginData);
                        //or
                        $rootScope.currentUser = loginData;

                        //fire event of successful login
                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                        //run success function
                        success(loginData);
                    } else {
                        //OR ELSE
                        //unsuccessful login, fire login failed event for 
                        //the according functions to run
                        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                        error();
                    }
                } else {
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    error();
                }

            };

            //check if the user is authenticated
            authService.isAuthenticated = function() {
                return !!Session.user;
            };

            //check if the user is authorized to access the next route
            //this function can be also used on element level
            //e.g. <p ng-if="isAuthorized(authorizedRoles)">show this only to admins</p>
            authService.isAuthorized = function(authorizedRoles) {
                if (!angular.isArray(authorizedRoles)) {
                    authorizedRoles = [authorizedRoles];
                }
                return (authService.isAuthenticated() &&
                    authorizedRoles.indexOf(Session.userRole) !== -1);
            };

            //log out the user and broadcast the logoutSuccess event
            authService.logout = function() {
                Session.destroy();
                $window.sessionStorage.removeItem("userData");
                $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
                $window.location.href = "/login.html";
            }

            return authService;
        };

})();