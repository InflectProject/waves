'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:newsBar
 * @description
 * # newsBar
 */
angular.module('wavesApp')
  .directive('newsBar', function () {
    return {
      templateUrl: 'views/directives/news_bar.html',
      replace: true,
      restrict: 'E',
      controller: 'NewsCtrl'
    };
  });
