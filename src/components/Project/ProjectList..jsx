import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { containerAnimation } from './Animations';
import './Projects.css';

export const ProjectsList = ({ projects }) => (
    <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="show"
        className="projects-list"
    >
        {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
        ))}
    </motion.div>
);