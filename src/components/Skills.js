import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiChip, 
  HiSparkles, 
  HiCode, 
  HiDatabase, 
  HiCube 
} from 'react-icons/hi';
import 'bootstrap/dist/css/bootstrap.min.css';

const getLevelPercentage = (level) => {
  switch (level) {
    case 'Expert': return 96;
    case 'Advanced': return 85;
    case 'Intermediate': return 70;
    case 'Beginner': return 50;
    default: return 75;
  }
};

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

const SkillCard = ({ skill, bgClass, categoryType }) => {
  const levelPercentage = getLevelPercentage(skill.level);
  
  // Menentukan class berdasarkan kategori
  const getProgressClass = (categoryType) => {
    switch(categoryType) {
      case 'frontend': return 'frontend-progress';
      case 'backend': return 'backend-progress'; 
      case 'tools': return 'tools-progress';
      default: return '';
    }
  };
  
  return (
    <motion.div
      variants={itemAnimation}
      className="h-100"
    >
      <div className="card h-100 skills-card text-white">
        <div className="card-body p-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="card-title mb-0 text-white fw-bold">{skill.name}</h6>
            {skill.hot && (
              <span className="badge skills-badge small">
                <HiSparkles className="me-1" size={12} />
                Hot
              </span>
            )}
          </div>

          <div className="skills-progress-container">
            <div className={`progress skills-progress ${getProgressClass(categoryType)}`}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${levelPercentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="progress-bar"
                role="progressbar"
              />
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted small">Proficiency</span>
            <span className="text-white small fw-medium">{skill.level}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CategorySection = ({ category, categoryType }) => (
  <div className="mb-5 pb-3">
    <div className="d-flex align-items-center mb-4">
      <div className={`category-icon ${categoryType} text-white`}>
        {React.cloneElement(category.icon, { className: 'fs-5' })}
      </div>
      <div className="ms-3">
        <h3 className="category-title text-white">{category.title}</h3>
        <p className="category-description text-muted">{category.description}</p>
      </div>
    </div>

    <div className="row g-3">
      {category.skills.map((skill, idx) => (
        <div className="col-md-6" key={idx}>
          <SkillCard skill={skill} bgClass={category.bgClass} categoryType={categoryType} />
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  const skills = [
    {
      title: "Frontend Development",
      description: "Modern web interfaces",
      bgClass: "bg-primary",
      icon: <HiCode />,
      categoryType: "frontend",
      skills: [
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Advanced" },
        { name: "Next.js", level: "Advanced", hot: true },
        { name: "React", level: "Advanced" },
        { name: "TailwindCSS", level: "Expert" },
        { name: "Javascript", level: "Intermediate" },
        { name: "Typescript", level: "Advanced" },
      ]
    },
    {
      title: "Backend Development", 
      description: "Server & Database",
      bgClass: "bg-success",
      icon: <HiDatabase />,
      categoryType: "backend",
      skills: [
        { name: "Golang", level: "Advanced", hot: true },
        { name: "Java", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Intermediate" }
      ]
    },
    {
      title: "Development Tools",
      description: "Tools and platforms", 
      bgClass: "bg-warning",
      icon: <HiCube />,
      categoryType: "tools",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "Postman", level: "Advanced" },
        { name: "Jira", level: "Expert" },
        { name: "Figma", level: "Expert" },
        { name: "Visual Paradigm", level: "Expert" },
        { name: "Bitbucket", level: "Advanced" },
        { name: "Github", level: "Advanced" }
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container" style={{paddingTop: '3rem', paddingBottom: '4rem'}}>
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="text-center mb-5">
            <motion.div
              variants={itemAnimation}
              className="d-inline-flex align-items-center bg-dark border border-secondary rounded-pill px-3 py-1 mb-4"
            >
              <HiChip className="me-2" />
              <span className="small">Skills & Technologies</span>
            </motion.div>

            <motion.div variants={itemAnimation}>
              <h2 className="h1 text-white mb-3">Technical Proficiency</h2>
              <p className="lead text-muted">
                A comprehensive overview of my technical expertise across various
                development domains and tools.
              </p>
            </motion.div>
          </div>

          <motion.div variants={containerAnimation}>
            {skills.map((category, index) => (
              <CategorySection key={index} category={category} categoryType={category.categoryType} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 

export default SkillsSection;