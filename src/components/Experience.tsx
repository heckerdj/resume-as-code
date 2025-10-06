import React from 'react';
import './Experience.css';

interface CompanyInfo {
  name: string;
  logo?: string;
  colorClass: string;
}
const COMPANY_LOGOS = {
  travelers: 'https://upload.wikimedia.org/wikipedia/de/6/66/Travelers_logo.svg', 
  aetna: 'https://upload.wikimedia.org/wikipedia/commons/0/01/1_Heart_Aetna_logo_sm_rgb_violet.png',
  utc: 'https://upload.wikimedia.org/wikipedia/commons/9/97/UTC_Aerospace_Systems.svg', 
  clarkson: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Clarkson-university-logo-green.png',
  orgadata: 'https://d1eipm3vz40hy0.cloudfront.net/images/Customer+Stories+/Orgadata/orgadata_logo.png'  // found at https://www.zendesk.com/customer/orgadata/ inspecting the elements on the page.
} as const;

const companyInfo: Record<string, CompanyInfo> = {
  'Travelers': {
    name: 'Travelers',
    logo: COMPANY_LOGOS.travelers,
    colorClass: 'travelers'
  },
  'Aetna': {
    name: 'Aetna, a CVS Health Company',
    logo: COMPANY_LOGOS.aetna,
    colorClass: 'aetna'
  },
  'UTC': {
    name: 'UTC Aerospace Systems',
    logo: COMPANY_LOGOS.utc,
    colorClass: 'utc'
  },
  'Orgadata': {
    name: 'Orgadata AG',
    logo: COMPANY_LOGOS.orgadata,
    colorClass: 'orgadata'
  },
  'Clarkson': {
    name: 'Clarkson University',
    logo: COMPANY_LOGOS.clarkson,
    colorClass: 'clarkson'
  }
};

const Experience: React.FC = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-content">
          
          {/* Travelers Experience Card */}
          <div className={`employer-card border-${companyInfo.Travelers.colorClass}`}>
            <div className="employer-header">
              {companyInfo.Travelers.logo ? (
                <img 
                  src={companyInfo.Travelers.logo} 
                  alt={companyInfo.Travelers.name}
                  className="employer-logo"
                />
              ) : (
                <h3 className="employer-name-fallback">{companyInfo.Travelers.name}</h3>
              )}
              <p className="employer-duration">February 2022 - Present</p>
              <p className="employer-location">Hartford, Connecticut</p>
            </div>
            <div className="roles-container">
              <div className="role">
                <h4 className={`color-${companyInfo.Travelers.colorClass}`}>Senior DevOps Engineer & Engineering Enablement Lead</h4>
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
                <h4 className={`color-${companyInfo.Travelers.colorClass}`}>DevOps Engineer (Software Engineer II)</h4>
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
                <h4 className={`color-${companyInfo.Travelers.colorClass}`}>DevOps Engineer (Software Engineer I)</h4>
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
          <div className={`employer-card border-${companyInfo.Aetna.colorClass}`}>
            <div className="employer-header">
              {companyInfo.Aetna.logo ? (
                <img 
                  src={companyInfo.Aetna.logo} 
                  alt={companyInfo.Aetna.name}
                  className="employer-logo"
                />
              ) : (
                <h3 className="employer-name-fallback">{companyInfo.Aetna.name}</h3>
              )}
              <p className="employer-duration">June 2018 - February 2022</p>
              <p className="employer-location">Hartford, Connecticut</p>
            </div>
            <div className="roles-container">
              <div className="role">
                <h4 className={`color-${companyInfo.Aetna.colorClass}`}>System Engineer</h4>
                <p className="role-duration">June 2020 - February 2022</p>
                <ul>
                  <li>Developed enterprise pipeline solutions using GitHub Enterprise, CloudBees Jenkins, and Octopus Deploy</li>
                  <li>Responsible for CI/CD tools maintenance, including designing and architecting cloud migrations</li>
                  <li>Moved enterprise tools from virtual machines in data centers to modern cloud solutions</li>
                  <li>Supported continuous integration, testing, and delivery processes</li>
                </ul>
              </div>

              <div className="role">
                <h4 className={`color-${companyInfo.Aetna.colorClass}`}>Associate System Engineer - IT Technical Training Program</h4>
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
          <div className={`employer-card border-${companyInfo.UTC.colorClass}`}>
            <div className="employer-header">
              {companyInfo.UTC.logo ? (
                <img 
                  src={companyInfo.UTC.logo} 
                  alt={companyInfo.UTC.name}
                  className="employer-logo"
                />
              ) : (
                <h3 className="employer-name-fallback">{companyInfo.UTC.name}</h3>
              )}
              <p className="employer-duration">January 2017 - September 2017</p>
              <p className="employer-location">Vergennes, Vermont</p>
            </div>
            <div className="roles-container">
              <div className="role">
                <h4 className={`color-${companyInfo.UTC.colorClass}`}>Software Engineering Co-Op</h4>
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
          <div className={`employer-card border-${companyInfo.Orgadata.colorClass}`}>
            <div className="employer-header">
              {companyInfo.Orgadata.logo ? (
                <img 
                  src={companyInfo.Orgadata.logo} 
                  alt={companyInfo.Orgadata.name}
                  className="employer-logo"
                />
              ) : (
                <h3 className="employer-name-fallback">{companyInfo.Orgadata.name}</h3>
              )}
              <p className="employer-duration">September 2017 - December 2017</p>
              <p className="employer-location">Leer, Germany</p>
            </div>
            <div className="roles-container">
              <div className="role">
                <h4 className={`color-${companyInfo.Orgadata.colorClass}`}>Software Engineering Apprentice</h4>
                <p className="role-duration">September 2017 - December 2017</p>
                <ul>
                  <li>International apprenticeship teaching C# programming fundamentals</li>
                  <li>Taught month-long introduction to basic C# programming to German high school students</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Clarkson University Experience Card */}
          <div className={`employer-card border-${companyInfo.Clarkson.colorClass}`}>
            <div className="employer-header">
              {companyInfo.Clarkson.logo ? (
                <img 
                  src={companyInfo.Clarkson.logo} 
                  alt={companyInfo.Clarkson.name}
                  className="employer-logo"
                  onError={(e) => {
                    console.error('Failed to load Clarkson logo:', companyInfo.Clarkson.logo);
                    console.error('Error event:', e);
                  }}
                  onLoad={() => console.log('Clarkson logo loaded successfully')}
                />
              ) : (
                <h3 className="employer-name-fallback">{companyInfo.Clarkson.name}</h3>
              )}
              <p className="employer-duration">2015 - May 2017</p>
              <p className="employer-location">Potsdam, New York</p>
            </div>
            <div className="roles-container">
              <div className="role">
                <h4 className={`color-${companyInfo.Clarkson.colorClass}`}>Teaching Assistant (ES 100)</h4>
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
