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
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <a href="https://drive.google.com/file/d/1RONpa6M_DViixpKW68KPHM9bsRRoYKBj/view?usp=sharing" target="_blank" rel="noreferrer">CV</a>
              </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
