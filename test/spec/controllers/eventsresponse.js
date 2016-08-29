'use strict';

describe('Controller: EventsresponseCtrl', function () {

  // load the controller's module
  beforeEach(module('wavesApp'));

  var EventsresponseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventsresponseCtrl = $controller('EventsresponseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventsresponseCtrl.awesomeThings.length).toBe(3);
  });
});
