angular.module('app').
config(['$routeProvider',
  function config($routeProvider) {

    $routeProvider.
      when('/', {
        template: '<home></home>'
      }).
      when('/submit', {
        template: '<submit></submit>'
      }).
      otherwise('/');
  }
]);