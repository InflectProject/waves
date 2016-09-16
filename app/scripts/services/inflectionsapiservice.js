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
      return {
        fetchStartupData: function(key, limit){
          return $http({
            method: 'POST',
            url: '/', 
            data: {key: key, limit: limit}
          });
        },
        
        sendRecognition: function(words){
          return $http({
            method: 'POST',
            url: '/inflect', 
            transformRequest: function(obj) {
              var str = [];
              for(var p in obj)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              return str.join("&");
            },
            headers:{
              "Content-Type": "application/x-www-form-urlencoded",
            },
            data: {
              "words[]": words
            }
          });
        }
      };
    }]);
