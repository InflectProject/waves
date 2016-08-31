'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:eventsResponse
 * @description
 * # eventsResponse
 */
angular.module('wavesApp')
  .directive('eventsResponse', function () {
    return {
      templateUrl: 'views/directives/responses/events.html',
      replace: true,
      restrict: 'E',
      controller: 'ListResponseCtrl'
    };
  });
