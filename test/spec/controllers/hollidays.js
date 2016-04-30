'use strict';

describe('Controller: HollidaysCtrl', function () {

  // load the controller's module
  beforeEach(module('wavesApp'));

  var HollidaysCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HollidaysCtrl = $controller('HollidaysCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HollidaysCtrl.awesomeThings.length).toBe(3);
  });
});
