import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const projectData = [
  {
    id: '01',
    title: 'eSports Live Platform',
    description: 'A full-stack web application for games like BGMI, featuring RESTful APIs with Spring Boot, real-time updates using WebSocket, and a secure dashboard with React.',
    tech: ['Java.png', 'React.png', 'MongoDB.svg'],
    screenshot: '/images/projects/Project1.png',
    repoUrl: 'https://github.com/distortion-12/eSports-Live'
  },
  {
    id: '02',
    title: 'C.A.S.I.E. Virtual Assistant',
    description: 'An AI assistant developed with Python using speech recognition and NLP. It integrates with various APIs for web searches, weather updates, and task automation.',
    tech: ['py.jpeg', 'AI.svg'],
    screenshot: '/images/projects/Project2.png',
    repoUrl: 'https://github.com/distortion-12/CASIE-Virtual-Assistant'
  },
  {
    id: '03',
    title: 'File Encryptor-Decryptor',
    description: 'A desktop application built with Java that encrypts and decrypts files using AES cryptographic standards, featuring a GUI for easy use and password protection.',
    tech: ['Java.png'],
    screenshot: '/images/projects/Project3.png',
    repoUrl: 'https://github.com/distortion-12/FileEncryptor'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleReadMore = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="projects-section" id="projects">
        <h2 className="projects-heading">Projects</h2>
        <div className="all-projects">
          {projectData.map((project, index) => (
            <div key={project.id} className={`project-card project-card-${index + 1}`}>
              <div className={`project-content ${index % 2 === 0 ? 'content-left' : 'content-right'}`}>
                <div className="project-skills">
                  {/* This line is now safer and checks if tech exists */}
                  {project.tech && project.tech.map((icon, i) => (
                    <img key={i} className="project-skill-icon" src={`/images/stack/${icon}`} alt="" />
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="button-container">
                  <button className="button" onClick={() => handleReadMore(project)}>Read More</button>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <img src="/images/stack/Github.svg" alt="Github" className="project-link-icon" />
                  </a>
                </div>
              </div>
              <img src={project.screenshot} alt={project.title} className="project-image" />
              <div className={`project-number ${index % 2 === 0 ? 'number-right' : 'number-left'}`}>{project.id}</div>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};

export default Projects;