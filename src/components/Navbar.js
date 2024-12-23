import React from 'react';
import logo from '../assets/navbar-logo.svg';

const Navbar = () => {
  return (
    <section className='navbar' id='Navbar'>
      <div className='navbar-cont'>
        <a href="/">
          <img className="navbar-logo" src={logo} alt="Logo" />
        </a>

        <div className='navbar-links'>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#comments">Comments</a></li>
            <li><a href="#references">References</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
