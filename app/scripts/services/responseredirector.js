'use strict';

/**
 * @ngdoc service
 * @name wavesApp.responseredirector
 * @description
 * # responseredirector
 * Service in the wavesApp.
 */
angular.module('wavesApp')
  .service('responseRedirector', ['$state', function ($state) {
      return {
        redirect: function(response){
          response = JSON.parse(response);
          $state.go(response.attributes.query_words.toLowerCase(), response.content);
        }
      };
    }]);
