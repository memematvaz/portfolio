import React from 'react';
import { Link } from 'react-router-dom';

import code from '../images/code.png';
import photo from '../images/photo.png';
import video from '../images/video.png';


const Main = () => {


  return (
   <div className="main">
        <Link className="link" to="/codeProjects">
            <div className="code projects">
                <img src={code} alt="code project" title="code project"  className="main-image-projects"></img>
                <h2>Code projects</h2>
            </div>
        </Link>
        <Link className="link" to="/photoProjects">
            <div className="photo projects">
                <img src={photo} alt="photo project" title="photo project" className="main-image-projects"></img>
                <h2>Photo projects</h2>
            </div>
        </Link>
        <Link className="link" to="/videoProjects">
            <div className="video projects">
                <img src={video} alt="video project" title="video project"  className="main-image-projects"></img>
                <h2>Video projects</h2>
            </div>
        </Link>


    </div>



  )
}

export default Main;