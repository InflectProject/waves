'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('WeatherCtrl', ['$rootScope', '$scope', 'weatherHelper', 'weatherWord', '$state',
    function ($rootScope, $scope, weatherHelper, weatherWord, $state) {
      try{

        //Clima :: Iconos que llegan
        //         https://erikflowers.github.io/weather-icons/api-list.html

        var weatherData=$rootScope.startupData.filter(function(data){
         return data.word === weatherWord;
        }).shift();

        $scope.forecast = weatherHelper.normalizeForecast(weatherData.body.daily.data).slice(0,5);
      }catch(e){
        console.warn(e);
        $state.go('boot');
      }

    }]);
