import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import withState from 'recompose/withState';
// import mapProps from 'recompose/mapProps';
import withHandlers from 'recompose/withHandlers';
import withPropsOnChange from 'recompose/withPropsOnChange';
import GoogleMapReact from 'google-map-react';
import ClusterMarker from './markers/ClusterMarker';
import SimpleMarker from './markers/SimpleMarker';
import supercluster from 'points-cluster';


export const gMap = ({
  style, hoverDistance, options,
  mapProps: { center, zoom },
  onChange, onChildMouseEnter, onChildMouseLeave,
  clusters,
}) => (
  <GoogleMapReact
    bootstrapURLKeys={{
    key: 'AIzaSyAJVeuCmPnjSS0QGlnSUDVQaBQqbfXEduY',
    language: 'ro'}}
    style={{width:'100vw', height:'100vh'}}
    options={options}
    hoverDistance={hoverDistance}
    center={center}
    zoom={zoom}
    onChange={onChange}
    onChildMouseEnter={onChildMouseEnter}
    onChildMouseLeave={onChildMouseLeave}
  >
    {
      clusters
        .map(({ ...markers, id, numPoints }) => (
          numPoints === 1
            ? <SimpleMarker key={id} {...markers} />
            : <ClusterMarker key={id} {...markers} />
        ))
    }
  </GoogleMapReact>
);

export const gMapHOC = compose(
  defaultProps({
    clusterRadius: 300,
    hoverDistance: 30,
    options: {
      minZoom: 7,
      maxZoom: 15,
    },
    style: {
      position: 'relative',
      margin: 0,
      padding: 0,
      flex: 1,
    },
  }),
  // withState so you could change markers if you want
  // withState(
  //   'markers',
  //   'setMarkers',
  //   {...markers}
  // ),
  withState(
    'hoveredMarkerId',
    'setHoveredMarkerId',
    -1
  ),
  withState(
    'mapProps',
    'setMapProps',
    {
      center: { lat: 46.2, lng: 24 },
      zoom: 7,
    }
  ),
  //describe events
  withHandlers({
    onChange: ({ setMapProps }) => ({ center, zoom, bounds }) => {
      setMapProps({ center, zoom, bounds });
    },

    onChildMouseEnter: ({ setHoveredMarkerId }) => (hoverKey, { id }) => {
      setHoveredMarkerId(id);
    },

    onChildMouseLeave: ({ setHoveredMarkerId }) => (/* hoverKey, childProps */) => {
      setHoveredMarkerId(-1);
    },
  }),
  //precalculate clusters if markers data has changed
  withPropsOnChange(
    ['markers'],
    ({ markers = [], clusterRadius, options: { minZoom, maxZoom } }) => ({
      getCluster: supercluster(
        markers,
        {
          minZoom, // min zoom to generate clusters on
          maxZoom, // max zoom level to cluster the points on
          radius: clusterRadius, // cluster radius in pixels
        }
      ),
    })
  ),
  //get clusters specific for current bounds and zoom
  withPropsOnChange(
    ['mapProps', 'getCluster'],
    ({ mapProps, getCluster }) => ({
      clusters: mapProps.bounds
        ? getCluster(mapProps)
          .map(({ wx, wy, numPoints, points }) => ({
            lat: wy,
            lng: wx,
            text: numPoints,
            numPoints,
            id: `${numPoints}_${points[0].id}`,
          }))
        : [],
    })
  ),
  //set hovered
  withPropsOnChange(
    ['clusters', 'hoveredMarkerId'],
    ({ clusters, hoveredMarkerId }) => ({
      clusters: clusters
        .map(({ ...cluster, id }) => ({
          ...cluster,
          hovered: id === hoveredMarkerId,
        })),
    })
  ),
);

export default gMapHOC(gMap);
