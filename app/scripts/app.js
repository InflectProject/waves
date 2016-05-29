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
    'puigcerber.capitalize'
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
            'templateUrl': "views/boot.html" 
          }
        }
      })
      .state('active_screen', {
        url: '/active_screen',
        views: {
          'top_left_content': { 
            'template': "<holliday-detail/>" 
          },
          'top_right_content': { 
            'template': "<forecast-detail/>" 
          },
          'content': { 
            'templateUrl': "views/active_screen/main.html" 
          }
        }
      })
      .state('talk', {
        url: '/talk',
        views: {
          'content': {             
            'template': "<voice-wave/>" 
          }
        }
      })
      .state('waiting_response', {
        url: '/waiting_response',
        views: {
          'content': { 
            'template': "<loading/>" 
          }
        }
      })
      .state('news', {
        url: '/news',
        views: {
          'content': {
            'template': "<news-response/>"
          }
        }
      })
      .state('events', {
        url: '/events',
        views: {
          'content': {
            'template': "<events-response/>"
          }
        }
      })      
      .state('weather', {
        url: '/weather',
        views: {
          'content': {
            'template': "<weather-response/>"
          }
        }
      });
      
  });
