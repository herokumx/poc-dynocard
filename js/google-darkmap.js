// google maps

// 2015 snazzymaps, customized by traivan98-1
//
// When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 5,
            disableDefaultUI: true,
            draggable: false,
            streetViewControl: false,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
			
			// YOUR POSITION 1
            center: new google.maps.LatLng(48.858278, 2.294254), // EDIT THIS PART
			
            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles : [{
    featureType: 'all',
    stylers: [{
        "visibility": "off"
    }]
}, {
    featureType: 'landscape',
    stylers: [{
        'visibility': 'on'
    }, {
        color: '#999999'
    }]
}, {
    featureType: 'water',
    stylers: [{
        'visibility': 'on'
    }, {
        color: '#333333'
    }]
}]
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('google-map');
        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
        var image = 'images/marker.png';
        var circle = {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#000000',
			fillOpacity: 1.0,
			scale: 12,
            strokeColor: '#000000',
			strokeOpacity: 1.0,
            strokeWeight: 1
        };
        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
			
			// YOUR POSITION 1-1
            position: new google.maps.LatLng(48.858278, 2.294254), // EDIT THIS PART
			
            map: map,
            icon: image,
            title: 'traivan98-1'
        });
    }