'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:TalkCtrl
 * @description
 * # TalkCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('TalkCtrl', ['$rootScope', '$scope', '$state', 'InflectionsAPIService',  
    function ($rootScope, $scope, $state, InflectionsAPIService) {
      InflectionsAPIService.sendRecognition($rootScope.speechResult.result).then(
      function success(){
        console.info(arguments)
        //receive response
        //$state.go response_type
      }, function error(){
        console.error(arguments);
      })
  }]);
