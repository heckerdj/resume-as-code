import React from 'react';
import './DarkModeToggle.css';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <div className="dark-mode-toggle-container">
      <input 
        type="checkbox" 
        id="dark-mode-toggle"
        className="dark-mode-toggle-input"
        checked={isDarkMode}
        onChange={onToggle}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      />
      <label htmlFor="dark-mode-toggle" className="dark-mode-toggle-label">
        <span className="dark-mode-toggle-track">
          <span className="dark-mode-toggle-thumb">
            <span className="toggle-icon">
              {isDarkMode ? '☀️' : '🌙'}
            </span>
          </span>
        </span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
