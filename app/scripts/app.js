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
    'pascalprecht.translate',
    'LocalStorageModule'
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
      .state('farmacias', {
        url: '/farmacias',
        params: { response: null },
        views: {
          'content': {
            'template': '<pharmacies-response/>'
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
      })*/
      ;
  })
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('waves');
  });

 angular
  .module('wavesApp').run(['$rootScope', 'speechRecognition', '$state',
    function($rootScope, speechRecognition, $state){
      var speechRecognizer;
      $rootScope.speechResult={};
      
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
              $rootScope.$emit("speech:result", result);
            }
          }
        );
        
        speechRecognizer.start();

        $rootScope.speechRecognition=speechRecognizer;
      }catch(e){
        //TODO:: Move message to active_screen as thin navbar
        console.warn({result: e.message, speechRecognitionNotSupported: true});
      }

      
      $rootScope.$on('$stateChangeStart', function(ev, next, nextParams, from){
        if(['loading', 'not_found', 'clima', 'farmacias', 'noticias'].indexOf(next.name)!== -1){
          ($rootScope.speechRecognition) && $rootScope.speechRecognition.start();
          responseTimeout=$timeout(function() {
            $state.go('active_screen');
          }, 15000);
        }
        
        if(from.name === next.name){
          ev.preventDefault();
          return false;
        }else{
          if( ( (next.name === "boot") || 
                (next.name === "active_screen") ) && 
              ($rootScope.speechRecognition) && 
              ($rootScope.speechRecognition.isStopped())
            ){
            try{
              ($rootScope.speechRecognition) && $rootScope.speechRecognition.start();
            }catch(e){
              console.warn(e);
            }
          }
        }
        

      });
    }]);
