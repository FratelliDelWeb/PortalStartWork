import React from "react";
import { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Info from "./InfoWindow";
import Loader from "../../loader/Loader";

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8ec3b9",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1a3646",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4b6878",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#64779e",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4b6878",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#334e87",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#023e58",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#283d6a",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6f9ba5",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#023e58",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3C7680",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#304a7d",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#98a5be",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#2c6675",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#255763",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#b0d5ce",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#023e58",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#98a5be",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#283d6a",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#3a4762",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#0e1626",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#4e6d70",
      },
    ],
  },
];

const markerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "18px",
  height: "18px",
  backgroundColor: "#000",
  border: " 2px solid #fff !important",
  borderRadius: "100%",
  transform: "translate(-50%, -100%)",
};

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};

export default function SimpleMap({ dataCL, elementOnHover }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA5drS5V0FiTdpd9XqLPlr7cEaFF55Pevo", // ,
    // ...otherOptions
  });

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
        icon: data.avatar,
      };
    });
    return locations;
  };

  const setActiveElement = (element) => {
    const locations = getAvailableLocations(dataCL);
    locations.find((location) => {
      if (element !== null) {
        var id = element._id || element.id;
        if (id === location.id) {
          if (!element.active) {
            location.active = true;
            setPropsMap({
              center: {
                lat: parseFloat(location.lat),
                lng: parseFloat(location.lng),
              },
              zoom: 8,
            });
          } else {
            location.active = false;
          }
        }
      }
    });
    setPlaces(locations);
  };

  useEffect(() => {
    console.log("dataCL", dataCL);
    const locations = getAvailableLocations(dataCL);
    setPlaces(locations);
  }, []);

  useEffect(() => {
    setActiveElement(elementOnHover);
  }, [elementOnHover]);

  const handleActiveElement = (element) => {
    setActiveElement(element);
  };

  const renderMap = (propsMap, places) => {
    return (
      <GoogleMap
        options={{
          styles: mapStyle,
          streetViewControl: false,
          disableDefaultUI: false,
        }}
        mapContainerStyle={containerStyle}
        center={propsMap.center}
        zoom={propsMap.zoom}
      >
        {places.map((place) => (
          <>
            <Marker
              animation={window.google.maps.Animation.DROP}
              key={"map-marker-" + place.publicName}
              position={{
                lat: parseFloat(place.lat) || 0,
                lng: parseFloat(place.lng) || 0,
              }}
              icon={{
                url: window.location.origin + place.icon + "#custom_markers",
              }}
              onClick={() => handleActiveElement(place)}
              onLoad={(marker) => {}}
            />
            {place.active ? (
              <InfoWindow
                options={{ pixelOffset: new window.google.maps.Size(0, -70) }}
                key={"map-infowindow-marker-" + place.publicName}
                position={{
                  lat: parseFloat(place.lat) || 0,
                  lng: parseFloat(place.lng) || 0,
                }}
                onCloseClick={() => handleActiveElement(null)}
              >
                <Info
                  key={"map-info-marker-" + place.publicName}
                  dataCL={place}
                />
              </InfoWindow>
            ) : null}
          </>
        ))}
      </GoogleMap>
    );
  };

  return isLoaded ? renderMap(propsMap, places) : <Loader></Loader>;
}
