'use strict';

describe('Service: newsWord', function () {

  // load the service's module
  beforeEach(module('wavesApp'));

  // instantiate service
  var newsWord;
  beforeEach(inject(function (_newsWord_) {
    newsWord = _newsWord_;
  }));

  it('should do something', function () {
    expect(!!newsWord).toBe(true);
  });

});
