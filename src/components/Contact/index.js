import React from 'react';
import { browserHistory } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import styled from 'styled-components';
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 75px);
  width: calc(100vw - 312px);
  padding-left: 312px;
  @media(max-width: 767px) {
    padding: 20px;
    width: calc(100vw - 40px);
  }
`;
const OverlayBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1201;
  height: 54px;
  width:100vw;
  background-color: rgba(255, 255, 255, 0.9);
`;
const Contact = (props) => {
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
      <div className="paper-faq" style={{minHeight: '100%', marginTop: '54px', maxWidth: '100vw'}}>
        <h2>Contact</h2>

				<Card className="faq-card">
				    <CardHeader title="Ministerul Muncii, Familiei, Protecţiei Sociale și Persoanelor Vârstnice" className="faq-title"/>
				    <CardText className="faq-content">
							<p><strong>Adresă:</strong> str. Dem.I.Dobrescu nr.2 - 4 sectorul 1 Bucureşti, cod poștal 010026</p>
			        <p><strong>Adresă web:</strong> http://www.mmuncii.gov.ro</p>
			        <p><strong>Adresă email:</strong>   acreditare@mmuncii.gov.ro</p>
			        <p><strong>Telefon centrală:</strong> 021.315.85.56</p>
				    </CardText>
				</Card>

				<Card className="faq-card">
				    <CardHeader title="Programul de funcționare al instituței" className="faq-title"/>
				    <CardText className="faq-content">
							<p><strong>Luni - Joi:</strong> 08.00 - 16.30</p>
			        <p><strong>Vineri:</strong> 08.00 - 14.00</p>
							<p>
			        <Icon href="https://twitter.com/MMFPSPV" target="_blank" title="twitter"><i className="fa fa-twitter"></i></Icon>
							<Icon href="https://www.facebook.com/Ministerul.Muncii.Romania" target="_blank" title="twitter"><i className="fa fa-facebook"></i></Icon>
			        <Icon href="https://www.youtube.com/channel/UC7Vj9DEdNhlkCl4-4r4VPPQ" target="_blank" title="twitter"><i className="fa fa-youtube"></i></Icon>
							</p>
				    </CardText>
				</Card>

      </div>
    </Container>
  )
};
export default Contact;
