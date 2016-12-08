import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton'
const OverlayBar = styled.div`
  position: fixed;
  top: 0;
  z-index: 1201;
  height: 34px;
  padding: 10px;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.9);
  overflow: hidden;
`;
const Title = styled.div`
  font-weight:100;
  font-size: 2em;
  line-height: 1em;
  color: #333;
  text-align: center;
  width: auto;
  overflow: hidden;
  float:left;
  position:relative;
  @media(max-width: 767px) {
    font-size: 1em;
    text-align: left;
    padding-top: 0px;
    line-height: 1.9em;
  }
`;
const Overlay = (props) => {
  return (
      <OverlayBar>
        <div style={props.open ? {paddingLeft:312,marginTop:3} : {paddingLeft:54,marginTop:3}}>
          <Title><span className="count">{props.count}</span> servicii licențiate</Title>
          <RaisedButton
            label="Statistici"
            primary={true}
            containerElement={<Link to="/statistici" />}
            style={{float:'right', marginTop:-4, marginRight:18}}
            />
        </div>
      </OverlayBar>
  )
};
export default Overlay;
