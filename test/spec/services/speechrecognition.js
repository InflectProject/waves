'use strict';

describe('Service: speechRecognition', function () {

  // load the service's module
  beforeEach(module('wavesApp'));

  // instantiate service
  var speechRecognition;
  beforeEach(inject(function (_speechRecognition_) {
    speechRecognition = _speechRecognition_;
  }));

  it('should do something', function () {
    expect(!!speechRecognition).toBe(true);
  });

});
