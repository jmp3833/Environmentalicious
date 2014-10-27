// js/services/events.js
angular.module('todoService', [])
    .factory('Todos', function($http) {
        return {
            get : function() {
                return $http.get('/api/events');
            },
            create : function(todoData) {
                return $http.post('/api/createEvent', todoData);
            },
            delete : function(id) {
                return $http.get('/api/deleteEvent/' + id);
            }
        }
    });