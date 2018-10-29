angular.module('LpcWebTest2017')
    .service('LpcTranslateService', ['$http', function ($http) {
        var
            //TODO
            link,
            getPropertiesImp = function () {
                //Selectionner les prop de la langue X
                if (this.prop != null && this.prop != undefined) {
                    return this.prop[this.language];
                }
                else return null;
            },
            setPropertiesUrlImpl = function (url) {
                //TODO
                link = url.link;
                this.language = url.language;

            },
            loadPropertiesImpl = function () {
                //TODO
                return $http.get(link).then((resp) => {
                    this.prop = resp.data;
                });
            }

        return {
            setPropertiesUrl: setPropertiesUrlImpl,
            loadProperties: loadPropertiesImpl,
            getProperties: getPropertiesImp
        }
    }]);