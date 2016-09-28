'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:BootCtrl
 * @description
 * # BootCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('BootCtrl', ['$rootScope', '$state', 'InflectionsAPIService', 'hollidaysWord',  'weatherWord', 'newsWord', 
    function ($rootScope, $state, InflectionsAPIService, hollidaysWord, weatherWord, newsWord) {
      //Palabras :: {k*: v} => k: palabras reconocidas, v: parametros/acciones validas

      InflectionsAPIService.fetchStartupData([hollidaysWord, weatherWord, newsWord])
        .then(function(results){
          var startupData = results.map(function(result){
            return { 
              word: result.data.attributes.query_words[0], 
              body: result.data.content.body 
            };
          });
          $rootScope.startupData=startupData;
          $state.go('active_screen');
        });
    }]);
