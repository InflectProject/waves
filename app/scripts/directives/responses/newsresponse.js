'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:newsResponse
 * @description
 * # newsResponse
 */
angular.module('wavesApp')
  .directive('newsResponse', function () {
    return {
      templateUrl: 'views/directives/responses/news.html',
      restrict: 'E'/*,
      link: function postLink(scope, element, attrs) {
        element.text('this is the newsResponse directive');
      }*/
    };
  });
