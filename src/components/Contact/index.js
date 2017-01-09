import React from 'react';
import SingleMap from '../Map/SingleMap';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import styled from 'styled-components';
import logo from './logo-white.png'
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
const Points = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 20px;
`;
const PointsText = styled.div`
  padding-left: 30px;
  line-height: 1.3em;
  text-overflow: ${props => props.email ? 'ellipsis;' : 'none'};

`;
const LogoWhite = styled.img`
  width: 100%;
  margin: 50px auto 0 auto;
`;
const Organisation = styled.h2`
  color: #37b8d4;
  font-size: 24px;
  font-weight: 100;
  margin-top: 0px;
`;
const Icon = styled.a`
  color: #666;
  margin: 0 10px 0 0;
  text-align: center;
  border: none;
  &:hover {
    color: #7db9e8;
    border: none;
  }
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
const Contact = (props) => {
  const marker = {
      "id": 1,
      "name": "Ministerul Muncii, Familiei, Protecţiei Sociale și Persoanelor Vârstnice",
      "furnizor": "Asociaţia Izvorul Tămăduirii Alba",
      "adresa": "Str. Dem.I.Dobrescu nr. 2 - 4, Sectorul 1",
      "oras": "Bucureşti",
      "cod": "cod poștal 010026",
      "web": "http://www.mmuncii.gov.ro",
      "email": "acreditare@mmuncii.ro",
      "phone": "021.315.85.56",
      "lat": "44.439193",
      "lng": "26.098499"
    }
  return (
    <Container>
      <OverlayBar>
        <FlatButton
          label="Inapoi"
          primary={true}
          onTouchTap={props.pageBack}
          style={props.open ? {marginLeft:322,marginTop:8,color:'#333333'} : {marginLeft:64,marginTop:8, color:'#333333'}}
          icon={<NavigationArrowBack color='#333333' />}
        />
      </OverlayBar>
      <Map>
        <SingleMap marker={marker} zoom={18}/>
      </Map>
      <DetailsCard>
        <Over zDepth={2}>
          <Third gray>
            <Points><i style={styles.icon} className="fa fa-map-marker"></i><PointsText>{marker.adresa}, {marker.oras}, {marker.cod}</PointsText></Points>
            <Points><i style={styles.icon} className="fa fa-phone"></i><PointsText>
              {marker.phone}</PointsText></Points>
            <Points><i style={styles.icon} className="fa fa-globe"></i><PointsText>
              <a href={marker.web} style={{color: '#ffffff', textDecoration: 'none'}}>{marker.web}</a></PointsText></Points>
            <Points email><i style={styles.icon} className="fa fa-envelope"></i><PointsText email><a href={`mailto:${marker.email}`} style={{color: '#ffffff', textDecoration: 'none'}}>{marker.email}</a></PointsText></Points>
            <LogoWhite src={logo} alt="Ministerul Muncii"/>
          </Third>
          <TwoThirds>
            <Organisation>Programul de funcționare al instituței:</Organisation>
            <p><strong>Luni - Joi:</strong> 08.00 - 16.30</p>
            <p><strong>Vineri:</strong> 08.00 - 14.00</p>
            <Icon href="https://www.facebook.com/Ministerul.Muncii.Romania" target="_blank" title="twitter"><i className="fa fa-facebook"></i></Icon>
            <Icon href="https://twitter.com/MMFPSPV" target="_blank" title="twitter"><i className="fa fa-twitter"></i></Icon>
            <Icon href="https://www.youtube.com/channel/UC7Vj9DEdNhlkCl4-4r4VPPQ" target="_blank" title="twitter"><i className="fa fa-youtube"></i></Icon>
          </TwoThirds>
        </Over>
      </DetailsCard>
    </Container>
  )
};
export default Contact;
