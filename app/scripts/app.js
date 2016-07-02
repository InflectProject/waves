'use strict';

/**
 * @ngdoc overview
 * @name wavesApp
 * @description
 * # wavesApp
 *
 * Main module of the application.
 */
angular
  .module('wavesApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'puigcerber.capitalize',
    'ngHolder'
  ])
  .config(function ($stateProvider, $routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/active_screen'
      });

    $stateProvider
      .state('home', { 
        url: '/',
        views: {
          'content': { 
            'templateUrl': 'views/boot.html' 
          }
        }
      })
      .state('active_screen', {
        url: '/active_screen',
        views: {
          'top_left_content': { 
            'template': '<holliday-detail/>' 
          },
          'top_right_content': { 
            'template': '<forecast-detail/>' 
          },
          'content': { 
            'templateUrl': 'views/active_screen/main.html' 
          }
        }
      })
      .state('talk', {
        url: '/talk',
        views: {
          'content': {             
            'template': '<voice-wave/>' 
          }
        }
      })
      .state('waiting_response', {
        url: '/waiting_response',
        views: {
          'content': { 
            'template': '<loading/>' 
          }
        }
      })
      .state('news', {
        url: '/news',
        views: {
          'content': {
            'template': '<news-response/>'
          }
        }
      })
      .state('events', {
        url: '/events',
        views: {
          'content': {
            'template': '<events-response/>'
          }
        }
      })      
      .state('weather', {
        url: '/weather',
        views: {
          'content': {
            'template': '<weather-response/>'
          }
        }
      });
  });

 angular
  .module('wavesApp').run(['$rootScope', 'speechSynthesis', 'speechRecognition', '$state', '$timeout', function($rootScope, speechSynthesis, speechRecognition, $state, $timeout){
      $rootScope.speechResult={};
      $rootScope.speechWasEnded=false;

      try{
        $rootScope.speechRecognition = speechRecognition.init({ lang: 'es-AR' }, 
        {
          onspeechstart: function(e){
            $rootScope.speechResult={};
            $state.go('talk');
            $rootScope.$emit('speechstart');
          },
          onresult: function onResult(complete_result){
            var result = $rootScope.speechRecognition.filterResult(complete_result);

            $rootScope.speechResult.isInterim = !result.final;
            $rootScope.speechResult.result = result.text;

            if(result.final){
              speechSynthesis.say(result.text, {lang:'es-AR'});
              $rootScope.speechRecognition.stop();
              $rootScope.speechResult.stopSpeech=true;

              $timeout(function() { 
                $state.go('waiting_response');
              }, 1000);
            }
          },
          onend: function onEnd(e){
            if($rootScope.speechWasEnded){
              $state.go('active_screen');
              $rootScope.speechWasEnded=false;
            }

            $rootScope.speechRecognition.stop();
            if(!$rootScope.speechResult.stopSpeech){
              $rootScope.speechRecognition.start();
              $rootScope.speechWasEnded=!$rootScope.speechWasEnded;
            }
          },
          onerror: function onError(e){
            $rootScope.speechResult.noSpeech=(e.error==='no-speech');
          }
        });

        $rootScope.speechRecognition.start();
        
      }catch(e){
        $rootScope.speechResult.result = e.message;
        $rootScope.speechResult.speechRecognitionNotSupported=true;
      }

      
      $rootScope.$on('$stateChangeStart', function(ev, next, nextParams, from, fromParams){
        if((from.name != next.name) && (next.name == "active_screen") && ($rootScope.speechRecognition.isStopped())){
          try{
            $rootScope.speechRecognition.start();
          }catch(e){
            console.warn(e);
          }
        }
      });
    }]);
