(function() {
    'use strict';

    angular
        .module("documentMgmt")
        .controller("ListController", ListController);

    /** @ngInject */
    function ListController() {
        var vm = this;

        vm.bigTotalItems = 45;
        vm.bigCurrentPage = 1;
        vm.maxSize = 5;

        vm.totalItems = 64;
        vm.currentPage = 4;
    };
})();