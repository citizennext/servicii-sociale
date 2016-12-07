import React from 'react'
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import infografic from '../../../public/infografic.png'
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
  background-color: rgba(255, 255, 255, 0.6);
`;
const Infografic = styled.img`
  margin-top: 30px;
  width: calc(100vw - 340px);
  @media(max-width: 767px) {
    width: calc(100vw - 40px);
  }
`;
const Certification = (props) => {

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
      <div style={{minHeight: '100%', marginTop: '54px', maxWidth: '100vw'}}>
        <h2>Procedura de acreditare</h2>

        <p>Ministerul Muncii, Familiei, Protecției Sociale și Persoanelor Vârstnice împreună cu autoritățile din subordine, Autoritatea Națională pentru Protecția Drepturilor Copilului și Adopție (ANPDCA), Agenția Națională pentru Egalitate de Șanse între Femei și Bărbați (ANES) și Autoritatea Națională pentru Persoanele cu Dizabilități (ANPD) acordă licențe de funcționare sau provizorii pentru serviciile sociale din domeniul propriu de activitate. </p>
        <p>
          Cadrul procedural unitar este dat de <a href="http://www.mmuncii.ro/j33/images/Documente/Familie/DGAS/Acreditare/L197_2012.pdf" target="_blank" >Legea nr. 197/2012</a> privind asigurarea calității în domeniul serviciilor sociale, de <a href="http://www.mmuncii.ro/j33/images/Documente/Familie/DGAS/Acreditare/HG_118_2014actual2016.pdf" target="_blank">HG nr. 118/2014</a> și de <a href="http://www.mmuncii.ro/j33/images/Documente/Familie/DGAS/Acreditare/HG_584_2016.pdf" target="_blank">HG nr. 584/2016</a>.
        </p>
        <p>În prezent sunt 2.550 de servicii sociale licențiate și 2.947 de furnizori licențiați. De la începutul anului 2016 au fost licențiate 1.477 de noi servicii.</p>
        <p>Din cele 2550 de servicii licențiate, 1396 sunt publice și 1154 sunt private. </p>
        <h3>Ministerul Muncii este punctul unic de contact pentru depunerea cererilor.</h3>
        <p>Furnizorii de servicii sociale (publici sau privați) depun cererile la Ministerul Muncii, ca punct unic de contact, urmând ca cele 3 instituții subordonate să acorde licențele de funcționare sau provizorii astfel: ANPDCA pentru serviciile sociale acordate copiilor, ANPD pentru cele destinate persoanelor cu dizabilități, ANES în cazul victimelor violenței domestice, iar Ministerul Muncii pentru serviciile sociale acordate persoanelor vârstnice și altor categorii de beneficiari.</p>

        <p>Întregul cadru normativ legat de procedura de acreditare poate fi accesat <a href="http://www.mmuncii.ro/j33/index.php/ro/2014-domenii/familie/politici-familiale-incluziune-si-asistenta-sociala/3222" target="_blank">prin acest link</a>. </p>
        <h3>Infografic proces de acreditare</h3>
        <Infografic src={infografic} alt="Infografic proces de acreditare" />
      </div>
    </Container>
  )
}



export default Certification
