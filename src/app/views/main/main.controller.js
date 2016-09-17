(function() {
    'use strict';

    angular
        .module('documentMgmt')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController(Auth) {

        var vm = this;

        vm.logout = function() {
            Auth.logout();
        };

    }
})();