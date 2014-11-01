var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
        $routeProvider.
            when('/home',{
                templateUrl : 'partials/home',
                controller : 'googlemaps'
            }).
            when('/createEvent', {
                templateUrl: 'partials/createEvent',
                 controller : 'googlemaps'
            }).
            when('/findEvent', {
                templateUrl: 'partials/findEvent',
                controller : 'googlemaps'
            }).
            when('/forumHome', {
                templateUrl: 'partials/forumHome'
            }). 
            otherwise({
                redirectTo: '/home'
            });
});

app.controller("mainController", ['$scope', '$http', function($scope, $http){
  
        var app = this;
        $http.get("http://localhost:3000/api/events")
        .success(function(data) {
        $scope.events = data;
        console.log("data got");
      })
        .error(function(data){
            console.log("no got");
        })

    
}])
