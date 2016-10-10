'use strict';

/**
 * @ngdoc service
 * @name wavesApp.speechSynthesis
 * @description
 * # speechSynthesis
 * Service in the wavesApp.
 */
angular.module('wavesApp')
  .service('speechSynthesis', ['$window', function ($window) {
    var speechSynthesis = $window.speechSynthesis;
    var defaultOptions = {
      lang: 'en-US', 
      voiceIndex: 1
    };

    return {
      say: function(what, options, listeners){
        var msg = new $window.SpeechSynthesisUtterance();
        options=angular.extend({}, defaultOptions, options);

        msg.text=what;
        msg.lang=options.lang;
        msg.voice=speechSynthesis.getVoices().filter(function(voice){
          return voice.lang.indexOf(options.lang.split('-')[0]) >= 0;
        })[options.voiceIndex];
        
        if(listeners && listeners.onend)
          msg.onend=listeners.onend;

        speechSynthesis.speak(msg);
      }
    };
  }]);
