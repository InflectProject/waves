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
      replace: true,
      restrict: 'E',
      controller: 'ListResponseCtrl'
    };
  });
