import React from 'react'
import { Router, Route, IndexRoute } from 'react-router';

import App from '../App'
import NotFound from '../components/NotFound'
import About from '../components/About'
import Details from '../components/Details'
import Help from '../components/Help'
import Contact from '../components/Contact'
import Map from '../components/Map/'
import Certification from '../components/Certification/'
import Info from '../components/Info/'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" {...props} component={App}>
      <IndexRoute component={Map}/>
      <Route path="statistici" component={About} />
      <Route path="serviciu/:id" component={Details} />
      <Route path="ajutor" component={Help} />
      <Route path="contact" component={Contact} />
      <Route path="acreditare" component={Certification} />
      <Route path="info" component={Info} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
export default Routes
