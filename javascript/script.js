function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15.5,
        center: { lat: 41.8730, lng: -87.6279},
      });
      var marker = new google.maps.Marker({
        position: { lat: 41.90324, lng: -87.66789},
        map: map,
      });
      var coffeeShop = new google.maps.Circle({
        center:{ lat: 41.90324, lng: -87.66789},
        map: map,
        label: "Intelligentsia Coffee Wicker Park",
        animation: google.maps.Animation.DROP
      });
}
window.initMap = initMap;