'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('NewsCtrl', ['$scope', '$interval', '$timeout', function ($scope, $interval, $timeout) {
      $scope.pageSize = 10;
  
      $scope.news={
        latest: [
          'Noticia1Noticia1Noticia1Noticia1Noticia1Noticia1Noticia1Noticia1Noticia1',
          'Noticia2Noticia2Noticia2Noticia2Noticia2Noticia2Noticia2Noticia2Noticia2',
          'Noticia3Noticia3Noticia3Noticia3Noticia3Noticia3Noticia3Noticia3Noticia3',
          'Noticia4Noticia4Noticia4Noticia4Noticia4Noticia4Noticia4Noticia4Noticia4',
          'Noticia5Noticia5Noticia5Noticia5Noticia5Noticia5Noticia5Noticia5Noticia5',
          'Noticia6Noticia6Noticia6Noticia6Noticia6Noticia6Noticia6Noticia6Noticia6',
          'Noticia7Noticia7Noticia7Noticia7Noticia7Noticia7Noticia7Noticia7Noticia7',
          'Noticia8Noticia8Noticia8Noticia8Noticia8Noticia8Noticia8Noticia8Noticia8',
          'Noticia9Noticia9Noticia9Noticia9Noticia9Noticia9Noticia9Noticia9Noticia9',
          'Noticia10Noticia10Noticia10Noticia10Noticia10Noticia10Noticia10Noticia10',
        ], 
        current: "",
        currentIndex: 0,
        show: true
      };
  
  
      $interval(function(){
        $scope.news.show = false;
        $scope.news.currentIndex = ($scope.news.currentIndex + 1) % $scope.news.latest.length;
        
        $timeout(function () {
          $scope.news.current = $scope.news.latest[$scope.news.currentIndex];
          $scope.news.show = true;
        }, 500);
  
        if($scope.news.currentIndex === 0){
          console.log('WAVES::' + 'Request new news page');
        }
      }, 10000);
    }]);
