'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:voiceWave
 * @description
 * # voiceWave
 */
angular.module('wavesApp')
  .directive('speechVisualizer', function () {
    return {
      templateUrl: 'views/directives/speech_visualizer.html',
      replace: true,
      restrict: 'E',
      controller: 'SpeechVisualizerCtrl'
    };
  });
