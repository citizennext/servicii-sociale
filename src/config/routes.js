import React from 'react'
import { Router, Route, IndexRoute } from 'react-router';

import App from '../App'
import NotFound from '../components/NotFound'
import About from '../components/About'
import Details from '../components/Details'
import Help from '../components/Help'
import Map from '../components/Map/'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" {...props} component={App}>
      <IndexRoute component={Map}/>
      <Route path="despre" component={About} />
      <Route path="serviciu/:id" component={Details} />
      <Route path="admin/ajutor" component={Help} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
export default Routes
