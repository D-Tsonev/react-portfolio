import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
