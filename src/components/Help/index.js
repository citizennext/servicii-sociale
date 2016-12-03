import React from 'react';
import { browserHistory } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 75px);
  width: 100vw;
  padding-left: 312px;
`;
const OverlayBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1201;
  height: 54px;
  width:100vw;
  background-color: rgba(255, 255, 255, 0.6);
`;
const Help = (props) => {
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
      <div style={{minHeight: '100%', marginTop: '54px', width: '100vw'}}>
        <h2>Ajutor</h2>
        Cautati folosind filtrele... <br />
        Incepeti sa tastati si optiunile se vor actualiza.
      </div>
    </Container>
  )
};
export default Help;
