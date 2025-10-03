import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section className="education-section">
      <div className="container">
        <h2>Education & Certifications</h2>
        <div className="education-content">
          <div className="education-item">
            <h3>Bachelor of Science (B.S.), Software Engineering</h3>
            <p className="institution">Clarkson University</p>
            <p className="location">Potsdam, New York</p>
            <div className="education-skills">
              <span className="skill-tag">MATLAB</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Software Engineering</span>
              <span className="skill-tag">Computer Science</span>
            </div>
          </div>

          <div className="certifications">
            <h3>Professional Certifications</h3>
            <div className="cert-grid">
              <div className="cert-item">
                <h4>GitHub Actions</h4>
                <p className="cert-issuer">GitHub</p>
                <p className="cert-date">May 2025 - May 2028</p>
                <p className="cert-id">Credential ID: 502ed1cd-6f59-4645-9731-df843d2eb6ee</p>
              </div>
              <div className="cert-item">
                <h4>Cryptocurrency</h4>
                <p className="cert-issuer">MIT MediaLab</p>
                <p className="cert-date">August 2022</p>
                <p className="cert-id">Credential ID: 55884134</p>
              </div>
            </div>
          </div>

          <div className="publications">
            <h3>Publications</h3>
            <div className="publication-item">
              <h4>Mobile Behaviometric Framework for Sociability Assessment and Identification of Smartphone Users</h4>
              <p className="publication-venue">2016 IEEE Symposium on Computers and Communication (ISCC)</p>
              <p className="publication-date">April 1, 2016</p>
              <ul>
                <li>Developed Android app to track data usage while users have specified apps open</li>
                <li>Designed and implemented user interface for social media data usage tracker</li>
                <li>Contributed to professor's research on mobile user behavior analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
