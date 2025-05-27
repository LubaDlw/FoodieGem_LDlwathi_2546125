
const getLatLngFromAddress = async (address) => {
  const apiKey = "AIzaSyCGzIc7FwUjv-h5m-XijoYstEUO4oBovEY";
  const encodedAddress = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status === "OK") {
    const location = data.results[0].geometry.location;
    return { lat: location.lat, lng: location.lng };
  } else {
    console.error("Geocoding error:", data.status);
    return null;
  }
};

export default getLatLngFromAddress;




// "IzaSyCGzIc7FwUjv-h5m-XijoYstEUO4oBovEY"