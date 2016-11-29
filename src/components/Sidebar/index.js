import React, {Component, PropTypes} from "react"
import {Link} from "react-router"
import {Drawer, Divider, List, ListItem, makeSelectable, IconButton, AutoComplete} from "material-ui"
import ActionHelp from "material-ui/svg-icons/action/help"
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import './sidebar.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { lightBlue900 } from 'material-ui/styles/colors'
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: lightBlue900,
  },
})

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.string.isRequired,
      style: PropTypes.object
    };
    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
          style={this.props.style}
          >
            {this.props.children}
          </ComposedComponent>
        );
      }
    };
  }

SelectableList = wrapState(SelectableList)
// const organisingType = [
//   {name:"Centru rezidenţial cu cazare pe perioadă nedeterminată", code:"1" },
//   {name:"Centru rezidenţial cu cazare pe perioadă determinată", code:"2" },
//   {name:"Locuinţă protejată", code:"3" },
//   {name:"Centru de zi", code:"4" },
//   {name:"Unitate de îngrijiri la domiciliu", code:"5" },
//   {name:"Serviciu acordat în comunitate", code:"6" },
//   {name:"Cantină socială", code:"7" },
//   {name:"Masă pe roţi", code:"8" },
//   {name:"Unitate medico-social", code:"9" }
// ]
// const beneficiaries = [
//   {code:"B1",	name: "Copii" },
//   {code:"B1.1",	name: "Copii 3 - 6 ani" },
//   {code:"B1.3",	name: "Copii 6 - 16 ani" },
//   {code:"B1.4",	name: "Copii 16 - 18 ani" },
//   {code:"B2",	name: "Tineri" },
//   {code:"B2.1",	name: "Tineri 18 - 26" },
//   {code:"B2.2",	name: "Tineri 26 - 35 ani" },
//   {code:"B3",	name: "Adulti 35 - 65" },
//   {code:"B4",	name: "Varstnici peste 65 ani" },
//   {code:"B5",	name: "Familie" },
//   {code:"B6",	name: "Grup" },
//   {code:"B7",	name: "Comunitate" }
// ]
const beneficiariesConfigs = {
  text: 'name',
  value: 'code'
}
const districtsConfigs = {
  text: 'value',
  value: 'index'
}
const serviciiConfigs = {
  text: 'desc',
  value: 'cod'
}
const typeConfigs = {
  text: 'name',
  value: 'code'
}

const styles = {
  navi: {display: 'flex', flexDirection: 'column', paddingTop: 0, paddingBottom: 0, backgroundColor: '#26b2d0',  overflow:'hidden', height:'100%'},
  close: {
    position: 'absolute',
    right: '-54px',
    zIndex: 1111,
    top: 0,
    width:54,
    height:54,
    color: 'red',
    backgroundColor: '#26b2d0'
  }
}

const Sidebar = (props) => {
  //const districtsnu = props.markers.reduce((a,b) => { a[b.jud] = (a[b.jud] || 0) + 1; return a }, {})

  return (
  <MuiThemeProvider>
    <Drawer
      muiTheme={muiTheme}
      containerStyle={{height: '100vh', top: 0, overflow:'none', backgroundColor: '#26b2d0'}}
      open={props.open}
      >
      <SelectableList {...props} defaultValue="dashboard" style={styles.navi}>

          <div className="nume">
            <Link to="/">
            <span className="harta">Harta</span>
            <span className="servicii">Serviciilor Sociale</span>
            <span className="autorizate">Autorizate</span>
            </Link>
          </div>

        <IconButton
          onTouchTap={props.handleClose}
          style={styles.close}>
          <NavigationClose color='#ffffff' />
        </IconButton>
        <div className="filter">
          <div className="filter-child">
            <AutoComplete
              style={{borderColor: '#37b8d4!important', marginLeft: 20, width:'83%'}}
              listStyle={{width: '220px', color: '#37b8d4', fontSize: 13}}
              textFieldStyle={{width: '100%', color:'#ffffff', fontSize: 13}}
              floatingLabelText='Judet'
              hintText='Introduceti Judetul'
              filter={AutoComplete.caseInsensitiveFilter}
              maxSearchResults={5}
              dataSource={props.districts}
              dataSourceConfig={districtsConfigs}
              openOnFocus={true}
              onNewRequest={(value) => props.changeDistrict(value)}
            />
            <AutoComplete
              style={{borderColor: '#37b8d4!important', marginLeft: 20, width:'83%'}}
              listStyle={{width: 'auto', color: '#37b8d4', fontSize: '13px!important'}}
              menuStyle={{fontSize: '13px!important',width:'100%'}}
              textFieldStyle={{width: '100%', color:'#ffffff', fontSize: 13}}
              floatingLabelText='Tip serviciu'
              filter={AutoComplete.caseInsensitiveFilter}
              maxSearchResults={5}
              dataSource={props.servicii}
              dataSourceConfig={serviciiConfigs}
              openOnFocus={true}
              onNewRequest={(value) => props.changeService(value.cod)}
            />
            <AutoComplete
              style={{borderColor: '#37b8d4!important', marginLeft: 20, width:'83%'}}
              listStyle={{width: 'auto', color: '#37b8d4'}}
              textFieldStyle={{width: '100%', color:'#ffffff',fontSize: 13}}
              floatingLabelText='Tip organizare serviciu'
              filter={AutoComplete.caseInsensitiveFilter}
              maxSearchResults={5}
              dataSource={props.type}
              dataSourceConfig={typeConfigs}
              openOnFocus={true}
              onNewRequest={(value) => props.changeType(value.code)}
            />
            <AutoComplete
              style={{borderColor: '#37b8d4!important', marginLeft: 20, width:'83%'}}
                listStyle={{width: 'auto', color: '#37b8d4', fontSize: 13}}
                textFieldStyle={{width: '100%', color:'#ffffff', fontSize: 13}}
                floatingLabelText='Beneficiari'
                filter={AutoComplete.caseInsensitiveFilter}
                maxSearchResults={12}
                dataSource={props.beneficiaries}
                dataSourceConfig={beneficiariesConfigs}
                openOnFocus={true}
                onNewRequest={(value) => props.changeBeneficiary(value.code)}
              />
          </div>
        </div>
        <Divider style={{flexGrow:'1', backgroundColor:'#26b2d0'}}/>
        <ListItem
          value="ajutor"
          primaryText="Ajutor"
          style={{color: '#ffffff'}}
          leftIcon={<ActionHelp color='#ffffff'/>}
          containerElement={<Link to="/ajutor" />} />
      </SelectableList>
    </Drawer>
  </MuiThemeProvider>
  )
}
export default Sidebar
