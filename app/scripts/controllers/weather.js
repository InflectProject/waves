'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('WeatherCtrl', ['$rootScope', '$scope', 'weatherHelper', 'weatherWord', '$state', 'localStorageService',
    function ($rootScope, $scope, weatherHelper, weatherWord, $state, localStorageService) {
      try{

        //Clima :: Iconos que llegan
        //         https://erikflowers.github.io/weather-icons/api-list.html

        var weatherData = localStorageService.get(weatherWord);
        $scope.forecast = weatherHelper.normalizeForecast(weatherData.daily.data).slice(0,5);
      }catch(e){
        console.warn(e);
        // $state.go('boot');
      }

    }]);
