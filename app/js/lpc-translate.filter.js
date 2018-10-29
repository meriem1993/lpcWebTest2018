'use strict';

angular.module('LpcWebTest2017')
    .filter('lpcTranslate', ['LpcTranslateService', '$rootScope', function (LpcTranslateService, $rootScope) {

        //TODO
        var result = null;

        var filter = function (key, locale) {

            //TODO

            LpcTranslateService.language = locale;


            result = LpcTranslateService.getProperties();

            if (result != null && result != undefined) {
                return result[key]
            } else {
                return null;
            }
        }


        //TODO
        return filter;


    }]);