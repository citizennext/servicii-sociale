import React from 'react';
import { withGoogleMap, GoogleMap, Marker,  } from "react-google-maps";
// import { } from 'react-google-maps/lib'
import R from 'ramda'
import './contact.css'
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
  return (

  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={{ lat: 46.2, lng: 24 }}
    onMarkerClick={props.onMarkerClick}>
    {/* <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}> */}
        {filterData(props.markers, props.selectedFilters).map(
          (marker, id) => (
            <Marker
              position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
              key={id}
              onClick={() => props.onMarkerClick(marker, id)}
            />
          ))
        }
        {/* </MarkerClusterer> */}
  </GoogleMap>
)}
)


const Map = (props) => (
  <div>
    <MarkerClustererGoogleMap
      zoom={props.zoom}
      selectedFilters={props.selectedFilters}
      containerElement={
        <div style={{ height: 'calc(100vh-75px)', width: '100vw' }} />
      }
      mapElement={
        <div style={{ height: '91vh', width: '100vw' }} />
      }
      markers={props.markers}
      onMarkerClick={props.onMarkerClick}
    />
    <Overlay />
  </div>
)
export default Map
