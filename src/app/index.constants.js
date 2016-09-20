(function() {
    'use strict';

    angular
        .module('documentMgmt')
        .constant('moment', moment)
        .constant('DEBOUNCE_DELAY', 500)
        .constant('USER_ROLES', {
            all: '*',
            admin: 'admin',
            editor: 'editor',
            guest: 'guest'
        }).constant('AUTH_EVENTS', {
            loginSuccess: 'auth-login-success',
            loginFailed: 'auth-login-failed',
            logoutSuccess: 'auth-logout-success',
            sessionTimeout: 'auth-session-timeout',
            notAuthenticated: 'auth-not-authenticated',
            notAuthorized: 'auth-not-authorized'
        }).constant('USERS', {
            "admin": {
                "username": "admin",
                "password": "admin",
                "userRole": "admin"
            },
            "editor": {
                "username": "editor",
                "password": "editor",
                "userRole": "editor"
            },
            "guest": {
                "username": "guest",
                "password": "guest",
                "userRole": "guest"
            }
        });

})();