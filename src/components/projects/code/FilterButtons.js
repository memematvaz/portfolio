import React from 'react';




const FilterButtons = () => {

/*   const handleAllprojects = (props) => {
    this.props.setFilterProjects(all);
} */

    return (
        
          <div className="button-container">
            <button className="button button-all"
                    id="all"
                    onClick = { this.handleAllprojects }
                    >
              All projects
            </button>
            <button className="button button-React"
                    id="react"
                   //onClick={() => setFilterProjects(react)}
                   >
              React
            </button>
            <button className="button button-JS"
                    id="js"
                   // onClick={ handleJSProjects }
                   >
              JS
            </button>
            <button className="button button-SASS"
                      id="sass"
                  //  onClick={ handleSASSProjects }
                  >
              SASS
            </button>
            <button className="button button-Bootstrap"
                    id="bootstrap"
                  //  onClick={ handleBootstrapProjects }
                  >
              Bootstrap
            </button>
            <button className="button button-API"
                      id="api"
                  //  onClick={ handleAPIProjects }
                  >
                API
            </button>
            <button className="button button-LocalStorage"
                    id="localstorage"
                  //  onClick={ handleLocalStorageProjects }
                  >
                LocalStorage
            </button>
            <button className="button button-game"
                    id="game"
                  //  onClick={ handleGameProjects }
                  >
                Game
            </button>
          </div>
  
    )
  }
  
  export default FilterButtons;