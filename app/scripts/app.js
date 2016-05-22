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
      .state('home', { url: '/' })
      .state('active_screen', {
        url: '/active_screen',
        views: {
          'top_left_content': { 
            'templateUrl': "views/active_screen/hollidays_detail.html" 
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
            'templateUrl': "views/talk/voice_wave.html" 
          }
        }
      })
      .state('waiting_response', {
        url: '/waiting_response',
        views: {
          'content': { 
            'templateUrl': "views/talk/loading.html" 
          }
        }
      })
      .state('news', {
        url: '/news',
        views: {
          'content': {
            'templateUrl': "views/responses/news.html"
          }
        }
      })
      .state('events', {
        url: '/events',
        views: {
          'content': {
            'templateUrl': "views/responses/events.html"
          }
        }
      })      
      .state('weather', {
        url: '/weather',
        views: {
          'content': {
            'templateUrl': "views/responses/weather.html"
          }
        }
      });
      
  });
