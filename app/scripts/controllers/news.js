'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('NewsCtrl', function ($scope, $interval) {
    $scope.currentNotice = 0;
    $scope.latestNews = [
      'Noticia1Noticia1Noticia1Noticia1Noticia1Noticia1Noticia1Noticia1Noticia1',
      'Noticia2Noticia2Noticia2Noticia2Noticia2Noticia2Noticia2Noticia2Noticia2',
      'Noticia3Noticia3Noticia3Noticia3Noticia3Noticia3Noticia3Noticia3Noticia3',
      'Noticia4Noticia4Noticia4Noticia4Noticia4Noticia4Noticia4Noticia4Noticia4',
      'Noticia5Noticia5Noticia5Noticia5Noticia5Noticia5Noticia5Noticia5Noticia5',
      'Noticia6Noticia6Noticia6Noticia6Noticia6Noticia6Noticia6Noticia6Noticia6',
      'Noticia7Noticia7Noticia7Noticia7Noticia7Noticia7Noticia7Noticia7Noticia7',
      'Noticia8Noticia8Noticia8Noticia8Noticia8Noticia8Noticia8Noticia8Noticia8',
      'Noticia9Noticia9Noticia9Noticia9Noticia9Noticia9Noticia9Noticia9Noticia9',
      'Noticia10Noticia10Noticia10Noticia10Noticia10Noticia10Noticia10Noticia10Noticia10',
    ];

    $interval(function(){
      $scope.currentNotice = ($scope.currentNotice + 1) % $scope.latestNews.length;
      if($scope.currentNotice == 0){
        console.log('WAVES::' + 'Request new news page');
      }
    }, 5000)
  });
