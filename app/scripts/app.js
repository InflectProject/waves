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
      .state('talking', {
        url: '/talking',
        params: { result: null },
        views: {
          'content': {             
            'template': '<speech-visualizer/>' 
          }
        }
      })
      .state('loading', {
        url: '/loading',
        params: { text: null },
        views: {
          'content': { 
            'template': '<loading/>'
          }
        }
      })
      .state('noticias', {
        url: '/news',
        params: { response: null },
        views: {
          'content': {
            'template': '<news-response/>'
          }
        }
      })
      .state('clima', {
        url: '/weather',
        params: { response: null },
        views: {
          'content': {
            'template': '<weather-response/>'
          }
        }
      })    
    /* 
    .state('eventos', {
        url: '/events',
        views: {
          'content': {
            'template': '<events-response/>'
          }
        }
      })
      .state('feriado', {
        url: '/next-holliday',
        views: {
          'content': {
            'template': '<next-holliday-response/>'
          }
        }
      })
    .state('farmacias', {
        url: '/pharmacies',
        views: {
          'content': {
            'template': '<pharmacies-response/>'
          }
        }
      })*/
      ;
  });

 angular
  .module('wavesApp').run(['$rootScope', 'speechSynthesis', 'speechRecognition', '$state', '$timeout', '$interval', 'InflectionsAPIService', 'responseRedirector',
    function($rootScope, speechSynthesis, speechRecognition, $state, $timeout, $interval, InflectionsAPIService, ResponseRedirectorService){
      var speechRecognizer;
      $rootScope.speechResult={};

/*      function speechResultTransformer(result){
        var r = speechRecognizer.reduceResult(result)
        var extractedSvcKey = $rootScope.initialData.grammars.keys.difference(r.text.split(" "))
        if(extractedSvcKey){
          var params_actions=$rootScope.initialData.grammars[extractedSvcKey].difference(r.text.split(" "))
        }
      }*/
      
      try{
        speechRecognizer = speechRecognition.init( 
          { 
            lang: 'es-AR', 
            continuous: true 
          }, 
          {
            onerror: function (e){
              $rootScope.speechResult.noSpeech=(e.error==='no-speech');
            },
            onresult: function (complete_result){
              // speechSynthesis.say(result.text, {lang:'es-AR'});  

              //speechResultTransformer(complete_result)
              $state.go('talking', {result: speechRecognizer.reduceResult(complete_result)});
            }
          });

        speechRecognizer.start();

        $rootScope.speechRecognition=speechRecognizer;
      }catch(e){
        $rootScope.speechResult.result = e.message;
        $rootScope.speechResult.speechRecognitionNotSupported=true;
      }

      
      $rootScope.$on('$stateChangeStart', function(ev, next, nextParams, from, fromParams){
        if((from.name != next.name) && (next.name == "active_screen") && ($rootScope.speechRecognition) && ($rootScope.speechRecognition.isStopped())){
          try{
            $rootScope.speechRecognition.start();
          }catch(e){
            console.warn(e);
          }
        }
      });
    }]);
