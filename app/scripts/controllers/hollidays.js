'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:HollidaysCtrl
 * @description
 * # HollidaysCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('HollidaysCtrl', ['$rootScope', '$scope', 'hollidaysWord', 'hollidayHelper', '$state', 'localStorageService', 
    function ($rootScope, $scope, hollidaysWord, hollidayHelper, $state, localStorageService) {
    try{
      var hollidaysData= localStorageService.get(hollidaysWord.join(', '));
      $scope.hollidays = hollidayHelper.normalizeHollidays(hollidaysData);
    }catch(e){
      console.warn(e);
      // $state.go('boot');
    }
  }]);
