'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:voiceWave
 * @description
 * # voiceWave
 */
angular.module('wavesApp')
  .directive('voiceWave', function () {
    return {
      templateUrl: 'views/directives/voice_wave.html',
      restrict: 'E',
      controller: 'TalkCtrl'
    };
  });
