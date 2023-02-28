import React from "react";
import { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

export default function SimpleMap({ dataCL }) {
  const defaultProps = {
    center: {
      lat: 41.902783,
      lng: 12.496366,
    },
    zoom: 6,
  };

  const [places, setPlaces] = useState([]);

  const getAvailableLocations = (dataCL) => {
    const locations = dataCL.map((data) => {
      return {
        publicName: data.publicName,
        text: data.mansione,
        lat: data.location.lat,
        lng: data.location.lng,
      };
    });
    return locations;
  };

  useEffect(() => {
    const locations = getAvailableLocations(dataCL);
    setPlaces(locations);
  }, [dataCL]);

  return (
    // Important! Alwys set the container height explicitlya

    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      {places.map((place) => (
        <Marker
          key={place.publicName}
          text={place.text}
          lat={place.lat}
          lng={place.lng}
        />
      ))}
    </GoogleMapReact>
  );
}
