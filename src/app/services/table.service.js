(function() {
    'use strict';

    angular
        .module("documentMgmt")
        .service("TableService", TableService);

    function TableService(TableResourceGateway) {

        function getTableData() {
            var tableData = TableResourceGateway.getTableData();

            return {
                tableData: tableData
            }
        }

        return {
            getTableData: getTableData
        }
    }
})();