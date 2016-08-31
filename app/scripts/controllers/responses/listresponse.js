'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:ListresponseCtrl
 * @description
 * # ListresponseCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('ListResponseCtrl', ['$stateParams', function ($stateParams) {
      $scope.content = {
        body: $stateParams.content.body, 
        title: $stateParams.content.title
      };
    }]);
