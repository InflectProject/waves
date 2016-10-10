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
    var recognizer, countResults,
        defaultOptions={
          continuous: false,
          interimResults: true,
          lang: 'en-US'
        },
        noSpeechDetected;

    return {
      init: function(options, listeners){
        $window.SpeechRecognition = ($window.webkitSpeechRecognition || 
                                     $window.SpeechRecognition);
        if(SpeechRecognition !== undefined){
          var self = this;
          recognizer = new $window.SpeechRecognition();

          options = angular.extend({}, defaultOptions, options);

          options.onerror = function (e) {
            (listeners.onerror) && listeners.onerror(e);
            noSpeechDetected = (e.error == 'no-speech')
          }
          options.onend   = function () {
            (listeners.onend) && listeners.onend();
            
            if(noSpeechDetected) {
              self.stop();
              self.start();
              noSpeechDetected=false;
            }
          }

          options.onresult=function(complete_result){
            ++countResults;
            var result = self.reduceResult(complete_result);

            if(countResults===1){
              listeners.onfirstresult(result);
            }
            listeners.onresult(result);
          };

          Object.assign(recognizer, options);
          recognizer._started=false;
          return this;
        }else{
          throw('Unable to initialize SpeechRecognizer. HTML5 SpeechRecognition not supported on your browser. ');
        }
      }, 

      start: function() {
        if(recognizer){
          countResults=0;
          recognizer.start();
          recognizer._started=true;
          return this;
        }
        else{
          throw('Unable to start recognizer. Initialize the recognizer first!');
        }
      },

      stop: function() {
        if(recognizer){
          recognizer.stop();
          recognizer._started=false;
          countResults=0;
        }
        else{
          throw('Unable to start recognizer. Initialize the recognizer first!');
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
          throw('Unable to start recognizer. Initialize the recognizer first!');
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
