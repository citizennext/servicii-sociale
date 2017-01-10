import React, {Component, PropTypes} from "react"
import {Link} from "react-router"
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import List from 'material-ui/List'
import makeSelectable from 'material-ui/List/makeSelectable'
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import ListItem from 'material-ui/List/ListItem'
import ActionHelp from "material-ui/svg-icons/action/help"
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionAssessment from 'material-ui/svg-icons/action/assessment';
import LocalPostOffice from 'material-ui/svg-icons/maps/local-post-office';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import belle, { Select, Option } from 'belle';
import R from 'ramda'
import './sidebar.css'

belle.style.select.style =
  R.merge(belle.style.select.style, {
    color: '#000',
    borderBottom: '2px solid #5dd3ec',
    margin:'0 20px',
    width:214,
  })
belle.style.select.hoverStyle =
  R.merge(belle.style.select.hoverStyle, {
    borderBottom: '2px solid #5dd3ec'
  })
belle.style.select.wrapperStyle =
  R.merge(belle.style.select.wrapperStyle, {
    padding:'10px 0 5px 0'
  })
belle.style.select.focusStyle =
  R.merge(belle.style.select.focusStyle, {
    borderBottom: '2px solid #5dd3ec'
  })
belle.style.select.menuStyle =
  R.merge(belle.style.select.menuStyle, {
    marginLeft: '20px',
    width: 220,
    zIndex: 1300
  })
belle.style.select.caretToOpenStyle =
  R.omit(['content'], belle.style.select.caretToOpenStyle)
belle.style.select.caretToCloseStyle =
  R.omit(['content'], belle.style.select.caretToCloseStyle)

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

const styles = {
  navi: {display: 'flex', flexDirection: 'column', paddingTop: 0, paddingBottom: 0, backgroundColor: '#26b2d0',  overflow:'hidden', height:'calc(100% - 70px)'},
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
            <Select className="combo"
              value={ (props.selectedFilters.jud !== undefined) ? props.selectedFilters.jud : '' }
              onUpdate={ (event) => { props.changeDistrict(event.value)} }
              menuStyle={{maxHeight: 250, overflow: 'scroll'}}
            >
              <Option defaultValue value="">Județ</Option>
              {
                props.districts.map((district, index) => (
                  <Option value={ district }
                    identifier={ index }
                    key={ index }>
                    { district }
                  </Option>
                ))
              }
            </Select>
            <Select className="combo"
              value={ (props.selectedFilters.category !== undefined) ? props.selectedFilters.category : '' }
              onUpdate={ (event) => { props.changeCategory(event.value) } }
              menuStyle={{maxHeight: 250, overflow: 'scroll'}}
            >
              <Option defaultValue value="">Tipul serviciului</Option>
              {
                props.categories.map((category, index) => (
                  <Option value={ category }
                    identifier={ index }
                    key={ index }>
                    { category }
                  </Option>
                ))
              }
            </Select>
            <Select className="combo"
              value={ (props.selectedFilters.cod !== undefined) ? props.selectedFilters.cod : '' }
              onUpdate={ (event) => props.changeService(event.value) }
              menuStyle={{maxHeight: 250, overflow: 'scroll'}}
            >
              <Option defaultValue value="">Categoria de servicii</Option>
              {filteredServices.map((service, index) => (
                <Option value={ service.cod }
                  identifier={ index }
                  key={ index }>
                  { service.desc }
                </Option>
              ))}
            </Select>
            <Select className="combo"
              value={ (props.selectedFilters.type !== undefined) ? props.selectedFilters.type : '' }
              onUpdate={ (event) => { props.changeType(event.value)} }
              menuStyle={{maxHeight: 250, overflow: 'scroll'}}
            >
              <Option defaultValue value="">Forma organizare serviciu</Option>
              {
                props.type.map((type, index) => (
                  <Option value={ type.code }
                    key={ index }>
                    { type.name }
                  </Option>
                ))
              }
            </Select>
            <Select className="combo"
              value={ (props.selectedFilters.categorie !== undefined) ? props.selectedFilters.categorie : '' }
              onUpdate={ (event) => { props.changeBeneficiary(event.value)} }
              menuStyle={{maxHeight: 250, overflow: 'scroll', zIndex:2300}}
            >
              <Option defaultValue value="">Beneficiari</Option>
              {
                props.beneficiaries.map((beneficiary, index) => (
                  <Option value={ beneficiary.code }
                    key={ index }>
                    { beneficiary.name }
                  </Option>
                ))
              }
            </Select>
          </div>
          <RaisedButton
            label="Reset"
            onTouchTap={props.resetFilters}
            style={{marginLeft:20, marginTop: 10}}
            />
        </div>
        <Divider style={{flexGrow:'1', backgroundColor:'#26b2d0'}}/>
        <Divider style={{ backgroundColor:'rgba(255, 255, 255, 0.2)'}}/>
        <ListItem
          value="acreditare"
          primaryText="Acreditare"
          style={{color: '#ffffff'}}
          leftIcon={<ActionAssessment color='#ffffff'/>}
          containerElement={<Link to="/acreditare" />} />
          <Divider style={{ backgroundColor:'rgba(255, 255, 255, 0.2)'}}/>
        <ListItem
          value="info"
          primaryText="Informatii Generale"
          style={{color: '#ffffff'}}
          leftIcon={<SocialNotifications color='#ffffff'/>}
          containerElement={<Link to="/info" />} />
          <Divider style={{ backgroundColor:'rgba(255, 255, 255, 0.2)'}}/>
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
