'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('WeatherCtrl', ['$scope', function ($scope) {
      $scope.weatherToday = {day: new Date(new Date().getTime()+(0*24*60*60*1000)), min:"15.0", max: "19.0", icon: "sunny"};
  
      $scope.forecast = [
        {day: new Date(new Date().getTime()+(0*24*60*60*1000)), min:"15.0", max: "19.0", icon: "sunny"},
        {day: new Date(new Date().getTime()+(1*24*60*60*1000)), min:"15.0", max: "19.0", icon: "sunny"},
        {day: new Date(new Date().getTime()+(2*24*60*60*1000)), min:"15.0", max: "19.0", icon: "sunny"},
        {day: new Date(new Date().getTime()+(3*24*60*60*1000)), min:"15.0", max: "19.0", icon: "sunny"},
        {day: new Date(new Date().getTime()+(4*24*60*60*1000)), min:"15.0", max: "19.0", icon: "sunny"},
      ];
    }]);
