'use strict';

describe('Directive: weatherResponse', function () {

  // load the directive's module
  beforeEach(module('wavesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<weather-response></weather-response>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the weatherResponse directive');
  }));
});
