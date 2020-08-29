import React from 'react';

const CodeProject = (props) => {
    
  return (
    <div id={props.id} className="card__CodeProject">
      <img src={props.image} alt={props.title} className="card__img"/>
     
        <h2 className="card__title">{props.title}</h2>
        <p className="card__text">{props.description}</p>
      
      <div className="card__icon-container">
          <a className="card__icon" href={props.code} aria-label="see the code" title="see the code" alt="see the code" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-alt"></i></a>
          <a className="card__icon" href={props.web} aria-label="see the web" title="see the web" alt="see the web" rel="noopener noreferrer" target="_blank"><i className="fas fa-laptop-code"></i></a>

        </div>
    </div>
  )
}

export default CodeProject;
