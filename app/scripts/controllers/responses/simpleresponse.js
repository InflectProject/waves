'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:SimpleresponseCtrl
 * @description
 * # SimpleresponseCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('SimpleResponseCtrl', ['$scope', '$state', '$stateParams', 'speechSynthesis', function ($scope, $state, $stateParams, speechSynthesis) {
    if($stateParams.response){
      $scope.response = $stateParams.response.content;
      speechSynthesis.say($scope.response, {lang:'es-AR'});
    }else{
      $state.go('active_screen')
    }
  }]);
