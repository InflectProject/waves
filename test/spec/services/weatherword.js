'use strict';

describe('Service: weatherWord', function () {

  // load the service's module
  beforeEach(module('wavesApp'));

  // instantiate service
  var weatherWord;
  beforeEach(inject(function (_weatherWord_) {
    weatherWord = _weatherWord_;
  }));

  it('should do something', function () {
    expect(!!weatherWord).toBe(true);
  });

});
