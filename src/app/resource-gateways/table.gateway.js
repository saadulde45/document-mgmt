(function() {
    'use strict';

    angular
        .module("documentMgmt")
        .factory("TableResourceGateway", ['$resource', TableResourceGateway]);

    function TableResourceGateway($resource) {

        var tableResource = $resource('mock-data/table-data.json', {}, {
            // var tableResource = $resource('api/list', {}, {
            getTableData: {
                method: 'GET',
                cache: false,
                headers: {
                    'auth-key': ''
                }
            }
        })

        return {
            getTableData: tableResource.getTableData
        }
    }
})();