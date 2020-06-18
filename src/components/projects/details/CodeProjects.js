import React, { useState } from 'react';
import Header from '../../Header';
import FilterButtons from './FilterButtons';


const CodeProjects = () => {
 const [projects, setFilteredProjects] = useState()

    return (
        <>
          <Header/>
          <FilterButtons/>
          <div className="code-project--list">
              {projects} 


              <div className="container">
            <div className="div" >
            <div className="text">I see you!</div>
              <img className="img" src="https://www.interactius.com/wp-content/uploads/2017/09/foto6.png" title="Foto6" alt="Foto6"></img>

      
          </div>
          </div>


          <div className="container">
            <div className="div" >
            <div className="text">I see you!</div>
              <img className="img" src="https://www.interactius.com/wp-content/uploads/2017/09/foto6.png" title="Foto6" alt="Foto6"></img>

      
          </div>
          </div>





          </div>




         

        </>




  
  
  
    )
  }
  
  export default CodeProjects;