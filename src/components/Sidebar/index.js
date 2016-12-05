import React, {Component, PropTypes} from "react"
import {Link} from "react-router"
import {Drawer, Divider, List, ListItem, makeSelectable, IconButton, AutoComplete} from "material-ui"
import ActionHelp from "material-ui/svg-icons/action/help"
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import './sidebar.css'

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
    zIndex: 1111,
    right: '-54px',
    top: 0,
    width:54,
    height:54,
    backgroundColor: '#26b2d0'
  },
  open: {
    position: 'absolute',
    zIndex: 1111,
    right: '-64px',
    top: 0,
    width:54,
    height:54,
    backgroundColor: '#26b2d0'
  }
}

const Sidebar = (props) => {
  //const markersPerDistricts = props.markers.reduce((a,b) => { a[b.jud] = (a[b.jud] || 0) + 1; return a }, {})
  const filteredServices = props.selectedFilters.category
    ? props.servicii.filter(service => service.cat === props.selectedFilters.category)
    : ['Alegeti cel putin o categorie']
  return (
    <Drawer
      containerStyle={{height: '100vh', top: 0, overflow:'none', backgroundColor: '#26b2d0'}}
      open={props.open}
    >
      <SelectableList {...props} defaultValue="" style={styles.navi}>

        <div className="nume">
          <Link to="/">
            <span className="harta">Harta</span>
            <span className="servicii">Serviciilor Sociale</span>
            <span className="autorizate">Licențiate</span>
          </Link>
        </div>

        <IconButton
          onTouchTap={props.handleClose}
          style={props.open ? styles.close : styles.open}>
          {props.open
            ? <NavigationClose color='#ffffff' />
            : <NavigationMenu color='#ffffff' />
          }
        </IconButton>
        <div className="filter">
          <div className="filter-child">
            <AutoComplete
              style={{borderColor: '#37b8d4!important', marginLeft: 20, width:'83%'}}
              listStyle={{width: '220px', color: '#37b8d4'}}
              textFieldStyle={{width: '100%', color:'#ffffff'}}
              floatingLabelText='Judet'
              hintText='Alegeți un județ'
              filter={AutoComplete.caseInsensitiveFilter}
              maxSearchResults={5}
              dataSource={props.districts}
              dataSourceConfig={districtsConfigs}
              openOnFocus={true}
              onNewRequest={(value) => props.changeDistrict(value)}
            />
            <AutoComplete
              style={{borderColor: '#37b8d4!important', marginLeft: 20, width:'83%'}}
              listStyle={{width: 'auto', color: '#37b8d4'}}
              textFieldStyle={{width: '100%', color:'#ffffff'}}
              floatingLabelText='Categoria de servicii'
              hintText='Alegeți o categorie'
              filter={AutoComplete.caseInsensitiveFilter}
              maxSearchResults={5}
              dataSource={props.categories}
              openOnFocus={true}
              onNewRequest={(value) => props.changeCategory(value)}
            />
            <AutoComplete
              style={{borderColor: '#37b8d4!important', marginLeft: 20, width:'83%'}}
              listStyle={{width: 'auto', color: '#37b8d4'}}
              textFieldStyle={{width: '100%', color:'#ffffff'}}
              floatingLabelText='Tipul serviciului'
              hintText='Alegeți tipul serviciului'
              filter={AutoComplete.caseInsensitiveFilter}
              maxSearchResults={5}
              dataSource={filteredServices}
              dataSourceConfig={serviciiConfigs}
              openOnFocus={true}
              onNewRequest={(value) => props.changeService(value.cod)}
            />
            <AutoComplete
              style={{borderColor: '#37b8d4!important', marginLeft: 20, width:'83%'}}
              listStyle={{width: 'auto', color: '#37b8d4'}}
              textFieldStyle={{width: '100%', color:'#ffffff'}}
              floatingLabelText='Forma organizare serviciu'
              hintText='Alegeți forma de organizare'
              filter={AutoComplete.caseInsensitiveFilter}
              maxSearchResults={5}
              dataSource={props.type}
              dataSourceConfig={typeConfigs}
              openOnFocus={true}
              onNewRequest={(value) => props.changeType(value.code)}
            />
            <AutoComplete
              style={{borderColor: '#37b8d4!important', marginLeft: 20, width:'83%'}}
              listStyle={{width: 'auto', color: '#37b8d4'}}
              textFieldStyle={{width: '100%', color:'#ffffff'}}
              floatingLabelText='Beneficiari'
              hintText='Introduceți un beneficiar'
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
  )
}
export default Sidebar
