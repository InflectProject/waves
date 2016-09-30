'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:LoadingCtrl
 * @description
 * # LoadingCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('LoadingCtrl', ['$state', '$stateParams', 'InflectionsAPIService', 'responseRedirector', 
    function ($state, $stateParams, InflectionsAPIService, ResponseRedirectorService) {
      if($stateParams.text){
        InflectionsAPIService.sendRecognition($stateParams.text).then(ResponseRedirectorService.redirect);
      }else{
        $state.go('boot');
      }
    }]);