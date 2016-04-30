'use strict';

describe('Controller: CommunicatorCtrl', function () {

  // load the controller's module
  beforeEach(module('wavesApp'));

  var CommunicatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommunicatorCtrl = $controller('CommunicatorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CommunicatorCtrl.awesomeThings.length).toBe(3);
  });
});
