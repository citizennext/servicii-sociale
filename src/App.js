import React, { Component } from 'react'
import R from 'ramda'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue900, white } from 'material-ui/styles/colors';
import getSlug from 'speakingurl';
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: lightBlue900,
    hintColor: white,
    placeHolderColor: white,

  },
});
import RefreshIndicator from 'material-ui/RefreshIndicator'
const styles = {
  refresh: {
    display: 'inline-block',
    position: 'relative',
    backgroundColor: 'none',
    boxShadow: 'none'
  },
  svg: {
    color: {lightBlue900}
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      isLoading: true,
      disclaimerOpen: false,
      zoom: 7,
      selectedFilters: {},
      servicii: [],
      districts:[],
      type: [
        {name:"Centru rezidenţial cu cazare pe perioadă nedeterminată", code:"1" },
        {name:"Centru rezidenţial cu cazare pe perioadă determinată", code:"2" },
        {name:"Locuinţă protejată", code:"3" },
        {name:"Centru de zi", code:"4" },
        {name:"Unitate de îngrijiri la domiciliu", code:"5" },
        {name:"Serviciu acordat în comunitate", code:"6" },
        {name:"Cantină socială", code:"7" },
        {name:"Masă pe roţi", code:"8" },
        {name:"Unitate medico-social", code:"9" }
      ],
      beneficiaries: [
        {code:"B1",	name: "Copii" },
        {code:"B1.1",	name: "Copii 3 - 6 ani" },
        {code:"B1.3",	name: "Copii 6 - 16 ani" },
        {code:"B1.4",	name: "Copii 16 - 18 ani" },
        {code:"B2",	name: "Tineri" },
        {code:"B2.1",	name: "Tineri 18 - 26" },
        {code:"B2.2",	name: "Tineri 26 - 35 ani" },
        {code:"B3",	name: "Adulti 35 - 65" },
        {code:"B4",	name: "Varstnici peste 65 ani" },
        {code:"B5",	name: "Familie" },
        {code:"B6",	name: "Grup" },
        {code:"B7",	name: "Comunitate" }
      ],
      markers: [],
    }
    this.changeDistrict = this.setSelectedFilter.bind(this, 'jud')
    this.changeService = this.setSelectedFilter.bind(this, 'cod')
    this.changeType = this.setSelectedFilter.bind(this, 'type')
    this.changeBeneficiary = this.setSelectedFilter.bind(this, 'categorie')
    this.changeCategory = this.setSelectedFilter.bind(this, 'category')
  }
  setSelectedFilter(key, value) {
    const selectedFilters = R.assoc(key, value, this.state.selectedFilters)
    this.setState({ selectedFilters, zoom: 8 })
  }
  componentDidMount() {
    axios
      .get('/data.json')
      .then(data => {
        const districtsMap = data.data.providers.map(marker => marker.jud)
        const districts = districtsMap.filter((v,i) => districtsMap.indexOf(v) === i).sort()
        const servicesMap = data.data.ss.map(service => service.cat)
        const categories = servicesMap.filter((v,i) => servicesMap.indexOf(v) === i)
        const newMarkers = data.data.providers.map(marker => {
          const category = marker.cod
            ? R.find(service => service.cod === marker.cod)(data.data.ss).cat
            : null
          const slug = `${getSlug(marker.name)}-${marker.id}`
          return Object.assign(marker, {category, slug})
        }
        )
        this.setState({
          districts: districts,
          markers: newMarkers,
          categories,
          servicii: data.data.ss,
          isLoading: false
        });
      })
      .catch(error => console.log(error))
  }

  setZoom = (zoom) => this.setState({zoom});
  resetFilters = () => this.setState({
    selectedFilters: {},
    selectedService: '',
    zoom: 7
  });

  onMarkerClick = (marker) => {
    this.props.route.history.push(`/serviciu/${marker.slug}`);
    this.setState({ open: false })
  }

  handleDisclaimer = () => this.setState({disclaimerOpen: !this.state.disclaimerOpen});

  handleClose = () => this.setState({open: !this.state.open});

  handleBack = () => {
    this.setState({open: !this.state.open})
    this.props.route.history.goBack()
  };
  pageBack = () => {
    this.props.route.history.goBack()
  };
  render() {
    let children = null;
      children = React.cloneElement(this.props.children, {
        ...this.state,
        onMarkerClick: this.onMarkerClick,
        handleBack: this.handleBack,
        pageBack: this.pageBack,
        setZoom: this.setZoom
      })
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          {this.state.isLoading === true
            ? <div style={{width:'100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{maxWidth: '50%', position: 'relative'}}>
                <RefreshIndicator
                  size={150}
                  left={0}
                  top={0}
                  loadingColor='#37b8d4'
                  status="loading"
                  style={styles.refresh}
                />
              </div>
            </div>
            : <div style={{width:'100vw', minHeight: '100vh', position:'relative', overflow: 'hidden'}}>
              <Sidebar
                open={this.state.open}
                handleClose={this.handleClose}
                markers={this.state.markers}
                servicii={this.state.servicii}
                categories={this.state.categories}
                type={this.state.type}
                districts={this.state.districts}
                selectedFilters={this.state.selectedFilters}
                selectedService={this.state.selectedService}
                beneficiaries={this.state.beneficiaries}
                changeDistrict={this.changeDistrict}
                changeService={this.changeService}
                changeCategory={this.changeCategory}
                changeBeneficiary={this.changeBeneficiary}
                changeType={this.changeType}
                handleDisclaimer={this.handleDisclaimer}
                onZoomChanged={this.onZoomChanged}
                resetFilters={this.resetFilters}
              />
              <div>
                {children}
              </div>
              <Footer open={this.state.open} />
              <Dialog
                title="Harta Serviciilor Sociale Licentiate - Versiunea Beta"
                open={this.state.disclaimerOpen}
                onRequestClose={this.handleDisclaimer}
              >
                Harta serviciilor sociale licențiate este în versiune Beta. În această fază, softul este testat în practică de către utilizatori, iar apoi vor fi făcute modificări pentru a înlătura eventualele erori. Datele prezentate pe platformă sunt la nivelul lunii septembrie a anului 2016 și sunt în curs de actualizare. Utilizatorii pot contribui la acuratețea datelor prin trimiterea de observații și propuneri de îmbunătățire, la adresa de email <a href="mailto:acreditare@mmuncii.ro">acreditare@mmuncii.ro</a>.
                <IconButton onTouchTap={this.handleDisclaimer}
                  style={{position:'absolute', top: 0, right:0}}>
                  <NavigationClose />
                </IconButton>

              </Dialog>
            </div>
        }
      </div>
    </MuiThemeProvider>
    )
  }
}
export default App
