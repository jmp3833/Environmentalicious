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
            when('/eventResults', {
                templateUrl: 'partials/eventResults'
            }).
            when('/singleEvent', {
                templateUrl: 'partials/singleEvent'
            }).
            when('/eventEdit', {
                templateUrl: 'partials/eventEdit'
            }).
            otherwise({
                redirectTo: '/home'
            });
});

app.controller("mainController", ['$scope', '$http', function($scope, $http){
  
        var app = this;


        $scope.getEvents = function(){
             $http.get("http://localhost:3000/api/events")
            .success(function(data) {
            $scope.events = data;
            console.log("data got");
             })
            .error(function(data){
                console.log("no got");
            })
        } 

        $scope.event = {};
        event.name = "";
        event.description = "";
        event.location = "";
        event.email = "";

        $scope.createEvent = function(isValid)
        {
            if(isValid)
            {
                $http.post("http://localhost:3000/api/createEvent", $scope.event)
                .success(function(data) {
                alert('Event Creation Successful!');
                $scope.didSubmit = true;
                $scope.getEvents();
                  })
                .error(function(data){
                    alert('noop');
                    })
            }
            else
            {
                alert('invalid form!');
            }
        }
    
}])
