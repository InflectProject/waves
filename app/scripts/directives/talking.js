'use strict';

/**
 * @ngdoc directive
 * @name wavesApp.directive:voiceWave
 * @description
 * # voiceWave
 */
angular.module('wavesApp')
  .directive('talking', function () {
    return {
      templateUrl: 'views/directives/talking.html',
      replace: true,
      restrict: 'E',
      controller: 'TalkingCtrl'
    };
  });
