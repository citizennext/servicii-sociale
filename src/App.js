import React, { Component } from 'react'
import R from 'ramda'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue900 } from 'material-ui/styles/colors'
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: lightBlue900,
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
  }
  setSelectedFilter(key, value) {
    const selectedFilters = R.assoc(key, value, this.state.selectedFilters)
    this.setState({ selectedFilters })
  }
  componentDidMount() {
    axios
      .get('https://socent.cezarneaga.eu/test.json')
      .then(data => {
        const districtsMap = data.data.providers.map(marker => marker.jud)
        const districts = districtsMap.filter((v,i) => districtsMap.indexOf(v) === i)
        this.setState({
          districts: districts,
          markers: data.data.providers,
          servicii: data.data.ss,
          isLoading: false
        });
      })
      .catch(error => console.log(error))
  }


  onMarkerClick = (marker) => {
    this.props.route.history.push(`/serviciu/${marker.id}`);
    this.setState({ open: false })
  }


  handleClose = () => this.setState({open: !this.state.open});
  handleBack = () => {
    this.setState({open: !this.state.open})
    this.props.route.history.push("/")
  };
  render() {
    let children = null;
      children = React.cloneElement(this.props.children, {
        ...this.state,
        onMarkerClick: this.onMarkerClick.bind(this), handleBack: this.handleBack
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
                type={this.state.type}
                districts={this.state.districts}
                beneficiaries={this.state.beneficiaries}
                changeDistrict={this.changeDistrict}
                changeService={this.changeService}
                changeBeneficiary={this.changeBeneficiary}
                changeType={this.changeType}
              />
              <div>
                {children}
              </div>
              <Footer open={this.state.open} />
            </div>
        }
      </div>
    </MuiThemeProvider>
    )
  }
}
export default App
