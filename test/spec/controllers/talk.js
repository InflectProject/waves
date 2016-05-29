'use strict';

describe('Controller: TalkCtrl', function () {

  // load the controller's module
  beforeEach(module('wavesApp'));

  var TalkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TalkCtrl = $controller('TalkCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TalkCtrl.awesomeThings.length).toBe(3);
  });
});
