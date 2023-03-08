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
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
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
                url: `${window.location.origin}`+ `/images/resource/pin-startwork.png`
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
