var lat;var lng;var map;var map2;var map3;var image='img/map/google_map_point.png';var styles=[{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}];var styles2=[{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}];jQuery.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=san francisco, CA 94102, US&sensor=false',function(data){lat=data.results[0].geometry.location.lat;lng=data.results[0].geometry.location.lng;}).complete(function(){dxmapLoadMap();});function attachSecretMessage(marker,message)
{var infowindow=new google.maps.InfoWindow({content:message});google.maps.event.addListener(marker,'click',function(){infowindow.open(map,marker);});}
window.dxmapLoadMap=function()
{var center=new google.maps.LatLng(lat,lng);var settings={mapTypeId:google.maps.MapTypeId.ROADMAP,zoom:14,draggable:true,scrollwheel:false,center:center,mapTypeControl:false,panControl:true,streetViewControl:false};map=new google.maps.Map(document.getElementById('googlemap_1'),settings);var marker=new google.maps.Marker({position:center,title:'Map title',map:map,icon:image});marker.setTitle('Map title'.toString());attachSecretMessage(marker,'');}