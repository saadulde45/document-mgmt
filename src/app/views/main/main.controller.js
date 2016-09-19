(function() {
    'use strict';

    angular
        .module('documentMgmt')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController(AuthenticationService) {

        var vm = this;

        vm.logout = function() {
            AuthenticationService.logout();
        };

        vm.toggleMenu = function() {
            if(angular.element("#nav-collapse-menu").hasClass("collapse")) {
                angular.element("#nav-collapse-menu").removeClass("collapse");
            } else {
                angular.element("#nav-collapse-menu").addClass("collapse");
            }

        }

    }
})();