import React from 'react';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  linkLabel?: string;
  secondaryLink?: string;
  secondaryLinkLabel?: string;
  status: string;
}

const projects: Project[] = [
  {
    title: 'DanHecker.com - Resume as Code',
    description: 'Personal resume site built with React, TypeScript, and deployed via GitHub Pages with automated CI/CD pipeline. Showcases modern web development practices and DevOps integration.',
    technologies: ['React', 'TypeScript', 'GitHub Actions', 'GitHub Pages', 'Vite', 'CSS3'],
    link: 'https://github.com/heckerdj/resume-as-code',
    status: 'Live'
  },
  {
    title: 'Family Recipe Site',
    description: 'The family recipe box, digitized. A fully static, backend-free site on GitHub Pages: photos of recipe cards are transcribed with Claude vision, compiled from markdown into JSON, and published with ingredients, time, effort, and cuisine search alongside scans of the original cards.',
    technologies: ['JavaScript', 'Node.js', 'GitHub Pages' ],
    link: 'https://danhecker.com/recipes/',
    linkLabel: 'View Site',
    secondaryLink: 'https://github.com/heckerdj/recipes',
    secondaryLinkLabel: 'GitHub',
    status: 'Live'
  },
  {
    title: '3D Printing',
    description: 'Exploring additive manufacturing through 3D printing. Started sharing designs on Printables and now primarily using MakerWorld to create and publish custom models.',
    technologies: ['3D Printing', 'CAD Design', 'Additive Manufacturing'],
    link: 'https://makerworld.com/en/@Doalzer',
    secondaryLink: 'https://www.printables.com/@Doalzer',
    status: 'Hobby'
  },
  {
    title: 'Dawn-of-Discord - Text-based RPG',
    description: 'Deployed discord bots in a personally managed server that ran a text-based RPG game and manipulated discord roles to move players between locations within the game.',
    technologies: ['MongoDB', 'Python'],
    link: 'https://github.com/heckerdj/Dawn-of-Discord',
    status: 'Archived'
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
                  {project.linkLabel ?? (project.secondaryLink ? 'MakerWorld' : 'View Project')}
                </a>
                {project.secondaryLink && (
                  <a href={project.secondaryLink} target="_blank" rel="noopener noreferrer">
                    {project.secondaryLinkLabel ?? 'Printables'}
                  </a>
                )}
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
