'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:forecastDetail
 * @description
 * # forecastDetail
 */
angular.module('wavesApp')
  .directive('forecastDetail', function () {
    return {
      templateUrl: 'views/directives/forecast_detail.html',
      replace:true,
      restrict: 'E',
      controller: 'WeatherCtrl'
    };
  });
