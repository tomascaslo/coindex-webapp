'use strict';

angular.module('coindexerApp', [
    'ngSanitize',
    'ngAnimate',
    'ngRoute',
    'ui.router',
    'mgcrea.ngStrap',
    'underscore',
    ])

// .run(['$rootScope', function($rootScope) {
    
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
// }])

.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {

    // $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    // $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    // $httpProvider.defaults.headers.patch = {
    //     'Content-Type': 'application/json;charset=utf-8',
    // };

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
 	.state('menu', {
 		url: "/menu",
 		abstract: true,
 		templateUrl: "views/menu.html",
 		controller: "MenuCtrl",
 	})

  .state('menu.home', {
    url: "/home",
    views: {
      'content': {
        templateUrl: "views/home.html",
        controller: "HomeCtrl",
      },
    }, 
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/home');

}]);