import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


  return (
   <header class="header">
    <Link to="/">
      <h1 class="title">María Mateo</h1>
    </Link>
    <Link to="About.js">
      <div>About</div>
    </Link>
       </header>




  )
}

export default Header;