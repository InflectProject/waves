'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:SimpleresponseCtrl
 * @description
 * # SimpleresponseCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('SimpleResponseCtrl', ['$rootScope', '$scope', '$state', '$stateParams', 'speechSynthesis', 
    function ($rootScope, $scope, $state, $stateParams, speechSynthesis) {
    if($stateParams.response){
      $scope.response = $stateParams.response.content;
      /*speechSynthesis.say($scope.response, {lang:'es-AR'}, {
        onend: function(e) {
          $rootScope.speechRecognition.start();
        }
      });*/
    }else{
      $state.go('boot')
    }
  }]);
