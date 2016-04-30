'use strict';

describe('Controller: NewsCtrl', function () {

  // load the controller's module
  beforeEach(module('wavesApp'));

  var NewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsCtrl = $controller('NewsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewsCtrl.awesomeThings.length).toBe(3);
  });
});
