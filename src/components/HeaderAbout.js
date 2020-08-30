import React from 'react';
import { Link } from 'react-router-dom';

const HeaderAbout = () => {


  return (
   <header class="header">
    <Link className="link" to="/">
      <h2 className="title" aria-label="go to main" title="María Mateo" alt="go to main">María Mateo</h2>
    </Link>
    <Link className="link" to="/codeProjects">
      <div aria-label="projects" title="projects" alt="projects">Projects</div>
    </Link>
       </header>




  )
}

export default HeaderAbout;