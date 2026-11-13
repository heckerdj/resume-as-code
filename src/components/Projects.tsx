import React from 'react';
import './Projects.css';
import corneredIcon from '../assets/cornered-icon.svg';
import corneredMonday from '../assets/cornered-monday.webp';
import corneredSunday from '../assets/cornered-sunday.webp';
import appStoreBadge from '../assets/app-store-badge.png';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  linkLabel?: string;
  secondaryLink?: string;
  secondaryLinkLabel?: string;
  logo?: string;
  status: string;
  /** Featured projects get a full-width hero card above the grid. */
  featured?: boolean;
  tagline?: string;
  highlights?: string[];
  screenshots?: { src: string; alt: string }[];
}

const projects: Project[] = [
  {
    title: 'Cornered',
    tagline: 'A daily puzzle game for iPhone and Android',
    description: 'One new board a day. Every grid hides rectangles with four matching marks at the corners, and the goal is to find them all.',
    highlights: [
      'The twist: rectangles don’t have to line up with the grid. Tilted ones hide in plain sight and are much harder to spot.',
      'Play it on the day. Solve a board the day it comes out without a hint and it goes gold, a hint makes it silver, and late solves still count. Streaks, solve times and a wall of awards, a few hidden until you earn them.',
      'Designed to be calm. No ads, no account and it works offline. Swap the colors or play with card suits or chess pieces instead of dots, and share your solve without spoiling it.'
    ],
    screenshots: [
      { src: corneredMonday, alt: 'Cornered Monday board with a tilted rectangle found' },
      { src: corneredSunday, alt: 'Cornered Sunday board played with card suits' }
    ],
    technologies: ['React Native', 'Expo', 'JavaScript', 'Cloudflare Workers', 'Pulumi'],
    link: 'https://apps.apple.com/app/id6804104582',
    linkLabel: 'App Store',
    secondaryLink: 'https://play.google.com/store/apps/details?id=com.corneredgame.cornered',
    secondaryLinkLabel: 'Google Play',
    logo: corneredIcon,
    status: 'Live on iOS and Android',
    featured: true
  },
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
    link: '/family-recipes/',
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

const FeaturedProject: React.FC<{ project: Project }> = ({ project }) => (
  <article className="featured-project" aria-labelledby="featured-project-title">
    <div className="featured-project-body">
      <div className="featured-project-heading">
        {project.logo && <img className="featured-project-logo" src={project.logo} alt={`${project.title} logo`} />}
        <div>
          <h3 id="featured-project-title">{project.title}</h3>
          {project.tagline && <p className="featured-project-tagline">{project.tagline}</p>}
        </div>
        <span className="featured-project-status">
          <span className="status-dot" aria-hidden="true"></span>
          {project.status}
        </span>
      </div>
      <p className="featured-project-description">{project.description}</p>
      {project.highlights && (
        <ul className="featured-project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
      <div className="project-technologies">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="store-links">
        <a className="store-badge-image" href={project.link} target="_blank" rel="noopener noreferrer">
          <img src={appStoreBadge} alt={`Download on the ${project.linkLabel}`} height={48} />
        </a>
        {project.secondaryLink && (
          <a className="store-badge" href={project.secondaryLink} target="_blank" rel="noopener noreferrer">
            <span className="store-badge-small">Get it on</span>
            <span className="store-badge-large">{project.secondaryLinkLabel}</span>
          </a>
        )}
      </div>
    </div>
    {project.screenshots && (
      <div className="featured-project-screens">
        {project.screenshots.map((shot) => (
          <img key={shot.src} className="featured-project-screen" src={shot.src} alt={shot.alt} loading="lazy" />
        ))}
      </div>
    )}
  </article>
);

const Projects: React.FC = () => {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        {featured.map((project) => (
          <FeaturedProject key={project.title} project={project} />
        ))}
        <div className="projects-grid">
          {others.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-card-header">
                <h3>{project.title}</h3>
                <span className={`project-status status-${project.status.toLowerCase()}`}>{project.status}</span>
              </div>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
