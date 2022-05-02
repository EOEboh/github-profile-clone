import React from 'react';
import './Home.css';

const Navbar = () => {
  return (
    <>
      <nav className='nav-div'>
          <ul className='repo-nav'>
            <li>Overview</li>
            <li>Repositories</li>
            <li>Projects</li>
            <li>Packages</li>
            <li>Stars</li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar;