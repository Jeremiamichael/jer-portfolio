import React from 'react';
import { motion } from 'framer-motion';
import { FaDemocrat, FaExternalLinkAlt, FaGithub, FaPlayCircle } from 'react-icons/fa';
import { itemAnimation } from './Animation.js';
import './Projects.css';

export const ProjectCard = ({ project, index }) => (
    <motion.div
        variants={itemAnimation}
        className="project-card-horizontal"
    >
        <div className="project-image-section">
            <div className="project-image-wrapper">
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                />
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