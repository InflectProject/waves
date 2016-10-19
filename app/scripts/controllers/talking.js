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
    var lastWasInterimTimeout;

    function stopRecognitionAndSend(textSpeech){
      $timeout.cancel(lastWasInterimTimeout);
      // $rootScope.speechRecognition.stop();
      annyang.pause();

      $timeout(function(text) {
        $state.go('loading', {text: text});
      }, 1000, true, textSpeech);
    }

    $rootScope.$on("speech:result", function(e, result){
      console.info("speech:result", result)
      $scope.speechResult.isInterim = !result.final;
      $scope.speechResult.result = result.text;

      // stopRecognitionAndSend(result.text);
      if($scope.speechResult.isInterim){      
        if(result.final){
          stopRecognitionAndSend(result.text);
        }else{
          lastWasInterimTimeout = lastWasInterimTimeout || 
            $timeout(function(text){
              $scope.speechResult.isInterim=false;
              stopRecognitionAndSend(text);
            }, 3000, true, result.text);
        }
      }
    });
  }]);
