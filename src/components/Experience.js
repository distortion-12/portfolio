import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-card">
        [cite_start]{/* Experience Title and Company [cite: 4] */}
        <h3>MERN Stack Intern</h3>
        <p className="company">Wormos Pvt. Ltd. | Greater Noida</p>
        [cite_start]{/* Experience Dates [cite: 4] */}
        <p className="dates">May 2025 - June 2025</p>
        <ul>
          [cite_start]{/* Experience Details [cite: 4, 5, 6] */}
          [cite_start]<li>Outlined feature scope, technical feasibility, and user impact, aiding sprint planning. [cite: 4]</li>
          [cite_start]<li>Enabled component-based design, simplifying entity interactions and future scalability. [cite: 5]</li>
          [cite_start]<li>Achieved 40% performance boost in inventory operations and improved maintainability. [cite: 5]</li>
          [cite_start]<li>Fixed memory mismanagement in real-time, ensuring uninterrupted functionality. [cite: 6]</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;