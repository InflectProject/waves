'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:SpeechvisualizerCtrl
 * @description
 * # SpeechvisualizerCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('TalkingCtrl', ['$rootScope', '$state', '$stateParams', '$scope', '$timeout', function ($rootScope, $state, $stateParams, $scope, $timeout) {
    $scope.speechResult={};
    $scope.speechRecognitionNotSupported=$stateParams.speechRecognitionNotSupported;

    var lastWasInterim=false, result = $stateParams.result, lastWasInterimTimeout;
    
    function stopRecognitionAndSend(textSpeech){
      $timeout.cancel(lastWasInterimTimeout);
      $rootScope.speechRecognition.stop();
      $scope.speechResult.stopSpeech=true;

      $timeout(function(text) {
        $state.go('loading', {text: text});
      }, 1000, true, textSpeech);
    }


    if(result && !$scope.speechRecognitionNotSupported){
      $scope.speechResult.isInterim = !result.final;
      $scope.speechResult.result = result.text;

      if(result.final){
        stopRecognitionAndSend(result.text);
      }else{
        lastWasInterimTimeout=$timeout(function(text){
          $scope.speechResult.isInterim=false;
          stopRecognitionAndSend(result.text);
        }, 3000, true, result.text);

        lastWasInterim=true;
      }
    }else{
      if(!$scope.speechRecognitionNotSupported){
        $state.go('active_screen')
      }else{
        $scope.speechResult.result=result;
      }
    }
  }]);
