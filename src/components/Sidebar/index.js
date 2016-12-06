import React, {Component, PropTypes} from "react"
import {Link} from "react-router"
import {Drawer, Divider, List, makeSelectable, IconButton, AutoComplete} from "material-ui"
import ActionHelp from "material-ui/svg-icons/action/help"
import ActionInfo from 'material-ui/svg-icons/action/info';
import LocalPostOffice from 'material-ui/svg-icons/maps/local-post-office';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { ComboBox, Option } from 'belle';
import belle from 'belle';
import R from 'ramda'
import './sidebar.css'
belle.style.comboBox.style =
  R.merge(belle.style.comboBox.style, {
    color: '#000',
    borderBottom: '2px solid #5dd3ec',
    margin:'0 20px',
    fontSize: '16px',
    width:214,
  })
belle.style.comboBox.hoverStyle =
  R.merge(belle.style.comboBox.hoverStyle, {
    borderBottom: '2px solid #5dd3ec'
  })
belle.style.comboBox.wrapperStyle =
  R.merge(belle.style.comboBox.wrapperStyle, {
    padding:'20px 0'
  })
belle.style.comboBox.focusStyle =
  R.merge(belle.style.comboBox.focusStyle, {
    borderBottom: '2px solid #5dd3ec'
  })
belle.style.comboBox.menuStyle =
  R.merge(belle.style.comboBox.menuStyle, {
    marginLeft: '20px',
    width: 220,
    zIndex: 1300
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
const serviciiConfigs = {
  text: 'desc',
  value: 'cod'
}
const styles = {
  navi: {display: 'flex', flexDirection: 'column', paddingTop: 0, paddingBottom: 0, backgroundColor: '#26b2d0',  overflow:'hidden', height:'calc(100% - 50px)'},
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
  let filteredServices = props.selectedFilters.category
    ? props.servicii.filter(service => service.cat === props.selectedFilters.category)
    : [{desc: 'Alegeti cel putin un tip de serviciu', cod: '0'}]

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
            <ComboBox className="combo"
              placeholder={ 'Județ' }
              onUpdate={ (event) => { props.changeDistrict(event.value)} }
              menuStyle={{maxHeight: 250, overflow: 'scroll'}}
            >
              {
                props.districts.map((district, index) => (
                  <Option value={ district }
                    identifier={ index }
                    key={ index }>
                    { district }
                  </Option>
                ))
              }
            </ComboBox>
            <ComboBox className="combo"
              placeholder={ 'Tipul serviciului' }
              onUpdate={ (event) => { props.changeCategory(event.value)} }
              menuStyle={{maxHeight: 250, overflow: 'scroll'}}
            >
              {
                props.categories.map((category, index) => (
                  <Option value={ category }
                    identifier={ index }
                    key={ index }>
                    { category }
                  </Option>
                ))
              }
            </ComboBox>

            <AutoComplete
              className="combo"
              style={{borderColor: '#37b8d4!important', marginLeft: 20, width:'83%'}}
              listStyle={{width: 'auto', color: '#37b8d4'}}
              textFieldStyle={{width: '100%', color:'#ffffff!important'}}
              hintText='Categoria de servicii'
              filter={AutoComplete.caseInsensitiveFilter}
              maxSearchResults={5}
              dataSource={filteredServices}
              dataSourceConfig={serviciiConfigs}
              openOnFocus={true}
              onNewRequest={(value) => props.changeService(value.cod)}
            />
            <ComboBox className="combo"
              placeholder={ 'Forma organizare serviciu' }
              onUpdate={ (event) => { props.changeType(event.identifier)} }
              menuStyle={{maxHeight: 250, overflow: 'scroll'}}
            >
              {
                props.type.map((type, index) => (
                  <Option value={ type.name }
                    identifier={ type.code }
                    key={ index }>
                    { type.name }
                  </Option>
                ))
              }
            </ComboBox>
            <ComboBox className="combo"
              placeholder={ 'Beneficiari' }
              onUpdate={ (event) => { props.changeBeneficiary(event.identifier)} }
              menuStyle={{maxHeight: 250, overflow: 'scroll'}}
            >
              {
                props.beneficiaries.map((beneficiary, index) => (
                  <Option value={ beneficiary.name }
                    identifier={ beneficiary.code }
                    key={ index }>
                    { beneficiary.name }
                  </Option>
                ))
              }
            </ComboBox>
          </div>
        </div>
        <Divider style={{flexGrow:'1', backgroundColor:'#26b2d0'}}/>

      </SelectableList>
      <IconButton onTouchTap={props.handleDisclaimer} className="meta" touch={true} tooltipPosition="top-right" tooltip="Disclaimer">
        <ActionInfo color='#ffffff'/>
      </IconButton>
      <IconButton containerElement={<Link to="/ajutor" />} className="meta" touch={true} tooltipPosition="top-right" tooltip="Intrebari Frecvente">
        <ActionHelp color='#ffffff'/>
      </IconButton>
      <IconButton containerElement={<Link to="/contact" />} className="meta" touch={true} tooltipPosition="top-right" tooltip="Contact">
        <LocalPostOffice color='#ffffff'/>
      </IconButton>
    </Drawer>
  )
}
export default Sidebar
