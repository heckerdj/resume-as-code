import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I'm a software engineer with a strong foundation in DevOps, platform engineering, and automation, 
            driven by a passion for removing friction from the development lifecycle. I thrive at the intersection 
            of tooling, process, and people, creating systems that improve speed, security, and reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
