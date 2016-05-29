'use strict';

describe('Service: speechSynthesis', function () {

  // load the service's module
  beforeEach(module('wavesApp'));

  // instantiate service
  var speechSynthesis;
  beforeEach(inject(function (_speechSynthesis_) {
    speechSynthesis = _speechSynthesis_;
  }));

  it('should do something', function () {
    expect(!!speechSynthesis).toBe(true);
  });

});
