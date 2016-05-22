'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:communicator
 * @description
 * # communicator
 */
angular.module('wavesApp')
  .directive('communicator', function () {
    return {
      templateUrl: 'views/directives/communicator.html',
      restrict: 'E'
    };
  });
