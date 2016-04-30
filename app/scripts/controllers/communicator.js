'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:CommunicatorCtrl
 * @description
 * # CommunicatorCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('CommunicatorCtrl', function () {
    this.validActions = [
      {name:'Eventos',state:'events'},
      {name:'Clima',state:'weather'},
      {name:'Noticias',state:'news'}
    ];
  });
