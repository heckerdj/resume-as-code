import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import './Header.css';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleDarkMode }) => {
  return (
    <>
      {/* Dark mode toggle positioned in top right corner */}
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />
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
              <a href="https://www.linkedin.com/in/danhecker/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:me@danhecker.com">
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
