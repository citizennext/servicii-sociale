import React from 'react'
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

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

const Info = (props) => {

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
        <h2>Informatii Generale</h2>
        <p><a href="http://mmuncii.ro" target="_blank" rel="noopener" title="Ministerul Muncii">Ministerul Muncii</a> și <a href="http://ithub.gov.ro" target="_blank" rel="noopener" title="GovItHub">GovItHub</a> au dezvoltat Harta Serviciilor Sociale Licențiate, o platformă care integrează toate serviciile specifice fiecărei categorii de grup vulnerabil (copii, persoane cu dizabilități, persoane vârstnice etc.), disponibile la nivel județean și național.</p>
        <p>Harta oferă o imagine de ansamblu a serviciilor sociale pe care atât instituțiile publice, cât și cele private le oferă diferitelor categorii de grupuri vulnerabile, precum și statistici și informații despre fiecare serviciu în parte.</p>
        <p>Această platformă este un instrument util în a identifica centrele rezidențiale și de zi, precum și celelalte forme de serviciile sociale specifice fiecărei categorii de grup vulnerabil. Fiecărui serviciu social în parte îi sunt prezentate datele de contact, adresa, furnizorul acreditat de care aparține, activitățile pe care le desfășoară, dar și capacitatea de care dispune.</p>
        <p>În România, sunt licentiate în prezent <strong>2.550</strong> de servicii sociale și <strong>2.947</strong> de furnizori acreditați. Din totalul serviciilor licențiate, <strong>1.396</strong> sunt publice și <strong>1.154</strong>, private. De la începutul anului 2016 au fost licențiate <strong>1.477</strong> de servicii noi.</p>
        <p>Toate aceste servicii sociale, acordate de furnizori acreditați, se regăsesc în Harta Serviciilor Sociale Licențiate, dezvoltată cu ajutorul GovItHub și gestionată de Ministerul Muncii.</p>
        <p>Utilizatorii pot contribui la acuratețea datelor prezentate pe <a href="http://harta-furnizori.mmuncii.ro">harta-furnizori.mmuncii.ro</a> și pot trimite observații și propuneri de îmbunătățire a platformei la adresa de email <a href="mailto:acreditare@mmuncii.ro">acreditare@mmuncii.ro</a>.</p>

        <h3>Descarca lista serviciilor sociale licențiate</h3>
        <p>Tabelul cu toate serviciile sociale licențiate din Romania poate fi descarcat de <a href="http://www.mmuncii.ro/j33/images/Documente/Familie/2017/2017-10-01-Servicii-Sociale-10.01.2017.pdf" title="Lista serviciilor sociale licențiate - Descarcare format pdf">aici (format pdf).</a></p>
      </div>
    </Container>
  )
}
export default Info
