'use strict';

/**
 * @ngdoc function
 * @name wavesApp.controller:TalkCtrl
 * @description
 * # TalkCtrl
 * Controller of the wavesApp
 */
angular.module('wavesApp')
  .controller('TalkCtrl', ['$rootScope', '$scope', 'speechSynthesis', 'speechRecognition', '$state', '$timeout',  
    function ($rootScope, $scope, speechSynthesis, speechRecognition, $state, $timeout) {
      $scope.result="";

      try {      
        $scope.speechRecognition = speechRecognition.init({ lang: 'es-AR' }, 
          {
            onspeechstart: function onSpeechStart(e){
              console.log(e);
            }, 
            onresult: function onResult(result){
              result = $scope.speechRecognition.filterResult(result);
              

              $scope.isInterim = !result.final;
              $scope.result = result.text;

              if(result.final){
                speechSynthesis.say(result.text, {lang:'es-AR'});
                
                $timeout(function() { 
                  $state.go('waiting_response');
                }, 1000);
              }
            },
            onend: function onEnd(){
              $scope.speechRecognition.stop();
              if($scope.noSpeech){
                $scope.speechRecognition.start();
                $scope.noSpeech=false;
              }
            },
            onerror: function onError(e){
              if(e.error==='no-speech'){
                $scope.noSpeech=true;
                // speechSynthesis.say('No te oigo', {lang:'es-AR'}); 
              }
            }
          });

        $scope.speechRecognition.start();
      }catch(e){
        $scope.result = e.message;
        $scope.speechRecognitionNotSupported=true;
      }

      $rootScope.$on('$stateChangeStart', function(){ 
        if($scope.speechRecognition)
          $scope.speechRecognition.stop();
      });
  }]);
