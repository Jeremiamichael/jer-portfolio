import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

export const ProjectCard = ({ project, index }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  return (
    <motion.div
      variants={itemAnimation}
      className="project-card-horizontal"
    >
      {/* Project Image Section */}
      <div className="project-image-section">
        <div className="project-image-wrapper">
          {isLoading && (
            <div className="project-image-placeholder">
              <div className="loading-spinner"></div>
            </div>
          )}
          <img
            src={project.image}
            alt={project.title}
            className={`project-image ${!isLoading ? 'loaded' : ''}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ opacity: isLoading ? 0 : 1 }}
          />
          <div className="project-image-overlay" />
        </div>
      </div>

      {/* Project Content Section */}
      <div className="project-content-section">
        <div className="project-details">
          <div className="project-header">
            <h3 className="project-title">
              {project.title}
            </h3>
            <span className="project-index">
              #{String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <p className="project-description">
            {project.description}
          </p>

          <div className="project-technologies">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="project-tech-badge"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-actions">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-demo-button"
            >
              Live Demo
              <FaExternalLinkAlt className="project-demo-icon" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-button"
            >
              GitHub
              <FaGithub className="project-demo-icon" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};