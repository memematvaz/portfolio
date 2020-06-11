import React from 'react';
import '../styles/App.scss';
import '../index.scss';


import './Header.js';


import Header from './Header';

import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/">
        <Header/>
      </Route>
    


    <Route path="/about" />
  </Switch>
</div>
)

export default App;
