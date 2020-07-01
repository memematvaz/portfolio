import React from 'react';

const CodeProject = (props) => {
    
  return (
    <div id={props.id} className="card--CodeProject">
      <img src={props.image} alt={props.title} className="card--img"/>
      <div className="card--text-container">
        <h2 className="card--title">{props.title}</h2>
        <p className="card--text">{props.description}</p>
        <div className="card--icon-container">
        <a className="card--icon" href={props.code} aria-label="see the code" title="see the code" alt="see the code" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-alt"></i></a>
        <a className="card--icon" href={props.web} aria-label="see the web" title="see the web" alt="see the web" rel="noopener noreferrer" target="_blank"><i className="fas fa-laptop-code"></i></a>
        </div>
      </div>
    </div>
  )
}

export default CodeProject;
