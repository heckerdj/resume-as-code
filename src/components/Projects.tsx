import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'DanHecker.com - Resume as Code',
    description: 'Personal resume site built with React, TypeScript, and deployed via GitHub Pages with automated CI/CD pipeline. Showcases modern web development practices and DevOps integration.',
    technologies: ['React', 'TypeScript', 'GitHub Actions', 'GitHub Pages', 'Vite', 'CSS3'],
    link: 'https://github.com/heckerdj/resume-as-code',
    status: 'Live'
  },
  {
    title: 'Mobile Behaviometric Framework Research',
    description: 'IEEE published research on mobile user behavior analysis. Developed Android application to track data usage patterns for sociability assessment and smartphone user identification.',
    technologies: ['Android Development', 'Java', 'Mobile UI/UX', 'Data Analytics', 'Research'],
    link: 'https://ieeexplore.ieee.org',
    status: 'Published 2016'
  }
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
                <span className="project-status">{project.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
