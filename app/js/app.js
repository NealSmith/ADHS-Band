'use strict';


// Declare app level module which depends on filters, and services
angular.module('signups', [
  'ngRoute',
  'signups.filters',
  'signups.services',
  'signups.directives',
  'signups.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Reports', {templateUrl: 'partials/reports.html', controller: 'reportsCtrl'});
  $routeProvider.when('/Data', {templateUrl: 'partials/data.html', controller: 'dataEntryCtrl'});
  $routeProvider.when('/DataClean', {templateUrl: 'partials/dataClean.html', controller: 'dataCleanCtrl'});
  $routeProvider.otherwise({redirectTo: '/Reports'});
}]);
