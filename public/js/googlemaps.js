var app = angular.module('app');
app.controller('googlemaps', function($scope) {

    function init(){
        var mapOptions = {
          center: { lat: 43.083, lng: -77.675},
          zoom: 14
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        var marker = new google.maps.Marker({
            position: { lat: 43.08301, lng: -77.67501},
            map: map,
            title:"Sustainalot"
        });
        var infoString = '<h4><a href="/#/singleEvent">Sustainalot</a></h4>'+
            '<p>Event: Sustainalot</p>'+
            '<p>Location: Rochester</p>'+
            '<p>Description: Sustaining a lot</p>';
        var infowindow = new google.maps.InfoWindow({
          content: infoString
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
        
    }
    
    init();
})
