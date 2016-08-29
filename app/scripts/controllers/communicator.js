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
        // {name:'Eventos', state: 'events'},
        {name:'Clima', state: 'weather'},
        {name:'Noticias',state: 'news'},
        {name:'Voz', state: 'talking'}
      ];
    }]);
