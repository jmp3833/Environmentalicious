var app = angular.module('app', ['ngRoute']); // This is the Angular module declaration

// This is the front-end route configuration
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

        // function for manually updating the list of events
        // after a new one has been created
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

        // Object for creating new events
        $scope.event = {};
        $scope.event.name = "";
        $scope.event.description = "";
        $scope.event.location = "";
        $scope.event.email = "";

        //Object for a search query
        $scope.aQuery = {};
        $scope.aQuery.name = "";
        $scope.aQuery.location = "";
        $scope.aQuery.description = "";

        // This function executes when the  Create Event form submits, it posts the event object to the database 
        $scope.createEvent = function(isValid)
        {
            if(isValid)
            {
                $http.post("/api/createEvent", $scope.event)
                .success(function(data) {
                alert('Event Creation Successful!');
                $scope.didSubmit = true;
                $scope.getEvents();
                  })
                .error(function(data){
                    alert('There was a problem with the submission. Please try again.');
                    })
            }
            else
            {
                alert('Your entry seems to be invalid. Please try again.');
            }
        }

        // This function executes when the Find Event form submits either on the home page or Find Event page
        $scope.findEvent = function(isValid)
        {
            if(isValid)
            {
              $http.post("/api/searchEvents", $scope.query)
                .success(function(data) {
                     $scope.results = data;
                     $scope.resultsReturned = true;
                  })
                .error(function(data){
                    alert('There was a problem with the search. Please try again.');
                    }) 
            }
            else
            {
                alert('Your entry seems to be invalid. Please try again.')
            }
        }
    
}])
