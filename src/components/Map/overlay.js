import React from 'react';
import styled from 'styled-components';

const OverlayBar = styled.div`
  position: fixed;
  top: 0;
  z-index: 1201;
  height: 34px;
  padding: 10px;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.6);
  overflow: hidden;
`;
const Title = styled.div`
  font-weight:100;
  font-size: 2em;
  color: #333;
  text-align: center;
  width: 100%;
  overflow: hidden;
  @media(max-width: 767px) {
    font-size: 1.2em;
    text-align: left;
    padding-top: 0px;
    line-height: 1.7em;
  }
`;
const Overlay = (props) => {
  return (
      <OverlayBar>
        <div style={props.open ? {paddingLeft:312,marginTop:3} : {paddingLeft:54,marginTop:3}}>
          <Title><span className="count">{props.count}</span> servicii licențiate</Title>
        </div>
      </OverlayBar>
  )
};
export default Overlay;
