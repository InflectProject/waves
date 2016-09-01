'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:ListresponseCtrl
 * @description
 * # ListresponseCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('ListResponseCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
      $scope.content = {
        body: $stateParams.content.body, 
        title: $stateParams.content.title
      };
    }]);
