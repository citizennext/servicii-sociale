import React from 'react';
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import GoogleMap from "react-google-maps/lib/GoogleMap";
import Marker from "react-google-maps/lib/Marker";
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer';
import R from 'ramda';
import Overlay from './overlay';

const MarkerClustererGoogleMap = withGoogleMap(props => {
  const filterData = (markers, selectedFilters) => {
    const activeFilterKeys = R.keys(R.filter(R.identity, R.dissoc('categorie', selectedFilters)))

    const filterInType = d => !selectedFilters.categorie || d.categorie.indexOf(selectedFilters.categorie) >= 0
    return R.compose(
      R.filter(filterInType),
      R.filter(
        d => R.equals(
          R.pick(activeFilterKeys, d),
          R.pick(activeFilterKeys, selectedFilters)
        )
      ))(markers)
  }
  const count = R.isEmpty(props.selectedFilters)
    ? props.markers.length
    : filterData(props.markers, props.selectedFilters).length

  return (
    <div>
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={{ lat: 46.2, lng: 24 }}
      onMarkerClick={props.onMarkerClick}>
      { R.isEmpty(props.selectedFilters)
        ? <MarkerClusterer
          averageCenter
          enableRetinaIcons
          gridSize={60}>
          {filterData(props.markers, props.selectedFilters).map(
            (marker) => (
              <Marker
                position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
                key={marker.id}
                onClick={() => props.onMarkerClick(marker, marker.id)}
              />
            ))
          }
        </MarkerClusterer>
        : filterData(props.markers, props.selectedFilters).map(
          (marker) => (
            <Marker
              position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
              key={marker.id}
              onClick={() => props.onMarkerClick(marker, marker.id)}
            />
          ))
      }
    </GoogleMap>
    <Overlay open={props.open} count={count}/>
  </div>
  )}
)

const Map = (props) => {
  return (
    <div>
      <MarkerClustererGoogleMap
        zoom={props.zoom}
        selectedFilters={props.selectedFilters}
        containerElement={
          <div style={{ marginTop: 54, height: 'calc(100vh - 129px)', width: '100vw' }} />
        }
        mapElement={
          <div style={{ height: 'calc(100vh - 129px)', width: '100vw' }} />
        }
        markers={props.markers}
        open={props.open}
        onMarkerClick={props.onMarkerClick}
      />
    </div>
  )
};
export default Map;
