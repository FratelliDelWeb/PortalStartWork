import React from "react";
import { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

export default function SimpleMap({ dataCL, elementOnHover }) {
  const defaultProps = {
    center: {
      lat: 41.902783,
      lng: 12.496366,
    },
    zoom: 6,
  };

  const [places, setPlaces] = useState([]);
  const [propsMap, setPropsMap] = useState(defaultProps);

  const getAvailableLocations = (dataCL) => {
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
    return locations;
  };

  const setActiveElement = (element) => {
    if (element) {
      const locations = getAvailableLocations(dataCL);
      locations.find((location) => {
        var id = element._id || element.id;
        if (id === location.id) {
          if (!element.active) {
            location.active = true;
            setPropsMap({
              center: [parseFloat(location.lat), parseFloat(location.lng)],
              zoom: 8,
            });
          } else {
            location.active = false;
          }
        }
      });
      setPlaces(locations);
    }
  };

  useEffect(() => {
    const locations = getAvailableLocations(dataCL);
    setPlaces(locations);
  }, []);

  useEffect(() => {
    setActiveElement(elementOnHover);
  }, [elementOnHover]);

  console.log("rendering map");
  return (
    // Important! Alwys set the container height explicitlya

    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      center={propsMap.center}
      zoom={propsMap.zoom}
    >
      {places.map((place) => (
        <Marker
          key={place.publicName}
          lat={place.lat}
          lng={place.lng}
          data={place}
          text={place.mansione}
          onClick={setActiveElement}
          modifyMap={setPropsMap}
        />
      ))}
    </GoogleMapReact>
  );
}
