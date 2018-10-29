'use strict';

angular.module('LpcWebTest2017')
    .run(['LpcTranslateService','RESOURCES',function(LpcTranslateService,RESOURCES){
        //TODO

        var url = {link: RESOURCES.PROPERTIES_URL, language: 'fr'};
        LpcTranslateService.setPropertiesUrl(url);
        LpcTranslateService.loadProperties() ;


    }]);