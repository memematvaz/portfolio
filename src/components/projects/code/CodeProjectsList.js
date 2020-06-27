import React from 'react';
import Header from '../../Header';
import FilterButtons from './FilterButtons';
import CodeProject from './CodeProject'
import CODEPROJECTS from '../../services/CodeProjectsJSON';

// import { useState } from 'rect';


const CodeProjects = (props) => {
/*  const [projects, setFilteredProjects] = useState(CODEPROJECTS); */

 const projects = CODEPROJECTS;

 console.log(projects)


    return (
        <>
          <Header/>
          <FilterButtons/>
          <ul className="codeproject--list-container">
           {projects.map((projectObject) =>
           <li className="codeproject--object"
               key={projectObject.id}>
           <CodeProject
                    image={projectObject.image}
                    title={projectObject.title}
                    description={projectObject.details.description}
                    code={projectObject.details.links.code}
                    web={projectObject.details.links.web}
            />
            </li>
           )}
        </ul>

        </>
    )
    
}
   export default CodeProjects;


/*    {   
    projects
    .filter(project => props.filter === null || project.type === props.filter)
    .map(project=>{
        return(
        <CodeProject    id={project.id}
                        project={project}
        />
        )
      })
  } */