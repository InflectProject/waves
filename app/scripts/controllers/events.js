'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('EventsCtrl', ['$scope', function ($scope) {
      $scope.events = [
        'Evento1', 'Evento2', 'Evento3', 'Evento4', 'Evento5', 'Evento6', 'Evento7'
      ]; 
    }]);
