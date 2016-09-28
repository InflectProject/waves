'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:HollidaysCtrl
 * @description
 * # HollidaysCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('HollidaysCtrl', ['$rootScope', '$scope', 'hollidaysWord', function ($rootScope, $scope, hollidaysWord) {
      var hollidaysData=$rootScope.startupData.filter(function(data){
         return data.word==hollidaysWord;
        }).shift();

      $scope.hollidays = [
        { 
          desc: hollidaysData.body.motivo, 
          inDays: moment( moment().format('YYYY') + '-' + 
                        hollidaysData.body.mes + '-' + 
                        hollidaysData.body.dia)
                .fromNow()
        },
      ];
    }]);
