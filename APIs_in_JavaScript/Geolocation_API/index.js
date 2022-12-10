
const x = document.getElementById("demo");

function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch {
        x.innerHTML = err;
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br> Longitude: " + position.coords.longitude + 
    "<br> Accuracy: " + position.coords.accuracy +
    "<br> Timestamp (represent the time ): " + position.timestamp;
}