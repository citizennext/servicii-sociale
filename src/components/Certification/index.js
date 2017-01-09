import React from 'react'
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconClass from 'material-ui/svg-icons/action/class';
import IconDescription from 'material-ui/svg-icons/action/description';
import IconFace from 'material-ui/svg-icons/action/face';
import IconStore from 'material-ui/svg-icons/action/store';
import IconDesktop from 'material-ui/svg-icons/hardware/desktop-mac';
import IconCached from 'material-ui/svg-icons/action/cached';
import IconAssignment from 'material-ui/svg-icons/action/assignment-turned-in';
import IconAccessibility from 'material-ui/svg-icons/action/accessibility';
import {cyan500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
const paperStyle = {
	padding: 20,
  margin: 20,
	width: 200,
	height: 230,
  textAlign: 'center',
  display: 'inline-block',
};
const infoPaperStyle = {
	padding: 20,
  margin: 20,
	width: 400,
  textAlign: 'center',
  display: 'inline-block',
};
const iconStyle = {
	width: 96,
	height: 96,
};
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
const Certification = (props) => {

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
        <h2>Procedura de acreditare</h2>
        <p>Ministerul Muncii, Familiei, Protecției Sociale și Persoanelor Vârstnice împreună cu autoritățile din subordine, Autoritatea Națională pentru Protecția Drepturilor Copilului și Adopție (ANPDCA), Agenția Națională pentru Egalitate de Șanse între Femei și Bărbați (ANES) și Autoritatea Națională pentru Persoanele cu Dizabilități (ANPD) acordă licențe de funcționare sau provizorii pentru serviciile sociale din domeniul propriu de activitate. </p>
        <h3>Cadrul procedural unitar</h3>
				<div className="paper-docs">
				<a href="http://www.mmuncii.ro/j33/images/Documente/Familie/DGAS/Acreditare/L197_2012.pdf" target="_blank" >
					<Paper style={paperStyle} zDepth={1}>
							<IconDescription style={iconStyle} color={cyan500} />
							<p>Legea nr. 197/2012 privind asigurarea calității în domeniul serviciilor sociale</p>
					</Paper>
				</a>
				<a href="http://www.mmuncii.ro/j33/images/Documente/Familie/DGAS/Acreditare/HG_118_2014actual2016.pdf" target="_blank">
					<Paper style={paperStyle} zDepth={1}>
							<IconClass style={iconStyle} color={cyan500} />
							<p>HG nr. 118/2014</p>
					</Paper>
				</a>
				<a href="http://www.mmuncii.ro/j33/images/Documente/Familie/DGAS/Acreditare/HG_584_2016.pdf" target="_blank">
					<Paper style={paperStyle} zDepth={1}>
							<IconClass style={iconStyle} color={cyan500} />
							<p>HG nr. 584/2016</p>
					</Paper>
				</a>
				</div>
        <p>În prezent sunt 2.550 de servicii sociale licențiate și 2.947 de furnizori licențiați. De la începutul anului 2016 au fost licențiate 1.477 de noi servicii.</p>
        <p>Din cele 2550 de servicii licențiate, 1396 sunt publice și 1154 sunt private. </p>
        <h3>Ministerul Muncii este punctul unic de contact pentru depunerea cererilor</h3>
        <p>Furnizorii de servicii sociale (publici sau privați) depun cererile la Ministerul Muncii, ca punct unic de contact, urmând ca cele 3 instituții subordonate să acorde licențele de funcționare sau provizorii astfel: ANPDCA pentru serviciile sociale acordate copiilor, ANPD pentru cele destinate persoanelor cu dizabilități, ANES în cazul victimelor violenței domestice, iar Ministerul Muncii pentru serviciile sociale acordate persoanelor vârstnice și altor categorii de beneficiari.</p>

        <p>Întregul <a href="http://www.mmuncii.ro/j33/index.php/ro/2014-domenii/familie/politici-familiale-incluziune-si-asistenta-sociala/3222" target="_blank">cadru normativ legat de procedura de acreditare</a> este disponibil pe site-ul Ministerului Muncii.</p>


				<h3>Procesul de acreditare</h3>
				<div className="paper-docs paper-info">

				<Paper style={infoPaperStyle} zDepth={1}>
					<IconStore style={iconStyle} color={cyan500} />
					<h4>Furnizori</h4>
					<hr/>
					<ul>
						<li>Verificarea îndeplinirii criteriilor de acreditare, în baza datelor, informațiilor și documentelor justificative depuse</li>
						<li>Aprobarea sau respingerea cererii de acreditare</li>
						<li>Eliberarea certificatului de acreditare sau a notificării de respingere</li>
						<li>Înregistrarea furnizorului în Registrul Electronic Unic al Serviciilor Sociale</li>
					</ul>
				</Paper>

				<Paper style={infoPaperStyle} zDepth={1}>
					<IconFace style={iconStyle} color={cyan500} />
					<h4>Servicii sociale</h4>
					<hr/>
					<ul>
						<li>Verificarea documentelor justificative și a fișei de autoevaluare, a datelor și informațiilor din cererea de acreditare</li>
						<li>Eliberarea licenței de funcționare provizorie</li>
						<li>Verificarea în teren de către inspectorii sociali a îndeplinirii standardelor minime</li>
						<li>Eliberarea licenței de funcționare sau, după caz, decizia de respingere a acordării acesteia</li>
						<li>Înscrierea serviciului social în Registrul Electronic Unic al Serviciilor Sociale</li>
					</ul>
				</Paper>

				<Paper style={infoPaperStyle} zDepth={1}>
					<IconDesktop style={iconStyle} color={cyan500} />
					<h4>Punct unic de intrare</h4>
					<hr/>
					<ul>
						<li>Dosarele se pot transmite în format electronic</li>
						<li>Sunt admise completări la dosarele depuse</li>
						<li>Comunicarea cu beneficiarii este mai facilă</li>
					</ul>
				</Paper>

				<Paper style={infoPaperStyle} zDepth={1}>
					<IconCached style={iconStyle} color={cyan500} />
					<h4>Reacreditare</h4>
					<hr/>
					<p>Cererea se depune de furnizorul de servicii sociale pentru fiecare serviciu social în parte, cu 60 de zile înainte de darea în funcțiune sau de expirarea licenței.</p>
					<ul>
						<li>Evaluarea serviciilor sociale în baza documentelor justificative</li>
						<li>Raport de evaluare în teren, realizat în procesul de monitorizare</li>
						<li>Eliberearea licenței de funcționare numai dacă raportul de evaluare din teren confirmă îndeplinirea 100% a standardelor</li>
					</ul>
				</Paper>

				<Paper style={infoPaperStyle} zDepth={1}>
					<IconAssignment style={iconStyle} color={cyan500} />
					<h4>Calitate</h4>
					<hr/>
					<p>Pentru asigurarea calității, serviciile sociale sunt centrate pe nevoile individuale ale beneficiarilor.</p>
					<ul>
						<li>Evaluarea</li>
						<li>Certificare</li>
						<li>Monitorizare</li>
						<li>Control</li>
					</ul>
				</Paper>

				<Paper style={infoPaperStyle} zDepth={1}>
					<IconAccessibility style={iconStyle} color={cyan500} />
					<h4>Suport</h4>
					<hr/>
					<p>Serviciile sociale oferă suport pentru:</p>
					<ul>
						<li>Persoane vârstnice și bolnavi în fază terminală</li>
						<li>Persoane cu diferite adicții</li>
						<li>Persoane cu dizabilități</li>
						<li>Copii aflați în sistemul de protecție specială</li>
						<li>Victime ale violenței în familie</li>
						<li>Victime ale traficului de persoane</li>
						<li>Persoane fără adăpost</li>
					</ul>
				</Paper>

			  </div>
      </div>
    </Container>
  )
}



export default Certification
