(function() {
    'use strict';
    /* An interceptor to check whether the user is authenticated or not. 
     * If not then broadcast a global event with error codes and messages.
     */

    angular.module('documentMgmt')
        .factory('AuthInterceptor', function($rootScope, $q, AUTH_EVENTS) {
                return {
                    responseError: function(response) {
                        $rootScope.$broadcast({
                            401: AUTH_EVENTS.notAuthenticated,
                            403: AUTH_EVENTS.notAuthorized,
                            419: AUTH_EVENTS.sessionTimeout,
                            440: AUTH_EVENTS.sessionTimeout
                        }[response.status], response);
                        return $q.reject(response);
                    }
                };
            }
        );
})();