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
        if(SpeechRecognition!== undefined){          
          recognizer = new $window.SpeechRecognition();

          options = angular.extend({}, defaultOptions, options, listeners);
          Object.assign(recognizer, options);
          return this;
        }else{
          throw(new SpeechRecognitionException('Unable to initialize SpeechRecognizer. HTML5 SpeechRecognition not supported on your browser. '));
        }
      }, 
      start: function() {
        if(recognizer){
          recognizer.start();
        }
        else{
          throw(new SpeechRecognitionException('Unable to start recognizer. Initialize the recognizer first!'));
        }
      },
      stop: function() {
        if(recognizer){
          recognizer.stop();
        }
        else{
          throw(new SpeechRecognitionException('Unable to start recognizer. Initialize the recognizer first!'));
        }
      },
      abort: function() {
        if(recognizer){
          recognizer.abort();
        }
        else{
          throw(new SpeechRecognitionException('Unable to start recognizer. Initialize the recognizer first!'));
        }
      }, 
      filterResult: function(result){	
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
