import React from 'react';
import Img from '../../components/Img'
import logo from '../../../public/min-logo.png'
import styled from 'styled-components';

const Logo = styled(Img)`
  margin-left: ${props => props.open ? '150px' : '0'};
  @media(max-width: 767px) {
    margin: 0;
  }
`;
const Icon = styled.a`
  color: #666;
  margin: 0 10px 0 0;
  text-align: center;
  &:hover {
    color: #7db9e8;
  }
`;
const SocialMedia = styled.div`
@media(max-width: 767px) {
  width: 10vw;
}
`;
const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 80vw;
  height: 75px;
  padding: 0 10vw;
  background-color: #f0f0f0;
  border-top: 1px solid rgba(0,0,0,.05);
`;
const Footer= (props) => (
  <FooterBox>
    <Logo open={props.open} src={logo} alt='Ministerul Muncii' />
    <SocialMedia>
      <Icon href="https://twitter.com/MMFPSPV" target="_blank" title="twitter"><i className="fa fa-twitter"></i></Icon>
      <Icon href="https://www.facebook.com/Ministerul.Muncii.Romania" target="_blank" title="facebook"><i className="fa fa-facebook"></i></Icon>
      <Icon href="https://github.com/gov-ithub/servicii-sociale" target="_blank" title="github"><i className="fa fa-github"></i></Icon>
    </SocialMedia>
  </FooterBox>
)
export default Footer;
