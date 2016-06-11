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
      controller: 'BootCtrl', 
      link: function postLink(scope, element) {
        element.text('Booting...');
      }
    };
  });
