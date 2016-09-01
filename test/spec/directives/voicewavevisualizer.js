'use strict';

describe('Directive: voicewaveVisualizer', function () {

  // load the directive's module
  beforeEach(module('wavesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<voicewave-visualizer></voicewave-visualizer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the voicewaveVisualizer directive');
  }));
});
