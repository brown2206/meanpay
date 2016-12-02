'use strict';

describe('Controller: PayeeCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PayeeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PayeeCtrl = $controller('PayeeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PayeeCtrl.awesomeThings.length).toBe(3);
  });
});
