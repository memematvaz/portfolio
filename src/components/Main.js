import React from 'react';
import { Link } from 'react-router-dom';

import code from '../images/code.png';



const Main = () => {


  return (
   <div className="main">
        <Link className="link" to="/codeProjects">
            <div className="code projects">
                <img src={code} alt="code projects" title="code projects"  className="main__image-projects"></img>
            </div>
        </Link>
    </div>



  )
}

export default Main;