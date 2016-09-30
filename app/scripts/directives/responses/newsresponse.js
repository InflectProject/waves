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
      controller: ['$scope', '$controller', 'weatherHelper', function ($scope, $controller, weatherHelper) {
        $controller('ListResponseCtrl', {$scope: $scope});
        var news=$scope.response.body;
        $scope.latest=news.slice(0,10);
      }]
    };
  });
