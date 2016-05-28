'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:bootWave
 * @description
 * # bootWave
 */
angular.module('wavesApp')
  .directive('bootWave', function () {
    return {
      template: '<div id="boot-wave"></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('Booting...');
      }
    };
  });
