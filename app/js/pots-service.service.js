'use strict';

angular.module('LpcWebTest2017')
    .service('PotsService', ['$http', 'RESOURCES', function ($http, RESOURCES) {
        var getImpl = function () {
            //TODO
            return $http.get(RESOURCES.GET_POTS_URL).then((resp) => {
                return resp.data;
            });
        }
        return {
            get: getImpl
        }
    }]);