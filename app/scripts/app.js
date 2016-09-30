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
    'ngHolder',
    'pascalprecht.translate'
  ])
  .config(function ($stateProvider, $routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $stateProvider
      .state('boot', { 
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
        params: { 
          result: null, 
          speechRecognitionNotSupported: false 
        },
        views: {
          'content': {             
            'template': '<talking/>' 
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
      .state('not_found', {
        url: '/not_found',
        params: { response: null },
        views: {
          'content': {
            'template': '<not-found-response/>'
          }
        }
      })
      .state('noticias', {
        url: '/noticias',
        params: { response: null },
        views: {
          'content': {
            'template': '<news-response/>'
          }
        }
      })
      .state('clima', {
        url: '/clima',
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
        params: { response: null },
        views: {
          'content': {
            'template': '<events-response/>'
          }
        }
      })
      .state('feriado', {
        url: '/next-holliday',
        params: { response: null },
        views: {
          'content': {
            'template': '<next-holliday-response/>'
          }
        }
      })
    .state('farmacias', {
        url: '/pharmacies',
        params: { response: null },
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

/*    TODO:: Create a decorator!  
      function speechResultTransformer(result){
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
            onfirstresult: function(){
              $state.go('talking');
            },
            onresult: function(result){
              $rootScope.$emit("onresult", result);
            }
          }
        );
        
        speechRecognizer.start();

        $rootScope.speechRecognition=speechRecognizer;
      }catch(e){
        //TODO:: Move message to active_screen as thin navbar
        console.warn({result: e.message, speechRecognitionNotSupported: true});
      }

      
      $rootScope.$on('$stateChangeStart', function(ev, next, nextParams, from, fromParams){
        if((from.name != next.name) && (next.name == "active_screen") && ($rootScope.speechRecognition) && ($rootScope.speechRecognition.isStopped())){
          try{
            $rootScope.speechRecognition && $rootScope.speechRecognition.start();
          }catch(e){
            console.warn(e);
          }
        }
      });
    }]);
