import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaPlayCircle } from 'react-icons/fa';
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
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
        <div className="project-image-section" ref={imgRef}>
            <div className="project-image-wrapper">
                {/* Loading placeholder */}
                {isLoading && (
                    <div className="project-image-placeholder">
                        <div className="loading-spinner"></div>
                    </div>
                )}
                
                
                {isInView && (
                    <img
                        src={project.image}
                        alt={project.title}
                        className={`project-image ${!isLoading ? 'loaded' : ''}`}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        style={{ opacity: isLoading ? 0 : 1 }}
                        loading="lazy"
                    />
                )}
                <div className="project-image-overlay" />
            </div>
        </div>

        <div className="project-content-section">
            <div className="project-details">
                <div className="project-header">
                    <h3 className="project-title">
                        {project.title}
                    </h3>
                    <span className="project-index">
                        {project.id}
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
                        See Details
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
                        Live Demo
                        <FaPlayCircle className="project-demo-icon" />
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);
}
