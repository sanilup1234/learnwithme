import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';

import Portfolioo from '../Portfolio';
import Compilerr from '../Compiler';
import Arrayy from '../Array'
import Listt from '../List'
import * as ROUTES from '../../constants/routes';


const App = () => (
  <Router>
    <div>
      <Navigation />
      
     
     
      <div className ="App-header">
      <Route exact path={ROUTES.PORTFOLIO} component={Portfolioo} />
      <Route path={ROUTES.COMPILER} component={Compilerr} />
      <Route path={ROUTES.LINKEDLIST} component={Listt} />
      <Route path={ROUTES.ARRAY} component={Arrayy} />
      
      </div>
    
    </div>

  </Router>
);
export default App;