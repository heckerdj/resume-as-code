import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <h1 className="name">Dan Hecker</h1>
          <p className="title">Senior DevOps Engineer & Engineering Enablement Lead</p>
        </div>
        <div className="contact-info">
          <div className="contact-links">
            <a href="https://github.com/heckerdj" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/dan-hecker" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:dan@danhecker.com">
              Contact
            </a>
            <a href="/Dan_Hecker_Resume.pdf" download className="download-btn">
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
