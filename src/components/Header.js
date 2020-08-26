import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


  return (
   <header class="header">
    <Link className="link" to="/">
      <h2 class="title">María Mateo</h2>
    </Link>
    <Link className="link" to="/about">
      <div>About me</div>
    </Link>
       </header>




  )
}

export default Header;