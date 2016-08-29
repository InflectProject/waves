'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:SpeechvisualizerCtrl
 * @description
 * # SpeechvisualizerCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('SpeechVisualizerCtrl', ['$rootScope', '$state', '$stateParams', '$scope', '$timeout', function ($rootScope, $state, $stateParams, $scope, $timeout) {
    $scope.speechResult={};
    
    function stopRecognitionAndSend(textSpeech){
      $rootScope.speechRecognition.stop();
      $scope.speechResult.stopSpeech=true;

      $timeout(function(text) {
        $state.go('loading', {text: text});
      }, 1000, true, textSpeech);
    }

    var lastWasInterim=false, result = $stateParams.result;

    if(result){
      $scope.speechResult.isInterim = !result.final;
      $scope.speechResult.result = result.text;

      if(result.final){
        stopRecognitionAndSend(result.text)
      }else{
        $timeout(function(text){
          if(lastWasInterim){
            $scope.speechResult.isInterim=false;
            stopRecognitionAndSend(result.text);
          }
        }, 3000, true, result.text);

        lastWasInterim=true;
      }
    }else{
      $state.go('active_screen')
    }
  }]);
