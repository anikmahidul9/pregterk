let map;

function initMap() {
  // Map options
  const options = {
    zoom: 12,
    center: { lat: 40.73061, lng: -73.935242 }, // Example coordinates (New York City)
  };

  // Create the map
  map = new google.maps.Map(document.getElementById("map"), options);

  // Add a marker for the hospital (example location)
  const marker = new google.maps.Marker({
    position: { lat: 40.73061, lng: -73.935242 },
    map: map,
  });
}

// Function to handle the emergency button click
document.getElementById("emergencyButton").addEventListener("click", () => {
  document.getElementById("map").style.display = "block";
  initMap();
});
