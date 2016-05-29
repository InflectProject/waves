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
      function handleOnResult(result, cb) {
        if (!result || !result.results) {
          return;
        }

        var recognition = result.results[result.resultIndex];

        cb({
          text: recognition[0].transcript,
          confidence: recognition[0].confidence,
          final: recognition.isFinal
        });
      }
      
      var recognizer,
          defaultOptions={
            continuous: false,
            interimResults: true,
            lang: 'en-US'
          };


      return {
        init: function(options, onResult, onEnd, onError){
          recognizer = new $window.webkitSpeechRecognition();

          if(onResult){
            options.onresult = function(result){
              handleOnResult(result, onResult);
            };
          }

          options = angular.extend({}, defaultOptions, options, {onerror: onError, onend: onEnd });
          Object.assign(recognizer, options);
          return this;
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
        }
      };
    }]);
