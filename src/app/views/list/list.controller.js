(function() {
    'use strict';

    angular
        .module("documentMgmt")
        .controller("ListController", ListController);

    /** @ngInject */
    function ListController(TableService, $log, $uibModal, $scope, toastr, DEBOUNCE_DELAY) {

        var vm = this;


        // Max sie of pagination numbers before ellipsis is shown
        vm.maxSize = 5;

        function resetListConfig() {
            // Configuration object for the table
            vm.listConfig = {
                pageSize: 10,
                pageNumber: 1,
                totalPages: 0,
                searchString: ""
            };
        }

        vm.loadData = function() {

            TableService.getTableData(vm.listConfig).tableData.$promise
                .then(function(response) {
                    vm.list = response.data.list;
                    vm.totalRecords = !_.isEmpty(response.data) ? response.data.total_records : 0;
                    vm.listConfig.totalPages = Math.ceil(vm.totalRecords / vm.listConfig.pageSize);
                })
                .catch(function(error) {
                    $log.error("error", error);
                    toastr.error('Error', error.message);
                });

        };

        vm.init = function() {
            resetListConfig();
            vm.loadData();
        };

        vm.init();


        // To add a delay of DEBOUNCE_DELAY before the search is triggered.
        var filterResults = _.debounce(function(newValue, oldValue) {
            vm.listConfig.pageNumber = 1;
            vm.listConfig.searchString = newValue;
            vm.loadData();
        }, DEBOUNCE_DELAY);

        // Watching the searchString key for changes.
        $scope.$watch(function() {
            return vm.listConfig.searchString;
        }, function(newValue, oldValue) {

            if (newValue != oldValue) {
                filterResults(newValue, oldValue)
            }
        });

        // Modal dialog to view PDF file.
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