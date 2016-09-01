'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:voicewaveVisualizer
 * @description
 * # voicewaveVisualizer
 */
angular.module('wavesApp')
  .directive('voicewaveVisualizer', ['voiceVisualizer', function (voiceVisualizer) {
      return {
        templateUrl: 'views/directives/voicewave_visualizer.html',
        replace: true,
        restrict: 'E', 
        link: function postLink(scope, element, attrs) {
          voiceVisualizer.init(element.find('#visualizer').get(0)).visualize();
        }
      };
    }]);
