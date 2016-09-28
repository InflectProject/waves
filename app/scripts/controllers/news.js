'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('NewsCtrl', ['$rootScope', '$scope', '$interval', '$timeout', 'newsWord', 
    function ($rootScope, $scope, $interval, $timeout, newsWord) {
      var newsData=$rootScope.startupData.filter(function(data){
       return data.word == newsWord;
      }).shift();
      
      $scope.pageSize = newsData.body.length;
  
      $scope.news={
        latest: newsData.body, 
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
