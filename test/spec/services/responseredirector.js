'use strict';

describe('Service: responseredirector', function () {

  // load the service's module
  beforeEach(module('wavesApp'));

  // instantiate service
  var responseredirector;
  beforeEach(inject(function (_responseredirector_) {
    responseredirector = _responseredirector_;
  }));

  it('should do something', function () {
    expect(!!responseredirector).toBe(true);
  });

});
