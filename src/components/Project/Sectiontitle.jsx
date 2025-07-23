import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { titleAnimation } from './Animation.js';
import './Projects.css';

const SectionTitle = () => (
    <motion.div
        initial="hidden"
        animate="show"
        variants={titleAnimation}
        className="section-title"
    >
        <div className="section-title-header">
            <div className="section-title-content">
                <h2 className="section-title-heading">
                    Featured Work & Projects
                </h2>
                <p className="section-title-description">
                    A curated selection of my professional work and personal projects,
                    showcasing expertise in{' '}
                    <span className="highlight">software engineer-</span>,{' '}
                    <span className="highlight">UI/UX design</span>, and{' '}
                    <span className="highlight">systems analyst</span>
                </p>
            </div>

            <div className="section-title-button-container">
                <a
                    href="https://github.com/Jeremiamichael"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="section-title-button"
                >
                    View Github <HiArrowRight className="section-title-button-icon" />
                </a>
            </div>
        </div>

        <div className="section-stats">
            <div className="stat-item">
                <span className="stat-number">5+</span>
                <p className="stat-label">
                    Projects Completed
                </p>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
                <span className="stat-number">1</span>
                <p className="stat-label">
                    Years Experience
                </p>
            </div>
        </div>

        <div className="section-divider" />
    </motion.div>
);

export default SectionTitle;