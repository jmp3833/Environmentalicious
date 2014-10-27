var app = angular.module('app', ['ngRoute'])

app.config(['$routeProvider'], 
    function($routeProvider) {
        $routeProvider.
            when('/createEvent', {
                templateUrl: '/createEvent.html'
            }).
            when('/findEvent', {
                templateUrl: '/findEvent.html'
            }).
            when('/forumHome', {
                templateUrl: '/forumHome.html'
            }). 
            when('/about', {
                templateUrl: 'about.html'
            }).
            otherwise({
                redirectTo: '/home.html'
            });
}])