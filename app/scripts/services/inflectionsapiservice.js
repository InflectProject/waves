'use strict';

/**
 * @ngdoc service
 * @name wavesApp.InflectionsAPIService
 * @description
 * # InflectionsAPIService
 * Service in the wavesApp.
 */
angular.module('wavesApp')
  .service('InflectionsAPIService', ['$http', function ($http) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      return {
        getInitialData: function(key, limit){
          return $http({
            method: 'POST',
            url:'/', 
            data: {key: key, limit: limit}
          });
        },
        sendRecognition: function(words){
          return $http({
            method: 'POST',
            url:'/', 
            data: words
          });
        }
      };
    }]);
