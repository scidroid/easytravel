import { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export const MapComponent = ({ google }) => {
  const [places, setPlaces] = useState(null);
  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch(
        "https://0f16-2600-3c02-00-f03c-92ff-fe7e-fec.ngrok.io/destination/"
      );
      const data = await response.json();
      setPlaces(data.data[0]);
    }
  }, []);

  const handleClick = (url) => {
    window.open(url);
  };

  return (
    <>
      {places && (
        <Map google={google}>
          {places.map((place, key) => (
            <Marker
              key={key}
              title={place.name}
              name={place.description}
              position={{
                lat: place.coords[0],
                lng: place.coords[1],
              }}
              onClick={() => handleClick(place.url)}
            />
          ))}
        </Map>
      )}
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDX5b2eROUXhaHcVDNiX4yAnipp3d7898Q",
})(MapComponent);
