'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:HollidaysCtrl
 * @description
 * # HollidaysCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('HollidaysCtrl', function ($scope) {
    $scope.hollidays = [
      { desc: 'HTML5 Boilerplate', days: 5},
      { desc: 'HTML5 Boilerplate', days: 4},
      { desc: 'HTML5 Boilerplate', days: 3},
      { desc: 'HTML5 Boilerplate', days: 2},
      { desc: 'HTML5 Boilerplate', days: 1},
    ];
  });
