'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:BootCtrl
 * @description
 * # BootCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('BootCtrl', function ($scope, $timeout, $state, $window) {
    $scope.onLoad=function(){
      $state.go('active_screen');
    };
    // angular.element($window).bind('load', $scope.onLoad);

    $timeout($scope.onLoad, 2000);
  });
