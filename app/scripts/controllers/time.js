'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:TimeCtrl
 * @description
 * # TimeCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('TimeCtrl', ['$scope', '$interval', function($scope, $interval) {
      var tick = function() {
        $scope.clock = Date.now();
      };
      
      tick();
      $interval(tick, 1000);
    }]);