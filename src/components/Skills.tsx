import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'DevOps & Cloud',
      skills: ['Terraform', 'GitHub Actions', 'CloudBees Jenkins', 'Octopus Deploy', 'Azure', 'Docker', 'Kubernetes']
    },
    {
      category: 'Programming Languages',
      skills: ['C#', 'Python', 'Java', 'TypeScript', 'JavaScript', 'Bash', 'PowerShell', 'MATLAB']
    },
    {
      category: 'Tools & Technologies',
      skills: ['GitHub Enterprise', 'Git', 'SVN', 'SQL Server', 'Linux', 'Windows Services', 'Silverlight', 'Android Development']
    },
    {
      category: 'Web & Frontend',
      skills: ['React', 'HTML/CSS', 'UI/UX Design', 'Responsive Design', 'GitHub Pages', 'Vite']
    }
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
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
