'use strict';

describe('Directive: pharmaciesResponse', function () {

  // load the directive's module
  beforeEach(module('wavesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pharmacies-response></pharmacies-response>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pharmaciesResponse directive');
  }));
});
