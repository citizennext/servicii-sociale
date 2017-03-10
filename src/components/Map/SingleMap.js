import React from 'react';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import GoogleMap from 'react-google-maps/lib/GoogleMap';
import Marker from 'react-google-maps/lib/Marker';

const SimpleMapExample = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={{
      lat: parseFloat(props.marker.lat),
      lng: parseFloat(props.marker.lng)
    }}>
    <Marker
      position={{
        lat: parseFloat(props.marker.lat),
        lng: parseFloat(props.marker.lng)
      }}
    />
  </GoogleMap>
));

const SingleMap = props => (
  <SimpleMapExample
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    marker={props.marker}
    zoom={props.zoom}
  />
);
export default SingleMap;
