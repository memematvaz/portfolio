import React from 'react';
import '../styles/App.scss';
import '../index.scss';


import Header from './Header';
import About from './About'
import Main from './Main'
import CodeProjects from './projects/code/CodeProjectsList'

import { Route, Switch } from 'react-router-dom';


const App = () => (
  <div className="App">    
     <Switch>
      <Route exact path="/">
        <Header/>
        <Main/>
    
      </Route>

      

    <Route exact path="/about">
        <About/>
    </Route>   
    
    <Route exact path="/codeProjects">
        <CodeProjects/>
    </Route> 

     </Switch>   

  </div>
)

export default App;

