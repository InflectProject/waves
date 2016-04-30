'use strict';

describe('Directive: ngOnFinishRender', function () {

  // load the directive's module
  beforeEach(module('wavesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-on-finish-render></ng-on-finish-render>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngOnFinishRender directive');
  }));
});
