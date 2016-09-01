'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:CommunicatorCtrl
 * @description
 * # CommunicatorCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('CommunicatorCtrl', ['$scope', function ($scope) {
      $scope.validActions = [
        {name:'Eventos'},
        {name:'Clima'},
        {name:'Feriado'},
        {name:'Farmacias'},
        {name:'Noticias'},
        // {name:'Voz'}
      ];
    }]);
