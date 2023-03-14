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
const map_key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const ITALY_BOUNDS = {
  north: 47.1153931748,
  south: 36.619987291,
  west: 6.7499552751,
  east: 18.4802470232,
};
const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
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
  border: " 0px solid #fff !important",
  borderRadius: "10px",
  transform: "translate(-50%, -100%)",
};
const containerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};

export default function SimpleMap({ dataCL, elementOnHover }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: map_key, // ,
    // ...otherOptions
  });

  const defaultProps = {
    center: {
      lat: 41.902783,
      lng: 12.496366,
    },
    zoom: 6,
  };

  const [mapRestriction, setMapRescriction] = useState(null);
  const [places, setPlaces] = useState([]);
  const [propsMap, setPropsMap] = useState(defaultProps);
  const [map, setMap] = useState(null);

  const getAvailableLocations = (dataCL) => {
    const locations = dataCL.map((data) => {
      return {
        id: data._id,
        publicName: data.publicName,
        skills: data.skills,
        mansione: data.mansione,
        lat: data.location.lat,
        category: data.category,
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
          let validCoordinates = checkCoordinates(location.lat, location.lng);
          if (!element.active && validCoordinates) {
            location.active = true;
            setPropsMap({
              center: validCoordinates,
              zoom: 10,
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

  const onLoadMap = async (map) => {
    setMap(map);
    const bounds = new window.google.maps.LatLngBounds();
    places.map((item) => {
      let validCoordinates = checkCoordinates(item.lat, item.lng);
      if (validCoordinates) {
        bounds.extend(validCoordinates);
      }
    });
    map.fitBounds(bounds);
  };

  const checkCoordinates = (lat, lng, active = true) => {
    let bound = {
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    };
    if (!active) return false;
    if (!isNaN(bound.lat) && !isNaN(bound.lng)) return bound;
    else return false;
  };

  const renderMap = (propsMap, places) => {
    return (
      <GoogleMap
        key="map-search-candidate"
        onLoad={onLoadMap}
        options={{
          styles: mapStyle,
          streetViewControl: false,
          disableDefaultUI: false,
          restriction: {
            latLngBounds: ITALY_BOUNDS,
            strictBounds: false,
          },
          minZoom: 6,
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
                url:
                  `${window.location.origin}` +
                  `/images/resource/pin-startwork.png`,
              }}
              onClick={() => handleActiveElement(place)}
              onLoad={(marker) => {}}
            />
            {checkCoordinates(place.lat, place.lng, place.active) !== false ? (
              <InfoWindow
                options={{ pixelOffset: new window.google.maps.Size(0, -70) }}
                key={"map-infowindow-marker-" + place.publicName}
                position={{
                  lat: parseFloat(place.lat),
                  lng: parseFloat(place.lng),
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

  return isLoaded ? (
    renderMap(propsMap, places)
  ) : (
    <Loader key="map-search-candidate-loader"></Loader>
  );
}
