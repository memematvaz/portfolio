import React from 'react';
import '../styles/App.scss';
import '../index.scss';


import Header from './Header';
import About from './About'
import Main from './Main'
import CodeProjects from './projects/details/CodeProjects'
import PhotoProjects from './projects/details/PhotoProjects'
import VideoProjects from './projects/details/VideoProjects'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => (
  <div className="App">
    <Router>

    
    
     <Switch>
      <Route exact path="/">
        <Header/>
        <Main/>
      </Route>

      

    <Route exact path="/about">
        <About/>
    </Route>   
    
    <Route exact path="/CodeProjects">
        <CodeProjects/>
    </Route> 

    <Route exact path="/PhotoProjects">
        <PhotoProjects/>
    </Route> 

    <Route exact path="/VideoProjects">
        <VideoProjects/>
    </Route> 

     </Switch>   


     </Router>
  </div>
)

export default App;
