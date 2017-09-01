const myApp = angular.module('app', ['ngRoute'])
.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
           
            templateUrl: 'views/main.html'
        })
         .when('/main2', {
         	 controller: 'todo',
            templateUrl: 'views/main2.html'
        })
        
        .otherwise({
            redirectTo: '/'
        })
}])


