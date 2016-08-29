'use strict';

describe('Controller: SpeechvisualizerCtrl', function () {

  // load the controller's module
  beforeEach(module('wavesApp'));

  var SpeechvisualizerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeechvisualizerCtrl = $controller('SpeechvisualizerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpeechvisualizerCtrl.awesomeThings.length).toBe(3);
  });
});
