import React from 'react';
import './Experience.css';
import { COMPANY_INFO } from '../constants/companyLogos';

const Experience: React.FC = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-content">
          
          {/* Travelers Experience Card */}
          <div className={`employer-card border-${COMPANY_INFO.Travelers.colorClass}`}>
            <div className="employer-header">
              {COMPANY_INFO.Travelers.logo ? (
                <img 
                  src={COMPANY_INFO.Travelers.logo} 
                  alt={COMPANY_INFO.Travelers.name}
                  className="employer-logo"
                />
              ) : (
                <h3 className="employer-name-fallback">{COMPANY_INFO.Travelers.name}</h3>
              )}
              <p className="employer-duration">February 2022 - Present</p>
              <p className="employer-location">Hartford, Connecticut</p>
            </div>
            <div className="roles-container">
              <div className="role">
                <h4 className={`color-${COMPANY_INFO.Travelers.colorClass}`}>Senior Software & DevOps Engineer</h4>
                <p className="role-duration">December 2024 - Present</p>
                <p className="role-location">Hybrid</p>
                <ul>
                  <li>Drive initiatives that improve developer productivity, streamline CI/CD workflows, and reduce operational overhead</li>
                  <li>Lead a globally distributed team of 10+ engineers and contractors</li>
                  <li>Collaborate closely with cross-functional partners to deliver scalable automation solutions</li>
                  <li>Build tools, pipelines, and best practices that empower engineering teams to ship faster and with greater confidence</li>
                  <li>Create internal platforms that remove friction and enable engineers to do their best work</li>
                </ul>
              </div>

              <div className="role">
                <h4 className={`color-${COMPANY_INFO.Travelers.colorClass}`}>DevOps Engineer (Software Engineer II)</h4>
                <p className="role-duration">February 2024 - December 2024</p>
                <p className="role-location">Hybrid</p>
                <ul>
                  <li>Designed and implemented CI/CD pipelines, infrastructure automation, and internal tooling</li>
                  <li>Improved delivery velocity, reduced manual overhead, and created reusable automation patterns</li>
                  <li>Developed automation patterns adopted by teams across the organization</li>
                  <li>Deepened expertise in platform engineering leading to technical leadership role</li>
                </ul>
              </div>

              <div className="role">
                <h4 className={`color-${COMPANY_INFO.Travelers.colorClass}`}>DevOps Engineer (Software Engineer I)</h4>
                <p className="role-duration">February 2022 - February 2024</p>
                <p className="role-location">Remote</p>
                <ul>
                  <li>Modernized software delivery by evaluating new tooling and building DORA metrics dashboards</li>
                  <li>Developed best practices for CI/CD pipelines across Bond and Specialty line of business</li>
                  <li>Worked closely with application teams to implement and enforce delivery standards</li>
                  <li>Drove consistency and delivery efficiency across the business unit</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Aetna Experience Card */}
          <div className={`employer-card border-${COMPANY_INFO.Aetna.colorClass}`}>
            <div className="employer-header">
              {COMPANY_INFO.Aetna.logo ? (
                <img 
                  src={COMPANY_INFO.Aetna.logo} 
                  alt={COMPANY_INFO.Aetna.name}
                  className="employer-logo"
                />
              ) : (
                <h3 className="employer-name-fallback">{COMPANY_INFO.Aetna.name}</h3>
              )}
              <p className="employer-duration">June 2018 - February 2022</p>
              <p className="employer-location">Hartford, Connecticut</p>
            </div>
            <div className="roles-container">
              <div className="role">
                <h4 className={`color-${COMPANY_INFO.Aetna.colorClass}`}>System Engineer</h4>
                <p className="role-duration">June 2020 - February 2022</p>
                <ul>
                  <li>Developed enterprise pipeline solutions using GitHub Enterprise, CloudBees Jenkins, and Octopus Deploy</li>
                  <li>Responsible for CI/CD tools maintenance, including designing and architecting cloud migrations</li>
                  <li>Moved enterprise tools from virtual machines in data centers to modern cloud solutions</li>
                  <li>Supported continuous integration, testing, and delivery processes</li>
                </ul>
              </div>

              <div className="role">
                <h4 className={`color-${COMPANY_INFO.Aetna.colorClass}`}>Associate System Engineer - IT Technical Training Program</h4>
                <p className="role-duration">June 2018 - June 2020</p>
                <ul>
                  <li><strong>DevSecOps:</strong> Automated onboarding processes for enterprise DevOps pipelines, created self-serve documentation reducing monthly ticket intake</li>
                  <li><strong>WebEng:</strong> Migrated web applications from 2008 to 2016 shared web servers, retired obsolete applications</li>
                  <li><strong>Cloud COE:</strong> Containerized enterprise applications for cloud deployment</li>
                  <li><strong>Cloud Engineering:</strong> Designed Azure private endpoints, tagging and naming conventions for enterprise cloud infrastructure</li>
                </ul>
              </div>
            </div>
          </div>

          {/* UTC Aerospace Systems Experience Card */}
          <div className={`employer-card border-${COMPANY_INFO.UTC.colorClass}`}>
            <div className="employer-header">
              {COMPANY_INFO.UTC.logo ? (
                <img 
                  src={COMPANY_INFO.UTC.logo} 
                  alt={COMPANY_INFO.UTC.name}
                  className="employer-logo"
                />
              ) : (
                <h3 className="employer-name-fallback">{COMPANY_INFO.UTC.name}</h3>
              )}
              <p className="employer-duration">January 2017 - September 2017</p>
              <p className="employer-location">Vergennes, Vermont</p>
            </div>
            <div className="roles-container">
              <div className="role">
                <h4 className={`color-${COMPANY_INFO.UTC.colorClass}`}>Software Engineering Co-Op</h4>
                <p className="role-duration">January 2017 - September 2017</p>
                <ul>
                  <li>Developed front-end UI features for Black Hawk ground station using SVN version control</li>
                  <li>Redesigned middleware, Windows service, and SQL Server database architecture</li>
                  <li>Tested Pulse Ground Station (Silverlight application) using automated UI tests</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Orgadata AG Experience Card */}
          <div className={`employer-card border-${COMPANY_INFO.Orgadata.colorClass}`}>
            <div className="employer-header">
              {COMPANY_INFO.Orgadata.logo ? (
                <img 
                  src={COMPANY_INFO.Orgadata.logo} 
                  alt={COMPANY_INFO.Orgadata.name}
                  className="employer-logo"
                />
              ) : (
                <h3 className="employer-name-fallback">{COMPANY_INFO.Orgadata.name}</h3>
              )}
              <p className="employer-duration">September 2017 - December 2017</p>
              <p className="employer-location">Leer, Germany</p>
            </div>
            <div className="roles-container">
              <div className="role">
                <h4 className={`color-${COMPANY_INFO.Orgadata.colorClass}`}>Software Engineering Apprentice</h4>
                <p className="role-duration">September 2017 - December 2017</p>
                <ul>
                  <li>International apprenticeship teaching C# programming fundamentals</li>
                  <li>Taught month-long introduction to basic C# programming to German high school students</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Clarkson University Experience Card */}
          <div className={`employer-card border-${COMPANY_INFO.Clarkson.colorClass}`}>
            <div className="employer-header">
              {COMPANY_INFO.Clarkson.logo ? (
                <img 
                  src={COMPANY_INFO.Clarkson.logo} 
                  alt={COMPANY_INFO.Clarkson.name}
                  className="employer-logo"
                  onError={(e) => {
                    console.error('Failed to load Clarkson logo:', COMPANY_INFO.Clarkson.logo);
                    console.error('Error event:', e);
                  }}
                  
                />
              ) : (
                <h3 className="employer-name-fallback">{COMPANY_INFO.Clarkson.name}</h3>
              )}
              <p className="employer-duration">2015 - May 2017</p>
              <p className="employer-location">Potsdam, New York</p>
            </div>
            <div className="roles-container">
              <div className="role">
                <h4 className={`color-${COMPANY_INFO.Clarkson.colorClass}`}>Teaching Assistant (ES 100)</h4>
                <p className="role-duration">2015 - May 2017</p>
                <ul>
                  <li>Utilized troubleshooting for both syntax and conceptual errors in code</li>
                  <li>Educated peers using flexible communication skills, adjusting teaching styles for individual effectiveness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
