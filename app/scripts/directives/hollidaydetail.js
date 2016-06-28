'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:hollidayDetail
 * @description
 * # hollidayDetail
 */
angular.module('wavesApp')
  .directive('hollidayDetail', function () {
    return {
      templateUrl: 'views/directives/hollidays_detail.html',
      replace:true,
      restrict: 'E',
      controller: 'HollidaysCtrl'
    };
  });
