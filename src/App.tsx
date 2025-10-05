import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Tabs from './components/Tabs'
import './App.css'

function App() {
  const tabs = [
    {
      id: 'professional',
      label: 'Professional Experience',
      content: (
        <>
          <About />
          <Experience />
          <Skills />
          <Education />
        </>
      )
    },
    {
      id: 'projects',
      label: 'Personal Projects',
      content: <Projects />
    }
  ];

  return (
    <>
      <Header />
      <div className="app">
        <main className="main-content">
          <Tabs tabs={tabs} defaultTab="professional" />
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
