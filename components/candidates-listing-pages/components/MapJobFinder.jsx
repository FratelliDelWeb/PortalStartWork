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
    zoom: 7,
  };

  const [places, setPlaces] = useState([]);

  const getAvailableLocations = (dataCL) => {
    console.log(dataCL);
    const locations = dataCL.map((data) => {
      return {
        id: data._id,
        publicName: data.publicName,
        skills: data.skills,
        mansione: data.mansione,
        lat: data.location.lat,
        lng: data.location.lng,
        active: false,
      };
    });
    console.log(locations);
    return locations;
  };

  useEffect(() => {
    const locations = getAvailableLocations(dataCL);
    setPlaces(locations);
  }, []);

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
          lat={place.lat}
          lng={place.lng}
          data={place}
          text={place.mansione}
          onClick={true}
        />
      ))}
    </GoogleMapReact>
  );
}
