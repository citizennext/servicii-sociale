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

  const setLat = filterData(props.markers, props.selectedFilters).map(marker => marker.lat)
  const setLng = filterData(props.markers, props.selectedFilters).map(marker => marker.lng)
  const latMed = R.sum(setLat) / setLat.length
  const lngMed = R.sum(setLng) / setLng.length
  const center = R.isEmpty(props.selectedFilters)
    ? { lat: 46.2, lng: 24 }
    : { lat: latMed ? latMed : 46.2, lng: lngMed ? lngMed : 24 }

  return (
    <div>
    <GoogleMap
      zoom={props.zoom}
      ref={props.onMapMounted}
      center={center}
      onZoomChanged={props.onZoomChanged}
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

class Map extends React.Component {
  constructor(props){
    super(props)
    this.handleMapMounted = this.handleMapMounted.bind(this);
    this.handleZoomChanged = this.handleZoomChanged.bind(this);
  }
  handleMapMounted(map) {
    this._map = map;
  }
  handleZoomChanged() {
    const nextZoom = this._map.getZoom();
    if (nextZoom !== this.props.zoom) {
      this.props.setZoom(nextZoom)
    }
  }
  render() {
    return (
      <div>
        <MarkerClustererGoogleMap
          zoom={this.props.zoom}
          selectedFilters={this.props.selectedFilters}
          containerElement={
            <div style={{ marginTop: 54, height: 'calc(100vh - 130px)', width: '100vw' }} />
          }
          mapElement={
            <div style={{ height: 'calc(100vh - 130px)', width: '100vw' }} />
          }
          markers={this.props.markers}
          open={this.props.open}
          onMapMounted={this.handleMapMounted}
          onZoomChanged={this.handleZoomChanged}
          onMarkerClick={this.props.onMarkerClick}
        />
      </div>
    )
  }
}
export default Map;
