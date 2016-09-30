'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:pharmaciesResponse
 * @description
 * # pharmaciesResponse
 */
angular.module('wavesApp')
  .directive('pharmaciesResponse', function () {
    return {
      templateUrl: 'views/directives/responses/pharmacies.html',
      replace: true,
      restrict: 'E',
      controller: ['$scope', '$controller', 'weatherHelper', function ($scope, $controller, weatherHelper) {
        $controller('ListResponseCtrl', {$scope: $scope});

        $scope.pharmacies=$scope.response.body.slice(0, 7);
      }]
    };
  });
