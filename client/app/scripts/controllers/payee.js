'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PayeeCtrl
 * @description
 * # PayeeCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PayeeCtrl', function ($scope) {
    console.log("hello")
    $scope.payee = [
      {
        name: 'General Electric',
        address: '1234 Main Street',
        account_no: '987654',
        due_date: '2016-11-30',
        amount_due: 488,
        paid: false,
        last_payment_date: '2016-10-17',
        notes: 'test'
      },
      {
        name: 'Honda Finance',
        address: '8873 Honeycut Street',
        account_no: '54321',
        due_date: '2016-11-30',
        amount_due: 375,
        paid: false,
        last_payment_date: '2016-10-14',
        notes: 'test2'
      }
    ];
  });
