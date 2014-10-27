var app = angular.module('app', ['ngRoute'])

app.config(['$routeProvider'], 
    function($routeProvider) {
        $routeProvider.
            when('/createEvent', {
                templateUrl: '../views/createEvent.html'
            }).
            when('/findEvent', {
                templateUrl: '../views/findEvent.html'
            }).
            when('/forumHome', {
                templateUrl: '../views/forumHome.html'
            }). 
            when('/about', {
                templateUrl: '../views/about.html'
            }).
            otherwise({
                redirectTo: '../views/home.html'
            });
}])