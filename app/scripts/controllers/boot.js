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
        InflectionsAPIService.getInitialData('hollidays', 5).then(function(result){
          initialData.hollidays=result.data.hollidays;
        });
        InflectionsAPIService.getInitialData('forecast', 5).then(function(result){
          initialData.forecast=result.data.forecast;
        });
        InflectionsAPIService.getInitialData('news', 10).then(function(result){
          initialData.news=result.data.news;
        });
        InflectionsAPIService.getInitialData('grammars').then(function(result){
          initialData.grammars=result.data.grammars;
        });

        //require via $http or provider: 5 feriados
        //require via $http or provider: 5 dias de pronostico
        //require via $http or provider: 10 noticias
        //require via $http or provider: lista de grammars

        $state.go('active_screen', initialData);
      }
  
      // angular.element($window).bind('load', $scope.onLoad);
      $timeout(onLoad, 2000);
    }]);
