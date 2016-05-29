'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:loading
 * @description
 * # loading
 */
angular.module('wavesApp')
  .directive('loading', function () {
    return {
      templateUrl: 'views/directives/loading.html',
      restrict: 'E'
    };
  });
