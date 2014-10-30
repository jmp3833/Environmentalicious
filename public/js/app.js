var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
        $routeProvider.
            when('/home',{
                templateUrl : 'partials/home',
                controller : 'googlemaps'
            }).
            when('/createEvent', {
                templateUrl: 'partials/createEvent'
            }).
            when('/findEvent', {
                templateUrl: 'partials/findEvent'
            }).
            when('/forumHome', {
                templateUrl: 'partials/forumHome'
            }). 
            otherwise({
                redirectTo: '/home'
            });
});