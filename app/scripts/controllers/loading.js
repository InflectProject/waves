'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:LoadingCtrl
 * @description
 * # LoadingCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('LoadingCtrl', ['$state', '$stateParams', 'InflectionsAPIService', 
    'responseRedirector', 'keywordHelper',
    function ($state, $stateParams, InflectionsAPIService, ResponseRedirectorService, keywordHelper) {
      if($stateParams.text){
        var match=keywordHelper.findMatch($stateParams.text);
        if(match.length>0){
          InflectionsAPIService.sendRecognition(match[0]).then(ResponseRedirectorService.redirect);
        }else{
          $state.go('active_screen');  
        }
      }else{
        $state.go('boot');
      }
    }]);