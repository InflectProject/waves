'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('NewsCtrl', ['$rootScope', '$scope', '$interval', '$timeout', 'newsWord', '$state','localStorageService',
    function ($rootScope, $scope, $interval, $timeout, newsWord, $state, localStorageService) {
      try{
        var newsData = localStorageService.get(newsWord);
        $scope.pageSize = newsData.length;
    
        $scope.news={
          latest: newsData, 
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
      }catch(e){
        console.warn(e);
        // $state.go('boot');
      }
    }]);
