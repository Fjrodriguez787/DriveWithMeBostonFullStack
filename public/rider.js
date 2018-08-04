window.onload = function() {
    var src = document.querySelector("div.mapboxgl-ctrl-geocoder input"),
        dst = document.getElementById("pickUp");
    src.addEventListener('input', function() {
        dst.value = src.value;
    var src2 = document.querySelector("div.mapbox-directions-destination input"),
        dst2 = document.getElementById("dropOff");
    src2.addEventListener('input', function() {
        dst2.value = src2.value;
    });
    setTimeout(function(){
     player1.api("play");
 }, 3000);
  });
}
