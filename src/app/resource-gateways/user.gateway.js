(function() {
    'use strict';

    angular
        .module("documentMgmt")
        .factory("UserResourceGateway", ['$resource', UserResourceGateway]);

    function UserResourceGateway($resource) {

    	var userResource = $resource('mock-data/user-details.json', {}, {
    	// var userResource = $resource('api/user', {}, {
    		getUserDetails: {
    			method: 'GET',
    			cache: false,
    			headers: {
    				'auth-key': ''
    			}
    		}

    	});

    	return {
    		getUserDetails: userResource.getUserDetails
    	}

    };
})();