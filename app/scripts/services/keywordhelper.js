'use strict';

/**
 * @ngdoc service
 * @name wavesApp.keywordHelper
 * @description
 * # keywordHelper
 * Service in the wavesApp.
 */
angular.module('wavesApp')
  .service('keywordHelper', ['localStorageService', 'keywordsWord', 
    function (localStorageService, keywordsWord) {

      function intersect (arrList) {
          var arrLength = Object.keys(arrList).length;
              // (Also accepts regular objects as input)
          var index = {};
          for (var i in arrList) {
              for (var j in arrList[i]) {
                  var v = arrList[i][j];
                  if (index[v] === undefined) index[v] = 0;
                  index[v]++;
              };
          };
          var retv = [];
          for (var i in index) {
              if (index[i] == arrLength) retv.push(i);
          };
          return retv;
      };

      return {
        findMatch:function(string){
          return intersect([string.toUpperCase().split(" "), ["FARMACIAS", "CLIMA","NOTICIAS"]]);
        }
      }
    }]);
