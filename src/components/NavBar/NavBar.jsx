import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='NavBar'>
      <Link to='/' className='button'>
        Flash Cards
      </Link>
      <Link to='/ManageCards' className='button'>
        Manage Cards
      </Link>
    </div>
  );
}

export default NavBar;