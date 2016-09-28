'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('WeatherCtrl', ['$rootScope', '$scope', 'weatherWord', function ($rootScope, $scope, weatherWord) {
      //Clima :: A los iconos que llegan hay que borrar el substring forecast-io
      //         https://erikflowers.github.io/weather-icons/api-list.html

      var weatherData=$rootScope.startupData.filter(function(data){
       return data.word == weatherWord;
      }).shift();

      $scope.forecast = weatherData.body.daily.data.map(function(day){
        return {
          day: moment.unix(day.time).format('ddd'),
          min: Math.floor(day.temperatureMin),
          max: Math.ceil(day.temperatureMax),
          icon: day.icon
        }
      }).slice(0,5);
    }]);
