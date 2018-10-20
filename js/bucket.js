// My API Key... MjQxNTIw
// Code will go below this line...

function initMap() {
        var myLatLng = {lat: 43.1533741, lng: -77.604178};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello Rochester!'
        });
      }
