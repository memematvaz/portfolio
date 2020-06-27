import React from 'react';




const FilterButtons = () => {

/*   const handleAllProjects = () => {
    props.setReset()
} */

    return (
        
          <div className="button-container">
            <button className="button button-all"
                    //onClick={ handleAllProjects }
                    >
              All projects
            </button>
            <button className="button button-React"
                   // onClick={ handleReactProjects }
                   >
              React
            </button>
            <button className="button button-JS"
                   // onClick={ handleJSProjects }
                   >
              JS
            </button>
            <button className="button button-SASS"
                  //  onClick={ handleSASSProjects }
                  >
              SASS
            </button>
            <button className="button button-Bootstrap"
                  //  onClick={ handleBootstrapProjects }
                  >
              Bootstrap
            </button>
            <button className="button button-API"
                  //  onClick={ handleAPIProjects }
                  >
                API
            </button>
            <button className="button button-LocalStorage"
                  //  onClick={ handleLocalStorageProjects }
                  >
                LocalStorage
            </button>
            <button className="button button-game"
                  //  onClick={ handleGameProjects }
                  >
                Game
            </button>
          </div>
  
    )
  }
  
  export default FilterButtons;