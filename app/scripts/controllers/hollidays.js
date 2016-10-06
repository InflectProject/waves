'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:HollidaysCtrl
 * @description
 * # HollidaysCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('HollidaysCtrl', ['$rootScope', '$scope', 'hollidaysWord', 'hollidayHelper', '$state', 
    function ($rootScope, $scope, hollidaysWord, hollidayHelper, $state) {
    try{      
      var hollidaysData=$rootScope.startupData.filter(function(data){
         return data.word===hollidaysWord.join(', ');
        }).shift();
      
      $scope.hollidays = hollidayHelper.normalizeHollidays(hollidaysData.body);
    }catch(e){
      console.warn(e);
      $state.go('boot');
    }
  }]);
