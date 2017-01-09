import React from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

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
const StyledPaper = styled(Paper)`
  margin-top: 54px;
  width:600px;
  padding: 40px;
  @media(max-width: 767px) {
    padding: 20px;
    width: calc(100vw - 40px);
  }
`;
const Title = styled.h1`
  color: #37b8d4;
  font-size: 110px;
  width: 100%;
  font-weight: 100;
  margin-top: 0px;
`;
const Pagina = styled.span`
  color: #ffcc00;
  font-size: 22px;
  font-weight: 400;
  border-bottom: solid 3px #ffcc00;
`;
const NotFound = (props) => {
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
      <div style={{minHeight: '100%', marginTop: '54px', maxWidth: '100vw'}}>
        <StyledPaper>
          <Title>Hopa!</Title>
          <p>Pagina <Pagina>{props.location.pathname}</Pagina> nu se gaseste pe situl nostru. Poate la alt minister.</p>
          <p>La noi ai putea eventual cauta:</p>
          <p><Link to="/acreditare">Pagina cu informatii despre acreditare</Link></p>
          <p><Link to="/contact">Pagina de contact</Link></p>
          <p><Link to="/statistici">Pagina cu statistici</Link></p>
          <p><Link to="/info">Pagina de informatii generale</Link></p>
          <p><Link to="/ajuto">Pagina de intrebari frecvente</Link></p>
        </StyledPaper>
      </div>
    </Container>
  )
}
export default NotFound
