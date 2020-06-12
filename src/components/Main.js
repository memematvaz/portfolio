import React from 'react';
import { Link } from 'react-router-dom';


const Main = () => {


  return (
   <div className="main">
        <Link className="link" to="/codeProjects">
            <div className="code projects">
                <img src="#" alt="code project" className="main-image-code-projects"></img>
                <h2>Code projects</h2>
            </div>
        </Link>
        <Link className="link" to="/photoProjects">
            <div className="photo projects">
                <img src="#" alt="photo project" className="main-image-photo-projects"></img>
                <h2>Photo projects</h2>
            </div>
        </Link>
        <Link className="link" to="/videoProjects">
            <div className="video projects">
                <img src="#" alt="video project" className="main-image-video-projects"></img>
                <h2>Video projects</h2>
            </div>
        </Link>


    </div>



  )
}

export default Main;