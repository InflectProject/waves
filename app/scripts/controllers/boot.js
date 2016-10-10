'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:BootCtrl
 * @description
 * # BootCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('BootCtrl', ['$rootScope', '$state', 'InflectionsAPIService', 
                           'hollidaysWord',  'weatherWord', 'newsWord', 
                           'localStorageService', 
    function ($rootScope, $state, InflectionsAPIService, 
              hollidaysWord, weatherWord, newsWord, 
              localStorageService) {
      //Palabras :: {k*: v} => k: palabras reconocidas, v: parametros/acciones validas
      localStorageService.clearAll();
      
      InflectionsAPIService.fetchStartupData([hollidaysWord, weatherWord, newsWord])
        .then(function(results){
          results.forEach(function(result){
            if(result.data.content.body!==undefined){
              localStorageService.set(result.data.attributes.query_words.join(', '), result.data.content.body);
            }else{
              console.error("Check on Inflections why the service with query_word \""+result.data.attributes.query_words.join(', ')+"\" returns undefined.");
            }
          });
          
          $state.go('active_screen');
        });
    }]);
