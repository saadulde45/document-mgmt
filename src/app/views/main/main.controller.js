(function() {
    'use strict';

    angular
        .module('documentMgmt')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController(AuthenticationService) {

        var vm = this;

        vm.logout = function() {
            AuAuthenticationServiceth.logout();
        };

    }
})();