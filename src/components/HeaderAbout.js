import React from 'react';
import { Link } from 'react-router-dom';

const HeaderAbout = () => {


  return (
   <header class="header">
    <Link className="link" to="/">
      <h2 class="title">María Mateo</h2>
    </Link>
    <Link className="link" to="/codeProjects">
      <div>Projects</div>
    </Link>
       </header>




  )
}

export default HeaderAbout;