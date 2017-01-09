import React from 'react'
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ChartHomeless from './ChartHomeless.js'
import BarChartChildren from './ChartChildren.js'
import PieChartRatio from './ChartRatio.js'

import total from './infographics/total.gif'
import providers from './infographics/furnizori.gif'
import services from './infographics/service.gif'
import ratio from './infographics/ratio.gif'
import homeless from './infographics/homeless.gif'
import children from './infographics/children.gif'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 75px);
  width: calc(100vw - 340px);
  padding-left: 312px;
  padding-right: 28px;
  @media(max-width: 767px) {
    padding: 20px;
    width: calc(100vw - 40px);
  }
`;
const OverlayBar = styled.div`
  position: fixed;
  top: 0;
  left:0;
  z-index: 1201;
  height: 54px;
  width:100vw;
  background-color: rgba(255, 255, 255, 0.9);
`;
const CardResponsive = styled(Card)`
  width:320px;
  margin: 20px 20px 20px 0;
  @media(max-width: 767px) {
    margin-right:0;
  }
`;

const CardTotals = () => (
  <CardResponsive>
    <CardMedia>
      <img src={total} alt="Total Servicii Sociale Licențiate" />
    </CardMedia>
    <CardTitle title="Servicii sociale licențiate" subtitle="România, Decembrie 2016" />
    <CardText>
      <superscript>*</superscript> în perioada următoare vom completa harta cu toate înregistrările
    </CardText>
  </CardResponsive>
);
const CardProviders = () => (
  <CardResponsive>
    <CardMedia>
      <img src={providers} alt="Furnizori acreditați" />
    </CardMedia>
    <CardTitle title="Furnizori acreditați" subtitle="Ianuarie - Decembrie 2016" />
    <CardText>
      <superscript>*</superscript> din totalul de 2.947
    </CardText>
  </CardResponsive>
);
const CardServices = () => (
  <CardResponsive>
    <CardMedia>
      <img src={services} alt="Servicii sociale licențiate" />
    </CardMedia>
    <CardTitle title="Servicii sociale licențiate" subtitle="Ianuarie - Decembrie 2016" />
    <CardText>
      <superscript>*</superscript> din totalul de 2.550
    </CardText>
  </CardResponsive>
);
const CardRatio = () => (
  <CardResponsive>
    <CardMedia>
      <img src={ratio} alt="Raportul serviciilor sociale licențiate" />
    </CardMedia>
    <CardTitle title="Raportul serviciilor sociale licențiate" subtitle="Servicii publice / Servicii private" />
    <CardText>
      <PieChartRatio />
      <superscript>*</superscript> Decembrie 2016
    </CardText>
  </CardResponsive>
);
const CardHomeless = () => (
  <CardResponsive>
    <CardMedia>
      <img src={homeless} alt="Servicii pentru persoane fără adăpost" />
    </CardMedia>
    <CardTitle title="Servicii pentru persoane fără adăpost" subtitle="Total centre / Locuri capacitate" />
    <CardText>
      <ChartHomeless />
      <superscript>*</superscript> cate 2 centre în Alba, Bacău, Caraș Severin și Harghita <br />1 centru în Arad, Bihor, Brașov, București, Covasna, Dolj, Dâmbovița, Galați, Hunedoara, Iași, Mureș, Sibiu si Teleorman
    </CardText>
  </CardResponsive>
);
const CardChildren = () => (
  <CardResponsive>
    <CardMedia>
      <img src={children} alt="Servicii pentru copii" />
    </CardMedia>
    <CardTitle title="Servicii pentru copii" subtitle="Total centre / Locuri capacitate" />
    <CardText>
      <BarChartChildren />
      <superscript>*</superscript> în 41 de județe exista cel puțin un centru care oferă servicii pentru copii
    </CardText>
  </CardResponsive>
);

const About = (props) => {
  // const copii = props.markers.filter(marker => marker.categorie.indexOf("B1") >= 0)
  // const markersPerDistricts = copii.reduce((a,b) => { a.sum += parseInt(b.capacitate, 10) || 0; a[b.jud] = (a[b.jud] || 0) + parseInt(b.capacitate || 0, 10); return a }, {sum: 0})
  // const markersPerDistrictsJud = copii.reduce((a,b) => { a[b.jud] = (a[b.jud] || 0) + 1; return a }, {})
  //
  // console.log(markersPerDistricts, markersPerDistrictsJud);
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
      <div style={{minHeight: '100%', marginTop: '54px', maxWidth: '100vw', display:'flex', flexWrap: 'wrap'}}>
        <h2>Analiza harții serviciilor sociale</h2>
        <CardTotals />
        <CardProviders />
        <CardServices />
        <CardRatio />
        <CardHomeless />
        <CardChildren />
      </div>
    </Container>
  )
}



export default About
