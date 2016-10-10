'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:ListresponseCtrl
 * @description
 * # ListresponseCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('ListResponseCtrl', ['$rootScope', '$scope', '$state', '$stateParams',
   function ($rootScope, $scope, $state, $stateParams) {
    if($stateParams.response){
      $scope.response = {
        body: $stateParams.response.content.body, 
        title: $stateParams.response.content.title
      };

      $rootScope.speechRecognition.start();
    }else{
      $state.go('boot')
    }
  }]);
