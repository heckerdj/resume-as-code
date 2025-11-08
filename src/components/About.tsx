import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I am a software engineer by degree and a DevOps engineer by practice and interest. 
            I appreciate taking on new challenges and particularly enjoy automation which has led me 
            to my career in automating code delivery. From source control best practices, through build,
            test, scan, deploy, promotion and release I thrive on improving the process in both security and speed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
