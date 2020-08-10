import React from 'react';
import Header from '../../Header';
import CodeProject from './CodeProject'
import CODEPROJECTS from '../../services/CodeProjectsJSON';
import { useState, useEffect } from 'react';




const CodeProjects = () => {
    const portfolio = CODEPROJECTS;
  
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
      setProjects(portfolio);
    }, []);

    useEffect(() => {
      setProjects([]);
      const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
      setProjects(filtered);
    }, [filter]);


        return (
            
            <>
            <Header/>
            
            <div className="button-container">
                    <button className="button button-all" active={filter === 'all'} onClick={() => setFilter('all')}>
                    All projects
                    </button>
                    <button className="button button-React" active={filter === 'react'} onClick={() => setFilter('react')}>
                    React
                    </button>
                    <button className="button button-JS" active={filter === 'js'} onClick={() => setFilter('js')}>
                    JS
                    </button>
                    <button className="button button-SASS" active={filter === 'sass'} onClick={() => setFilter('sass')}>
                    SASS
                    </button>
                    <button className="button button-Bootstrap" active={filter === 'bootstrap'} onClick={() => setFilter('bootstrap')}>
                    Bootstrap
                    </button>
                    <button className="button button-API" active={filter === 'api'} onClick={() => setFilter('api')}>
                        API
                    </button>
                    <button className="button button-LocalStorage" active={filter === 'localstorage'} onClick={() => setFilter('localstorage')}>
                        LocalStorage
                    </button>
                    <button className="button button-uxui" active={filter === 'uxui'} onClick={() => setFilter('uxui')}>
                        UX/UI
                    </button>
                    <button className="button button-game" active={filter === 'game'} onClick={() => setFilter('game')}>
                        Game
                    </button>
            </div>

            <ul className="codeproject__list-container">

            {
            projects.map(projectObject => projectObject.filtered === true ? (
                <li className="codeproject__object"
                key={projectObject.id}>
            <CodeProject
                        image={projectObject.image}
                        title={projectObject.title}
                        description={projectObject.details.description}
                        code={projectObject.details.links.code}
                        web={projectObject.details.links.web}
                />
                </li>
            ): '')}

            
            
            </ul>

            </>
        )}

    
export default CodeProjects;

