import React from 'react';
import './Education.css';
import { COMPANY_INFO } from '../constants/companyLogos';

const Education: React.FC = () => {
  return (
    <section className="education-section">
      <div className="container">
        <h2>Education & Certifications</h2>
        <div className="education-content">
          <div className={`education-item border-${COMPANY_INFO.Clarkson.colorClass}`}>
            <div className="education-header">
              <img 
                src={COMPANY_INFO.Clarkson.logo} 
                alt="Clarkson University Logo" 
                className="institution-logo"
              />
              <h3>Bachelor of Science (B.S.), Software Engineering</h3>
              <p className="institution-name">{COMPANY_INFO.Clarkson.name}</p>
              <p className="location">Potsdam, New York</p>
            </div>
          </div>

          <div className="certifications">
            <h3>Professional Certifications</h3>
            <div className="cert-grid">
              <div className="cert-item">
                <h4>GitHub Actions</h4>
                <p className="cert-issuer">GitHub</p>
                <p className="cert-date">May 2025 - May 2028</p>
                <a 
                  href="https://www.credly.com/badges/502ed1cd-6f59-4645-9731-df843d2eb6ee/public_url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="credential-button"
                >
                  Show Credential
                </a>
              </div>
              <div className="cert-item">
                <h4>Cryptocurrency</h4>
                <p className="cert-issuer">MIT MediaLab</p>
                <p className="cert-date">August 2022</p>
                <a 
                  href="https://mitmedialab.credential.getsmarter.com/52d39e47-17e8-4c5e-90bf-b76d7a23bc8b#acc.K4dQlaoe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="credential-button"
                >
                  Show Credential
                </a>
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
