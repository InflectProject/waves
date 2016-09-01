'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:weatherResponse
 * @description
 * # weatherResponse
 */
angular.module('wavesApp')
  .directive('weatherResponse', function () {
    return {
      templateUrl: 'views/directives/responses/weather.html',
      replace: true,
      restrict: 'E',
      controller: 'ListResponseCtrl'
    };
  });
