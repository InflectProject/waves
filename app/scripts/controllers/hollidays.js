'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:HollidaysCtrl
 * @description
 * # HollidaysCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('HollidaysCtrl', ['$scope', function ($scope) {
      $scope.hollidays = [
        { desc: 'Feriado 1', days: 5},
        { desc: 'Feriado 2', days: 4},
        { desc: 'Feriado 3', days: 3},
        { desc: 'Feriado 4', days: 2},
        { desc: 'Feriado 5', days: 1},
      ];
    }]);
