import React from 'react';
import '../styles/App.scss';
import '../index.scss';


import Header from './Header';
import About from './About'
import Main from './Main'
import CodeProjects from './projects/code/CodeProjectsList'
import PhotoProjects from './projects/PhotoProjects'
import VideoProjects from './projects/VideoProjects'

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
    
    <Route exact path="/codeProjects">
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

//JS diferente según el ancho de la pantalla
/* var anchura = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if (anchura <= 480) {
    // estás en un móvil en vertical
} else {
    // móvil en horizontal, tablet o desktop
} */

//alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) 