'use strict';

describe('Controller: BootCtrl', function () {

  // load the controller's module
  beforeEach(module('wavesApp'));

  var BootCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BootCtrl = $controller('BootCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BootCtrl.awesomeThings.length).toBe(3);
  });
});
