'use strict';

angular.module('LpcWebTest2017')
    .controller('PotsController', ['$scope', 'PotsService', function ($scope, PotsService) {
        //TODO
        //recupérer la dernier langue choisi
        $scope.locale = (localStorage.getItem("langue") != null) ? localStorage.getItem("langue") : 'fr';
        PotsService.get().then((response) => {
            $scope.pots = response;
        });
        //Changer la langue
        $scope.changeLocale = function (locale) {
            $scope.locale = locale;
            localStorage.setItem("langue", locale);
        }
    }]);