
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker  } from '@react-google-maps/api';

const containerStyle = {
  width: '43vw',
  height: '24vw'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBZwXe-8jwfvBwSR4ZfngFJ7NfqXF91IPI"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        // center={{ lat: props.lat, lng: props.long}}
        initialCenter={{ lat: props.lat, lng: props.long}}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        <Marker position={{ lat: props.lat, lng: props.long}} />
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)