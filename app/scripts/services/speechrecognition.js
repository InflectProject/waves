'use strict';

/**
 * @ngdoc service
 * @name wavesApp.speechRecognition
 * @description
 * # speechRecognition
 * Service in the wavesApp.
 */
angular.module('wavesApp')
  .service('speechRecognition', ['$window', function ($window) {
    var recognizer,
        defaultOptions={
          continuous: false,
          interimResults: true,
          lang: 'en-US'
        };

    return {
      init: function(options, listeners){
        $window.SpeechRecognition = ($window.webkitSpeechRecognition || 
                                     $window.SpeechRecognition);
        if(SpeechRecognition !== undefined){          
          recognizer = new $window.SpeechRecognition();

          options = angular.extend({}, defaultOptions, options, listeners);
          Object.assign(recognizer, options);
          recognizer._started=false;
          return this;
        }else{
          throw(new SpeechRecognitionException('Unable to initialize SpeechRecognizer. HTML5 SpeechRecognition not supported on your browser. '));
        }
      }, 

      start: function() {
        if(recognizer){
          recognizer.start();
          recognizer._started=true;
        }
        else{
          throw(new SpeechRecognitionException('Unable to start recognizer. Initialize the recognizer first!'));
        }
      },

      stop: function() {
        if(recognizer){
          recognizer.stop();
          recognizer._started=false;
        }
        else{
          throw(new SpeechRecognitionException('Unable to start recognizer. Initialize the recognizer first!'));
        }
      },

      isStarted: function(){
        return recognizer._started;
      },

      isStopped: function(){
        return !recognizer._started;
      },

      abort: function() {
        if(recognizer){
          recognizer.abort();
          recognizer._started=false;
        }
        else{
          throw(new SpeechRecognitionException('Unable to start recognizer. Initialize the recognizer first!'));
        }
      }, 
      
      reduceResult: function(result){	
        if (!result || !result.results) {
          return;
        }

        var recognition = result.results[result.resultIndex];

        return {
          text: recognition[0].transcript,
          confidence: recognition[0].confidence,
          final: recognition.isFinal
        };
      }
    };
  }]);
