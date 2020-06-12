import React from 'react';
import '../styles/App.scss';
import '../index.scss';


import Header from './Header';


import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/">
        <Header/>
      </Route>
    


    <Route exact path="/about">
    
              <Header/>
     </Route> 

  </Switch>
</div>
)

export default App;
