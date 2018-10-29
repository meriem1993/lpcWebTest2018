'use strict';

angular.module('LpcWebTest2017')
  .directive('lpcLazyBackground', [function () {
    //contentHTML pour un élement de la liste des pots communs
    var contentHTML = function () {

      return `    
    <div >
      <div class="rectangleBlack" ng-if="showCercleLoader"></div>
      <div  class="cercle" ng-if="showCercleLoader">
        <img src="app/img/loading.svg" >
      </div>
      <img class="img" ng-src="{{img}}" />
      <div ng-transclude></div>
    </div>
    `;
    }

    var lpcLazyBackgroundLink = function (scope, elem, attr) {
      //TODO

      var image = new Image();

      image.src = scope.lpcLazyBackground;
      scope.showCercleLoader = true;

      // si l'image est chargée
      image.onload = () => {
        scope.img = image.src;
        //cacher loagin.svg
        scope.showCercleLoader = false;
        scope.$apply();
      }
    }


    return {
      restrict: 'A',
      scope: { lpcLazyBackground: '=' },
      link: lpcLazyBackgroundLink,
      transclude: true,
      template: contentHTML
    }
  }]);
