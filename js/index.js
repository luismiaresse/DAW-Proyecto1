// Initialize and add the map
function initMap() {
  // The map, centered at santiago
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: santiago,
  });
    const santiago = { lat: 42.8806001, lng: -8.5468299 };
    // The marker, positioned at santiago
    const santMark = new google.maps.Marker({
      position: santiago,
      map: map,
    });
    const sarria = { lat: 42.906, lng: -8.556 };
    // The marker, positioned at sarria
    const sarrMark = new google.maps.Marker({
      position: sarria,
      map: map,
    });
    

  }
  
  window.initMap = initMap;