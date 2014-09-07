(function() {
  'use strict';

  angular.module('pms-app', [
    'ngRoute', 'ngAnimate', 'ui.bootstrap', 'easypiechart', 'mgo-angular-wizard',
    'textAngular', 'restangular', 'ngStorage', 'ngCookies', 'ngTable',
    'mgcrea.ngStrap', 'ngCsv', 'ui.select2'
  ])

     .config([
      '$routeProvider'
      , function ($routeProvider) {
        return $routeProvider
          .when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            title: 'Dashboard'
          })
          .otherwise({
            redirectTo: '/dashboard'
          });
      }])


    //This will change page title
    .run([
      '$location', '$rootScope', function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
          if(typeof(current.$$route) != 'undefined'){
            $rootScope.title = current.$$route.title;
          }
        });
      }])

}).call(this);