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
      controller: ['$scope', '$controller', 'weatherHelper', function ($scope, $controller, weatherHelper) {
        $controller('ListResponseCtrl', {$scope: $scope});

        $scope.now={
          summary: $scope.response.body.hourly
        };
        
        var forecast=$scope.response.body.daily.data;
        $scope.forecast = weatherHelper.normalizeForecast(forecast.slice(1, forecast.lenght));
      }]
    };
  });
