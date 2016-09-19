(function() {
    'use strict';

    angular
        .module("documentMgmt")
        .service("TableService", TableService);

    function TableService(TableResourceGateway) {

        function getTableData(config) {

            var jsonConfig = {};

            if (config && config.pageSize) {
                jsonConfig.pageSize = config.pageSize;
            }

            if (config && config.pageNumber) {
                jsonConfig.pageNumber = config.pageNumber;
            }

            if (config && config.searchString) {
                jsonConfig.searchString = config.searchString;
            }

            var tableData = TableResourceGateway.getTableData(jsonConfig);

            return {
                tableData: tableData
            }
        }

        return {
            getTableData: getTableData
        }
    }
})();