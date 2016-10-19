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
  .module('wavesApp').run(['$rootScope', '$state', '$timeout', 'keywordHelper',
    function($rootScope, $state, $timeout, keywordHelper){
      var responseTimeout=null;

      annyang.addCommands({
        '*allSpeech': function(allSpeech){       
          if(!$state.is('talking')) $state.go('talking');
          console.info("COMMAND:", allSpeech);
          $rootScope.$emit("speech:result", {text: allSpeech, final: true});
        }
      });

      annyang.addCallback('result', function(userSaid) {
        // if(!$state.is('talking')) $state.go('talking');
        
        $timeout.cancel(responseTimeout);
        /*
        $timeout(function(){
          $rootScope.$emit("speech:result", {text: userSaid[0], final: false});
        }, 10);*/
      });
      annyang.addCallback('resultMatch', function(userSaid/*, commandText, phrases*/) {
        // $rootScope.$emit("speech:result", {text: userSaid, final: true});
      });

      annyang.addCallback('error', function(e) {
        if(e.error !== 'no-speech')
          console.error("ANNYANG:error", e);
      });
      annyang.addCallback('errorNetwork', function(e) {
        console.error("ANNYANG:errorNetwork", e);
      });
      annyang.addCallback('errorPermissionBlocked', function(e) {
        console.error("ANNYANG:errorPermissionBlocked", e);
      });
      annyang.addCallback('errorPermissionDenied', function(e) {
        console.error("ANNYANG:errorPermissionDenied", e);
      });

      annyang.debug(true);
      
      annyang.setLanguage('es-AR');
      annyang.start({ autoRestart: true, continuous: true });
      
      $rootScope.$on('$stateChangeStart', function(ev, next, nextParams, from){
        if(['loading', 'not_found', 'clima', 'farmacias', 'noticias'].indexOf(next.name)!== -1){
          annyang.resume();
          responseTimeout=$timeout(function() {
            $state.go('active_screen');
          }, 15000);
        }
      });
    }]);
