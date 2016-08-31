'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:SimpleresponseCtrl
 * @description
 * # SimpleresponseCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('SimpleResponseCtrl', ['$scope', '$stateParams', 'speechSynthesis', function ($scope, $stateParams, speechSynthesis) {
    $scope.content = $stateParams.content;
    // speechSynthesis.say(result.text, {lang:'es-AR'});
  }]);
