import React from 'react';
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
const OverlayBar = styled.div`
  position: fixed;
  top: 0;
  z-index: 1201;
  height: 54px;
  width:100vw;
  background-color: rgba(255, 255, 255, 0.9);
`;
const Map = styled.div`
  margin-top: 54px;
  height: calc(60vh - 129px);
  width: 100vw;
  z-index: 100
`;
const DetailsCard = styled.div`
  z-index: 1200;
  min-height: 40vh;
  background-color: #37b8d4;
`;
const Over = styled(Paper)`
  width: 60vw;
  margin-top: -10vh;
  margin-bottom: 20px;
  background-color: #ffffff;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  display: flex;
  z-index: 11111!important;
  font-size: 14px;
  overflow: hidden;
  @media(max-width: 767px) {
    flex-direction: column;
    font-size: 13px;
    width: 90vw;
  }
`;
const Third = styled.div`
  width: 20vw;
  padding: 2em;
  min-height: 40vh;
  position: relative;
  background-color: ${props => props.gray ? '#666666' : '#ffffff'};
  color: ${props => props.gray ? '#ffffff' : '#666666'};
  @media(max-width: 767px) {
    width: auto;
  }
`;
const TwoThirds = styled.div`
  width: 40vw;
  padding: 2em;
  background-color: ${props => props.gray ? '#666666' : '#ffffff'};
  @media(max-width: 767px) {
    width: auto;
  }
`;
const List = styled.ul`
  padding: 0 0 10px 0px;
  list-style: none;
`;
const Bullet = styled.li`
  padding-bottom: 5px;
  &:before {
    background-color: #37b8d4;
    content: "";
    line-height: 1em;
    width: .5em;
    height: .5em;
    float: left;
    margin: .25em .5em 0 .25em;
    border-radius: 50%;
  }
`;
const Points = styled.div`
  height: 45px;
  width: 100%;

`;
const PointsText = styled.div`
  padding-left: 30px;
  line-height: 1.3em;
  text-overflow: ${props => props.email ? 'ellipsis;' : 'none'};

`;
const Cap = styled.div`
  width: 78%;
  margin: 80px auto 0 auto;
  text-align: center;
  text-transform: uppercase;
  color: #cccccc;
  font-weight: 18px;
  @media(max-width: 767px) {
    margin: 0 auto;
  }
`;
const Organisation = styled.h2`
  color: #37b8d4;
  font-size: 24px;
  font-weight: 100;
  margin-top: 0px;
`;
const Provider = styled.div`
  color: #666666;
  font-size: 18px;
  font-weight: 400;
`;
const Services = styled.div`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 30px;
`;
const styles = {
  icon:{
    color: '#ffcc00',
    width: 30,
    float:'left',
    paddingTop: 0,
    fontSize: 18
  }
}
const phoneNumbers = (number) => {
  return `0${number}`
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
          onTouchTap={props.handleBack}
          style={props.open ? {marginLeft:322,marginTop:8,color:'#333333'} : {marginLeft:64,marginTop:8, color:'#333333'}}
          icon={<NavigationArrowBack color='#333333' />}
        />
      </OverlayBar>
      <Map>
        <SingleMap marker={marker} zoom={14}/>
      </Map>
      <DetailsCard>
        <Over zDepth={2}>
          <Third gray>
            <Points><i style={styles.icon} className="fa fa-map-marker"></i><PointsText>{marker.adresa}, {marker.oras}, {marker.jud}</PointsText></Points>
            <Points><i style={styles.icon} className="fa fa-phone"></i><PointsText>
              {marker.phone ? phoneNumbers(marker.phone) : null}</PointsText></Points>
            <Points email><i style={styles.icon} className="fa fa-envelope"></i><PointsText email><a href={`mailto:${marker.email}`} style={{color: '#ffffff', textDecoration: 'none'}}>{marker.email}</a></PointsText></Points>
            <Cap><span style={{fontSize:72, fontWeight: 700, clear:'both', display:'block', color: '#ffffff'}}>{marker.capacitate ? marker.capacitate : "?"}</span> capacitate</Cap>
          </Third>
          <TwoThirds>
            <Organisation>{marker.name}</Organisation>
            <Provider>{marker.furnizor}</Provider>
            <Services>Servicii</Services>
            <List>
              {services !== null
                ? services.servicii.map((service, i) => {
                  return (
                    <Bullet key={i}>{service}</Bullet>
                  )
                })
                : <Bullet>Acest centru nu are inca listate serviciile oferite</Bullet>
              }
            </List>
          </TwoThirds>
        </Over>
      </DetailsCard>
    </Container>
  )
};
export default Details;
