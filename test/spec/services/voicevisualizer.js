'use strict';

describe('Service: voiceVisualizer', function () {

  // load the service's module
  beforeEach(module('wavesApp'));

  // instantiate service
  var voiceVisualizer;
  beforeEach(inject(function (_voiceVisualizer_) {
    voiceVisualizer = _voiceVisualizer_;
  }));

  it('should do something', function () {
    expect(!!voiceVisualizer).toBe(true);
  });

});
