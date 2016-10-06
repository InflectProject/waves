'use strict';

/**
 * @ngdoc service
 * @name wavesApp.InflectionsAPIService
 * @description
 * # InflectionsAPIService
 * Service in the wavesApp.
 */
angular.module('wavesApp')
  .service('InflectionsAPIService', ['$http', '$q', 'HOST',  function ($http, $q, HOST) {
      return {
        fetchStartupData: function(wordsArray){
          var self=this;
          return $q.all(
            wordsArray.map(function(word){
              return self.sendRecognition(word);
            })
          );
        },
        
        sendRecognition: function(words){
          return $http({
            method: 'POST',
            url: HOST+'/inflect', 
            data: JSON.stringify({ "words": ((words instanceof Array)?words:[words]) })
          });
        }
      };
    }]);
