import React from 'react';
import { browserHistory } from 'react-router';
import SingleMap from '../Map/SingleMap';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 129px);
  width: 100vw;
`;
const DetailsCard = styled.div`
  z-index: 1200;
  min-height: 50vh;
  background-color: #37b8d4;
`;
const OverlayBar = styled.div`
  position: fixed;
  top: 0;
  z-index: 1201;
  height: 54px;
  width:100vw;
  background-color: rgba(255, 255, 255, 0.6);
`;
const Over = styled(Paper)`
  width: 75vw;
  margin-top: -100px;
  margin-bottom: 20px;
  background-color: #ffffff;
  margin-right: auto;
  margin-left: auto;
  padding: 40px;
  position: relative;
  z-index: 11111!important;
  font-size: 13px;
  overflow: hidden;
`;
const Map = styled.div`
  margin-top: 54px;
  height: 40vh;
  width: 100vw;
  z-index: 100
`;
const Half = styled.div`
  width: 48%;
  margin-right: ${props => props.last ? '0' : '4%'};
  float: left;
  display: block;
  @media(max-width: 767px) {
    width: 100%;
    margin-right: 0
  }
`;
const styles = {
  icon:{
    color: '#37b8d4',
    width: 20
  },
  chip:{
    position:'absolute',
    right:10,
    top:10
  }
}
const Details = (props) => {
  const marker = props.markers
    .find(marker => marker.id === parseFloat(props.params.id))
  const services = (marker.cod !== "")
    ? props.servicii.find(service => service.cod === marker.cod)
    : null
  return (
    <Container>
      <OverlayBar>
        <FlatButton
          label="Inapoi"
          primary={true}
          onTouchTap={browserHistory.goBack}
          style={props.open ? {marginLeft:322,marginTop:8,color:'#333333'} : {marginLeft:64,marginTop:8, color:'#333333'}}
          icon={<NavigationArrowBack color='#333333' />}
        />
      </OverlayBar>
      <Map>
        <SingleMap marker={marker}/>
      </Map>
      <DetailsCard>
        <Over zDepth={2}>
          <Half>
            <h2>{marker.name}</h2>
            <strong>{marker.furnizor}</strong>
            <p><i style={styles.icon} className="fa fa-map-marker"></i> {marker.adresa}, {marker.oras}, {marker.jud}</p>
            <p><i style={styles.icon} className="fa fa-phone"></i> {marker.phone}</p>
            <p><i style={styles.icon} className="fa fa-envelope"></i> <a href={`mailto:${marker.email}`}>{marker.email}</a></p>
            <p><i style={styles.icon} className="fa fa-users"></i> <span style={{fontSize:18}}>{marker.capacitate ? marker.capacitate : "?"}</span> locuri disponibile</p>
          </Half>
          <Half last>
            <h3>Servicii</h3>
            <ul>
              {services !== null
                ? services.servicii.map((service, i) => {
                  return (
                    <li key={i}>{service}</li>
                  )
                })
                : <li>Acest centru nu are inca listate serviciile oferite</li>
              }
            </ul>
          </Half>
        </Over>
      </DetailsCard>
    </Container>
  )
};
export default Details;
