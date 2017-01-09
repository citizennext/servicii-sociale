import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import {Card, CardHeader, CardText} from 'material-ui/Card';
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
const Help = (props) => {
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
      <div className="paper-faq" style={{minHeight: '100%', marginTop: '54px', maxWidth: '100vw'}}>
        <h2>Întrebări frecvente</h2>

				<Card className="faq-card">
				    <CardHeader
				      title="1. Ce reprezintă Harta Serviciilor Sociale Licențiate?"
				      actAsExpander={true}
				      showExpandableButton={true}
							className="faq-title"
				    />
				    <CardText expandable={true} className="faq-content">
							<p>Harta Serviciilor Sociale Licențiate este varianta digitalizată a Registrului electronic unic al serviciilor sociale (e-Registru). Aceasta reprezintă o evidență a serviciilor sociale licențiate, acordate de furnizori sociali acreditați.</p>
			        <p>Harta este gestionată de Ministerul Muncii, Familiei, Protecției Sociale și Persoanelor Vârstnice și oferă o imagine de ansamblu a serviciilor sociale pe care atât instituțiile publice, cât și cele private le oferă diferitelor categorii de grupuri vulnerabile. Prin intermediul acestei platforme sunt furnizate informații și statistici tuturor cetățenilor interesați.</p>
				    </CardText>
				</Card>

				<Card className="faq-card">
				    <CardHeader
				      title="2. La ce foloseste harta?"
				      actAsExpander={true}
				      showExpandableButton={true}
							className="faq-title"
				    />
				    <CardText expandable={true} className="faq-content">
							<p>Harta este un instrument util în a identifica centrele rezidențiale și de zi, precum și celelalte forme de serviciile sociale specifice fiecărei categorii de grup vulnerabil, la nivel județean și național. Fiecărui serviciu social în parte îi sunt prezentate datele de contact, adresa, furnizorul acreditat de care aparține, activitățile pe care le desfășoară, dar și capacitatea de care dispune.</p>
				    </CardText>
				</Card>

				<Card className="faq-card">
				    <CardHeader
				      title="3. Cum utilizez harta?"
				      actAsExpander={true}
				      showExpandableButton={true}
							className="faq-title"
				    />
				    <CardText expandable={true} className="faq-content">
							<p>Pe pagina principală a platformei se regăsesc mai multe filtre care spijină utilizatorul în navigarea acesteia. În funcție de informațiile căutate se pot aplica unul sau mai multe filtre.</p>
			        <p>Primul filtru este legat de poziționarea geografică, la nivel de județ. În mod practic, selectând unul dintre județe, harta va arăta toate serviciile sociale ce se află pe raza acelui județ.</p>
			        <p>Următoarele filtre țin de tipul și categoria de serviciu social, așa cum au fost stabilite în Nomeclatorul Serviciilor Sociale. Sunt în total 24 de tipuri de servicii sociale și 71 de categorii de servicii. Fiecărui Tip de servicii sociale îi sunt atribuite unul sau mai multe Categorii de servicii. Pentru a selecta categoria de serviciu social, trebui mai întâi selectat tipul, iar apoi harta va genera căutările după filtrele alese.</p>
			        <p>Forma de organizare a serviciului social este un filtru care diferențiază centrele rezidențiale, de centrele de zi, de locuițele protejate, de unitățile de îngijire la domiciului etc. În total sunt 9 forme de organizare, după care se poate filtra o căutare.</p>
			        <p>Ultimul filtru este dedicat categoriilor de beneficiari cărora li se adresează serviciul social. Beneficiarii sunt împărțiți pe categorii de vârstă, de la copii la persoane vârstnice.</p>
				    </CardText>
				</Card>

				<Card className="faq-card">
				    <CardHeader
				      title="4. Cum pot să mă implic?"
				      actAsExpander={true}
				      showExpandableButton={true}
							className="faq-title"
				    />
				    <CardText expandable={true} className="faq-content">
						<p>Utilizatorii pot contribui la acuratețea datelor prezentate pe www.harta-furnizori.mmuncii.ro și pot trimite observații și propuneri de îmbunătățire a platformei la adresa de email <a href="mailto:acreditare@mmuncii.ro" title="Email acreditare@mmuncii.ro">acreditare@mmuncii.ro</a>.</p>
				    </CardText>
				</Card>
      </div>
    </Container>
  )
};
export default Help;
