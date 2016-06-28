'use strict';

describe('Service: InflectionsAPIService', function () {

  // load the service's module
  beforeEach(module('wavesApp'));

  // instantiate service
  var InflectionsAPIService;
  beforeEach(inject(function (_InflectionsAPIService_) {
    InflectionsAPIService = _InflectionsAPIService_;
  }));

  it('should do something', function () {
    expect(!!InflectionsAPIService).toBe(true);
  });

});
