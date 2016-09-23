'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:ListresponseCtrl
 * @description
 * # ListresponseCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('ListResponseCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
    if($stateParams.response){
      $scope.response = {
        body: $stateParams.response.content.body, 
        title: $stateParams.response.content.title
      };
    }/*else{
      $state.go('active_screen')
    }*/
    }]);
