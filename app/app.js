var myApp = angular.module('myBrewery', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

  //z$locationProvider.html5Mode(true);

  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html',
  })
  .when('/ourBeers', {
    templateUrl: 'views/ourBeers.html'
  })
  .when('/contact', {
    templateUrl: 'views/contact.html'
  })
  .when('/about', {
    templateUrl: 'views/about.html'
  })
  .otherwise({
    redirectTo: '/home'
  });

}]);

myApp.controller('MainController', ['$scope', function($scope){

}]);
