import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <img src={project.screenshot} alt={project.title} className="modal-image" />
        <p>{project.description}</p>
        <div className="modal-footer">
            <button onClick={onClose} className="button">Close</button>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <img src="/images/stack/Github.svg" alt="Github" className="project-link-icon" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;