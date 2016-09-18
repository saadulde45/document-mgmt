(function() {
    'use strict';

    angular
        .module("documentMgmt")
        .controller("ListController", ListController);

    /** @ngInject */
    function ListController(TableService, $log, $uibModal) {
        var vm = this;

        vm.currentPage = 1;
        vm.maxSize = 5;

        TableService.getTableData().tableData.$promise
            .then(function(response) {
                vm.list = response.data.list;
                vm.totalRecords = response.data.total_records;
            })
            .catch(function(error) {
                $log.error("error", error);
            });

        vm.dialog = function(document) {
            $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/views/list/pdf-viewer.template.html',
                controller: function($uibModalInstance) {
                    var vm = this;
                    vm.document = document;
                    vm.cancel = function() {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                controllerAs: 'pdfView'
            });
        };
    }
})();