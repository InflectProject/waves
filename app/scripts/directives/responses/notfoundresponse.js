'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:notFoundResponse
 * @description
 * # notFoundResponse
 */
angular.module('wavesApp')
  .directive('notFoundResponse', function () {
    return {
      templateUrl: 'views/directives/responses/not_found.html',
      replace: true,
      restrict: 'E',
      controller: 'SimpleResponseCtrl'
    };
  });
