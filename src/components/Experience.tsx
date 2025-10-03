import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-content">
          <div className="job">
            <h3>Senior DevOps Engineer & Engineering Enablement Lead</h3>
            <p className="company">Travelers</p>
            <p className="duration">December 2024 - Present</p>
            <p className="location">Hartford, Connecticut • Hybrid</p>
            <ul>
              <li>Drive initiatives that improve developer productivity, streamline CI/CD workflows, and reduce operational overhead</li>
              <li>Lead a globally distributed team of 10+ engineers and contractors</li>
              <li>Collaborate closely with cross-functional partners to deliver scalable automation solutions</li>
              <li>Build tools, pipelines, and best practices that empower engineering teams to ship faster and with greater confidence</li>
              <li>Create internal platforms that remove friction and enable engineers to do their best work</li>
            </ul>
          </div>

          <div className="job">
            <h3>DevOps Engineer (Software Engineer II)</h3>
            <p className="company">Travelers</p>
            <p className="duration">February 2024 - December 2024</p>
            <p className="location">Hartford, Connecticut • Hybrid</p>
            <ul>
              <li>Designed and implemented CI/CD pipelines, infrastructure automation, and internal tooling</li>
              <li>Improved delivery velocity, reduced manual overhead, and created reusable automation patterns</li>
              <li>Developed automation patterns adopted by teams across the organization</li>
              <li>Deepened expertise in platform engineering leading to technical leadership role</li>
            </ul>
          </div>

          <div className="job">
            <h3>DevOps Engineer (Software Engineer I)</h3>
            <p className="company">Travelers</p>
            <p className="duration">February 2022 - February 2024</p>
            <p className="location">Hartford, Connecticut</p>
            <ul>
              <li>Modernized software delivery by evaluating new tooling and building DORA metrics dashboards</li>
              <li>Developed best practices for CI/CD pipelines across Bond and Specialty line of business</li>
              <li>Worked closely with application teams to implement and enforce delivery standards</li>
              <li>Drove consistency and delivery efficiency across the business unit</li>
            </ul>
          </div>

          <div className="job">
            <h3>System Engineer</h3>
            <p className="company">Aetna, a CVS Health Company</p>
            <p className="duration">June 2020 - February 2022</p>
            <p className="location">Hartford, Connecticut</p>
            <ul>
              <li>Developed enterprise pipeline solutions using GitHub Enterprise, CloudBees Jenkins, and Octopus Deploy</li>
              <li>Responsible for CI/CD tools maintenance, including designing and architecting cloud migrations</li>
              <li>Moved enterprise tools from virtual machines in data centers to modern cloud solutions</li>
              <li>Supported continuous integration, testing, and delivery processes</li>
            </ul>
          </div>

          <div className="job">
            <h3>Associate System Engineer</h3>
            <p className="company">Aetna, a CVS Health Company</p>
            <p className="duration">June 2018 - June 2020</p>
            <p className="location">Hartford, Connecticut</p>
            <p className="program">IT Technical Training Program - Class of 2020</p>
            <ul>
              <li><strong>DevSecOps:</strong> Automated onboarding processes for enterprise DevOps pipelines, created self-serve documentation reducing monthly ticket intake</li>
              <li><strong>WebEng:</strong> Migrated web applications from 2008 to 2016 shared web servers, sun-setted obsolete applications</li>
              <li><strong>Cloud COE:</strong> Containerized enterprise applications for cloud deployment</li>
              <li><strong>Cloud Engineering:</strong> Designed Azure private endpoints, tagging and naming conventions for enterprise cloud infrastructure</li>
            </ul>
          </div>

          <div className="job">
            <h3>Software Engineering Co-Op</h3>
            <p className="company">UTC Aerospace Systems</p>
            <p className="duration">January 2017 - September 2017</p>
            <p className="location">Vergennes, Vermont</p>
            <ul>
              <li>Developed front-end UI features for Black Hawk ground station using SVN version control</li>
              <li>Redesigned middleware, Windows service, and SQL Server database architecture</li>
              <li>Tested Pulse Ground Station (Silverlight application) using automated UI tests</li>
            </ul>
          </div>

          <div className="job">
            <h3>Software Engineering Apprentice</h3>
            <p className="company">Orgadata AG</p>
            <p className="duration">September 2017 - December 2017</p>
            <p className="location">Leer, Germany</p>
            <ul>
              <li>International apprenticeship teaching C# programming fundamentals</li>
              <li>Taught month-long introduction to basic C# programming to German high school students</li>
            </ul>
          </div>

          <div className="job">
            <h3>Teaching Assistant (ES 100)</h3>
            <p className="company">Clarkson University</p>
            <p className="duration">2015 - May 2017</p>
            <p className="location">Potsdam, New York</p>
            <ul>
              <li>Utilized troubleshooting for both syntax and conceptual errors in code</li>
              <li>Educated peers using flexible communication skills, adjusting teaching styles for individual effectiveness</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
