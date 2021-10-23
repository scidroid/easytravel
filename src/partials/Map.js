import React from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

function BlogPage({ google }) {
  const [showSanctuaryOne, setShowSanctuaryOne] = React.useState(false);
  const [activeMarkerOne, setActiveMarkerOne] = React.useState({ name: "" });
  const [place, setPlace] = React.useState({});

  const onMarkerClickOne = (props, marker, e) => {
    setPlace(props);
    setActiveMarkerOne(marker);
    setShowSanctuaryOne(true);
  };

  return (
    <div>
      <Map
        google={google}
        zoom={8}
        initialCenter={{ lat: 40, lng: -80 }}
      >
        <Marker
          position={{ lat: 38.9296156, lng: -77.0519731 }}
          title={"Washington DC Sanctuary"}
          name={"Washington DC"}
          onClick={onMarkerClickOne}
        />
        <InfoWindow visible={showSanctuaryOne} marker={activeMarkerOne}>
          <div className="h-2">
            <h2 className="font-bold">Washington DC Sanctuary</h2>
            <p className="text-sm">An endangered Panda was spotted</p>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDX5b2eROUXhaHcVDNiX4yAnipp3d7898Q",
})(BlogPage);
