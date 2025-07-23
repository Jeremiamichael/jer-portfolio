import React from 'react';
import Button from 'react-bootstrap/Button';
import { HiArrowRight, HiCode } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { config } from '@/config';
import { titleAnimation } from './Animations';
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
                    <span className="highlight">full-stack development</span>,{' '}
                    <span className="highlight">UI/UX design</span>, and{' '}
                    <span className="highlight">cloud architecture</span>.
                </p>
            </div>

            <div className="section-title-button-container">
                <Button
                    variant="primary"
                    className="section-title-button"
                    href={`https://github.com/${config.social.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Github <HiArrowRight className="section-title-button-icon" />
                </Button>
            </div>
        </div>

        <div className="section-stats">
            <div className="stat-item">
                <span className="stat-number">10+</span>
                <p className="stat-label">
                    Projects Completed
                </p>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
                <span className="stat-number">3+</span>
                <p className="stat-label">
                    Years Experience
                </p>
            </div>
        </div>

        <div className="section-divider" />
    </motion.div>
);

export default SectionTitle;