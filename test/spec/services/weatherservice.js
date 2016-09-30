'use strict';

describe('Service: weatherService', function () {

  // load the service's module
  beforeEach(module('wavesApp'));

  // instantiate service
  var weatherService;
  beforeEach(inject(function (_weatherService_) {
    weatherService = _weatherService_;
  }));

  it('should do something', function () {
    expect(!!weatherService).toBe(true);
  });

});
