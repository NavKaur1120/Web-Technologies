
function initMap() {
var mapProp= {
  center:new google.maps.LatLng(43.595310, -79.640579),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function setMap(){
var marker = new google.maps.Marker({position: myCenter ,
animation:google.maps.Animation.BOUNCE});

marker.setMap(map);
}
