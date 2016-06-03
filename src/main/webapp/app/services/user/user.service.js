(function () {
    'use strict';

    angular
        .module('myBuddies')
        .factory('Farmer', Farmer);

    User.$inject = ['$resource'];

    function User ($resource) {
        var service = $resource('api/users/:farmers', {}, {
            'query': {method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' },
            'delete':{ method:'DELETE'}
        });

        return farmerService;
    }
})();
