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
    var lastWasInterim=false, lastWasInterimTimeout;

    function stopRecognitionAndSend(textSpeech){
      $timeout.cancel(lastWasInterimTimeout);
      $rootScope.speechRecognition.stop();

      $timeout(function(text) {
        $state.go('loading', {text: text});
      }, 1000, true, textSpeech);
    }

    $rootScope.$on("onresult", function(e, result){
      $scope.speechResult.isInterim = !result.final;
      $scope.speechResult.result = result.text;

      if(result.final){
        stopRecognitionAndSend(result.text);
      }else{
        lastWasInterimTimeout = lastWasInterimTimeout || 
          $timeout(function(text){
            $scope.speechResult.isInterim=false;
            stopRecognitionAndSend(text);
          }, 3000, true, result.text);

        lastWasInterim=true;
      }
    });
  }]);
