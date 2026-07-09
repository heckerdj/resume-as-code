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
    title: 'Family Recipe App',
    description: 'Private multi-user recipe app on Cloudflare\'s free tier: a PWA shell on Pages behind Cloudflare Access (Google one-tap, email allow-list), recipes served live from D1 through a Pages Function with full CRUD, versioned edits, and soft-delete; photos in R2; and on-demand AI transcription (Claude vision) that turns photos of handwritten recipe cards into structured, review-first drafts. Access JWTs validated per request; ~1¢ per photo scan with a daily cost cap; $0/month infrastructure.',
    technologies: ['Cloudflare Pages', 'Cloudflare Access', 'Pages Functions', 'D1', 'R2', 'Claude API', 'JavaScript'],
    link: '/case-studies/recipes.html',
    linkLabel: 'More Details',
    secondaryLink: 'https://recipes.4craftybrothers.com/',
    secondaryLinkLabel: 'Live app (access restricted)',
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
