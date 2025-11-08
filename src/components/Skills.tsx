import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    category: 'DevOps',
    skills: ['Terraform', 'GitHub Actions', 'CloudBees Jenkins', 'Octopus Deploy', 'Helm', 'UrbanCode Deploy']
  },
  {
    category: 'Programming Languages',
    skills: ['C#', 'Python', 'Java', 'TypeScript', 'JavaScript', 'Bash', 'PowerShell', 'MATLAB']
  },
  {
    category: 'Tools & Technologies',
    skills: ['GitHub Enterprise', 'Git', 'Linux', 'React', 'GitHub Pages', 'Dynatrace', 'SonarQube']
  }
];

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.category} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
