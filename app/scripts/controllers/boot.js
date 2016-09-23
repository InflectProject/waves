'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:BootCtrl
 * @description
 * # BootCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('BootCtrl', ['$scope', '$timeout', '$state', '$window', 'InflectionsAPIService', 
    function ($scope, $timeout, $state, $window, InflectionsAPIService) {
      function onLoad(){
        var initialData = {};
        
        InflectionsAPIService.fetchStartupData({
          hollidays: 5,
          forecast: 5,  //A los iconos que llegan hay que borrar el substring forecast-io
                        //https://erikflowers.github.io/weather-icons/api-list.html
          news:10,
          grammars: '*' //{k*: v} => k: palabras reconocidas, v: parametros/acciones validas
        }).then(function(result){
          initialData=result.data;

          // $rootScope.initialData=initialData;
          // $state.go('active_screen');
        });
  
        $rootScope.initialData=initialData;
        $state.go('active_screen'); 
      }
  
      // angular.element($window).bind('load', $scope.onLoad);
      $timeout(onLoad, 2000);
    }]);
