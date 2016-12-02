'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/payees', {
        templateUrl: 'views/payees.html',
        controller: 'PayeesCtrl',
        controllerAs: 'payees'
      })
      .when('/Payee', {
        templateUrl: 'views/payee.html',
        controller: 'PayeeCtrl',
        controllerAs: 'Payee'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
