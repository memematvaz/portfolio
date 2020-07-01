import React from 'react';
import Header from '../../Header';

const PhotoProjects = () => {


    return (
        <>
          <Header/>
          <div className="photoproject--list-container">

            <div className="photoproject--principal-projects"></div>

            <div className="photoproject--serie-projects">
              <section className="photoproject--serie-projects-element">
                <div className="serie-projects-element--image-container ana"></div>
                
                Ana</section>
                <section className="photoproject--serie-projects-element">
                <div className="serie-projects-element--image-container arturo"></div>
                
                arturo</section>
                <section className="photoproject--serie-projects-element">
                <div className="serie-projects-element--image-container cristi"></div>
                
                cristi</section>
              </div>
          </div>
        </>
  
  
  
    )
  }
  
  export default PhotoProjects;