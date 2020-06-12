import React, { useState } from 'react';
import Header from '../../Header';
import FilterButtons from './FilterButtons';


const CodeProjects = () => {
 const [projects, setFilteredProjects] = useState(0)

    return (
        <>
          <Header/>
          <FilterButtons/>
          <div className="project-list">
              {projects} 
          </div>
        </>
  
  
  
    )
  }
  
  export default CodeProjects;