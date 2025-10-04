import { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check localStorage for saved preference
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    // Update the HTML root element class
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <div className="app">
        <main className="main-content">
          <About />
          <Experience />
          <Skills />
          <Education />
          <Projects />
        </main>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Dan Hecker. Built with React + TypeScript.</p>
            <div className="status-badges">
              <img 
                src="https://github.com/heckerdj/resume-as-code/actions/workflows/deploy.yml/badge.svg" 
                alt="GitHub Pages Deploy Status" 
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
