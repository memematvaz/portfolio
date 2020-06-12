import React from 'react';
import { Link } from 'react-router-dom';

import code from '../images/code-red.png';
import photo from '../images/photo-red.png';


const Main = () => {


  return (
   <div className="main">
        <Link className="link" to="/codeProjects">
            <div className="code projects">
                <img src={code} alt="code project" className="main-image-projects"></img>
                <h2>Code projects</h2>
            </div>
        </Link>
        <Link className="link" to="/photoProjects">
            <div className="photo projects">
                <img src={photo} alt="photo project" className="main-image-projects"></img>
                <h2>Photo projects</h2>
            </div>
        </Link>
        <Link className="link" to="/videoProjects">
            <div className="video projects">
                <img src="#" alt="video project" className="main-image-projects"></img>
                <h2>Video projects</h2>
            </div>
        </Link>


    </div>



  )
}

export default Main;