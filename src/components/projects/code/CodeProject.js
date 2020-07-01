import React from 'react';

const CodeProject = (props) => {
    
  return (
    <div id={props.id} className="card--CodeProject">
      <img src={props.image} alt={props.title} className="card--img"/>
      <div className="card--text-container">
        <h2 className="card--title">{props.title}</h2>
        <p className="card--text">{props.description}</p>
        <div className="card--icon-container">
        <a className="card--icon" href={props.code}><i className="fab fa-github-alt"></i></a>
        <a className="card--icon" href={props.web}><i className="fas fa-laptop-code"></i></a>
        </div>
      </div>
    </div>
  )
}

export default CodeProject;
