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


              <div className="code-project--container-relative">
            <div className="code-project--container" >
            <div className="code-project--title">I see you!</div>
              <img className="code-project--img" src="https://www.interactius.com/wp-content/uploads/2017/09/foto6.png" title="Foto6" alt="Foto6"></img>

      
          </div>
          </div>


          <div className="code-project--container-relative">
            <div className="code-project--container" >
            <div className="code-project--title">I see you!</div>
              <img className="code-project--img" src="https://www.interactius.com/wp-content/uploads/2017/09/foto6.png" title="Foto6" alt="Foto6"></img>

      
          </div>
          </div>





          </div>




         

        </>




  
  
  
    )
  }
  
  export default CodeProjects;