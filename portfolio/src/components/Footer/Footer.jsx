import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg justify-content-evenly">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="mailto:dconev@gmail.com" target="_blank" rel="noopener noreferrer">
                    Email
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/D-Tsonev/" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.linkedin.com/in/dimitar-tsonev8/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
