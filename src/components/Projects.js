import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './Project/ProjectCard';
import './Project/Projects.css';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

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

const Projects = () => {
  const projects = [
    {
      title: "Cashier Management System",
      description: "A comprehensive point-of-sale system built with modern web technologies. Features include inventory management, sales tracking, customer management, and detailed reporting. Designed with a clean, intuitive interface for seamless user experience in retail environments.",
      image: "/images/project-img1.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://jerpaulus.my.id",
      github: "https://github.com/Jeremiamichael/cashier-system"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced features including product catalog, shopping cart, secure payment integration, order management, and admin dashboard. Built with scalable architecture and responsive design for optimal performance across all devices.",
      image: "/images/project-img2.png",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "TailwindCSS"],
      demo: "https://jerpaulus.my.id",
      github: "https://github.com/Jeremiamichael/ecommerce-platform"
    },
    {
      title: "Task Management Dashboard",
      description: "Productivity-focused application for project and task management. Includes features like task assignment, progress tracking, team collaboration, deadline management, and analytics. Perfect for teams looking to streamline their workflow and boost productivity.",
      image: "/images/project-img3.png",
      technologies: ["Vue.js", "Firebase", "Chart.js", "Vuetify"],
      demo: "https://jerpaulus.my.id"
    },
    {
      title: "Weather Analytics App",
      description: "Real-time weather monitoring application with comprehensive analytics and forecasting capabilities. Features include location-based weather data, historical trends, weather alerts, and interactive maps. Built with modern APIs and responsive design.",
      image: "/images/project-img1.png",
      technologies: ["React", "OpenWeather API", "Chart.js", "Bootstrap"],
      demo: "https://jerpaulus.my.id",
      github: "https://github.com/Jeremiamichael/weather-app"
    },
    {
      title: "Social Media Dashboard",
      description: "Unified dashboard for managing multiple social media accounts. Includes post scheduling, analytics tracking, engagement monitoring, and content management. Designed to help businesses and influencers streamline their social media presence.",
      image: "/images/project-img2.png",
      technologies: ["Angular", "Node.js", "MySQL", "Socket.io"],
      github: "https://github.com/Jeremiamichael/social-dashboard"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing web development skills and projects. Features include smooth animations, dark mode, contact forms, and optimized performance. Built with attention to detail and user experience.",
      image: "/images/project-img3.png",
      technologies: ["React", "Framer Motion", "Bootstrap", "Netlify"],
      demo: "https://jerpaulus.my.id",
      github: "https://github.com/Jeremiamichael/portfolio"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-content">
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={itemAnimation} className="section-title-container">
              <div className="section-title-content">
                <div className="section-title-text">
                  <h2 className="section-main-title">
                    Featured <span className="highlight-text">Projects</span>
                  </h2>
                  <p className="section-subtitle">
                    A showcase of my recent work in web development, featuring modern technologies 
                    and clean, user-focused design solutions.
                  </p>
                </div>
                <div className="section-title-action">
                  <div className="section-title-button-container">
                    <a 
                      href="https://github.com/Jeremiamichael" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="section-title-button"
                    >
                      View All Projects
                      <span className="section-title-button-icon">→</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="section-stats">
                <div className="stat-item">
                  <div className="stat-number">6+</div>
                  <p className="stat-label">Projects</p>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <p className="stat-label">Technologies</p>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">2+</div>
                  <p className="stat-label">Years Experience</p>
                </div>
              </div>
              
              <div className="section-divider"></div>
            </motion.div>

            <motion.div variants={containerAnimation} className="projects-list">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  project={project} 
                  index={index}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;