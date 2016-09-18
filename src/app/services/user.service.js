(function() {
    'use strict';

    angular
        .module("documentMgmt")
        .service("UserService", UserService);

    function UserService(UserResourceGateway) {
        function getUserDetails() {
            var userData = UserResourceGateway.getUserDetails();

            return {
                userData: userData
            };
        };

        return {
            getUserDetails: getUserDetails
        }
    }
})();