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
        //require via $http or provider: 5 feriados
        //require via $http or provider: 5 dias de pronostico
        //require via $http or provider: 10 noticias
        //require via $http or provider: lista de grammars

        $state.go('active_screen');
      }
  
      // angular.element($window).bind('load', $scope.onLoad);
      $timeout(onLoad, 2000);
    }]);
