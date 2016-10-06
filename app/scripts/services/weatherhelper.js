'use strict';

/**
 * @ngdoc service
 * @name wavesApp.weatherService
 * @description
 * # weatherService
 * Service in the wavesApp.
 */
angular.module('wavesApp')
  .service('weatherHelper', function () {
    return {
      normalizeForecast: function(forecast){
        return forecast.map(function(day){
          return {
            day: moment.unix(day.time).format('ddd'),
            min: Math.floor(day.temperatureMin),
            max: Math.ceil(day.temperatureMax),
            summary: day.summary,
            icon: day.icon
          };
        });
      }
    };
  });
