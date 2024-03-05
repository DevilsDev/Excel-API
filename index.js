function generateRandomCoordinates() {
    const minLat = -90;
    const maxLat = 90;
    const minLng = -180;
    const maxLng = 180;

    const lat = Math.random() * (maxLat - minLat) + minLat;
    const lng = Math.random() * (maxLng - minLng) + minLng;

    return { lat, lng };
}

// Example usage
const randomCoordinates = generateRandomCoordinates();
console.log(randomCoordinates);