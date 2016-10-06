"use strict";
angular
  .module('wavesApp').config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'TODAY': 'Today'
  });
 
  $translateProvider.translations('es', {
    'TODAY': 'Hoy'
  });
 
  $translateProvider.preferredLanguage('es');
}]);