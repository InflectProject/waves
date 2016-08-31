'use strict';

describe('Controller: WeatherresponseCtrl', function () {

  // load the controller's module
  beforeEach(module('wavesApp'));

  var WeatherresponseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeatherresponseCtrl = $controller('WeatherresponseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WeatherresponseCtrl.awesomeThings.length).toBe(3);
  });
});
