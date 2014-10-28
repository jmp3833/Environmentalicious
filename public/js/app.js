var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
        $routeProvider.
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
                redirectTo: '/index'
            });
});