(function() {
    'use strict';

    angular
        .module('documentMgmt')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController(Auth, $rootScope, AUTH_EVENTS, $window) {

        var vm = this;

        vm.logout = function() {
            Auth.logout();
        };

    }
})();