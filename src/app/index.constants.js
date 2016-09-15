/* global malarkey:false, moment:false */
(function() {
    'use strict';

    angular
        .module('documentMgmt')
        .constant('malarkey', malarkey)
        .constant('moment', moment)
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
        })  ;

})();