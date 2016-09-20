(function() {
    'use strict';

    /*
     * In this service the user data is defined for the current session. Within
     * angular current session is until the page is refreshed. When the page is
     * refreshed the user is reinitialized through $window.sessionStorage in the
     * Authentication service.
     */
    angular.module('documentMgmt').service('Session', function() {

        this.create = function(user) {
            this.user = user;
            this.userRole = user.userRole;
        };
        this.destroy = function() {
            this.user = null;
            this.userRole = null;
        };
        return this;
    });
})();