'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:BootCtrl
 * @description
 * # BootCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('BootCtrl', ['$scope', '$timeout', '$state', '$window', function ($scope, $timeout, $state, $window) {
      function onLoad(){
        $state.go('active_screen');
      }
      // angular.element($window).bind('load', $scope.onLoad);
  
      $timeout(onLoad, 2000);
    }]);
