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
    case 'Expert': return 95;
    case 'Advanced': return 85;
    case 'Intermediate': return 70;
    case 'Beginner': return 50;
    default: return 75;
  }
};

// Animasi tetap sama karena menggunakan Framer Motion
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

const SkillCard = ({ skill, bgClass }) => {
  const levelPercentage = getLevelPercentage(skill.level);
  
  // Mapping warna Bootstrap
  const progressBarClass = {
    'bg-blue-500/10': 'bg-primary',
    'bg-emerald-500/10': 'bg-success',
    'bg-orange-500/10': 'bg-warning'
  }[bgClass] || 'bg-primary';

  return (
    <motion.div
      variants={itemAnimation}
      className="h-100"
    >
      <div className="card h-100 border-secondary bg-dark text-white mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title mb-0 text-primary">{skill.name}</h5>
            {skill.hot && (
              <span className="badge bg-warning text-dark">
                <HiSparkles className="me-1" />
                Hot
              </span>
            )}
          </div>

          <div className="progress bg-dark mb-3" style={{ height: '6px' }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${levelPercentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`progress-bar ${progressBarClass}`}
              role="progressbar"
            />
          </div>

          <div className="d-flex justify-content-between small">
            <span className="text-muted">Proficiency</span>
            <span className="fw-bold">{skill.level}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CategorySection = ({ category }) => (
  <div className="mb-5">
    <div className="d-flex align-items-center mb-4">
      <div className={`p-2 rounded me-3 ${category.bgClass.replace('/10', '')}`}>
        {React.cloneElement(category.icon, { className: 'fs-4' })}
      </div>
      <div>
        <h3 className="h4 text-white">{category.title}</h3>
        <p className="text-muted mb-0">{category.description}</p>
      </div>
    </div>

    <div className="row g-4">
      {category.skills.map((skill, idx) => (
        <div className="col-md-6" key={idx}>
          <SkillCard skill={skill} bgClass={category.bgClass} />
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  // Contoh data - sesuaikan dengan struktur asli Anda
  const skills = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      bgClass: "bg-primary",
      icon: <HiCode />,
      skills: [
        { name: "React", level: "Expert", hot: true },
        { name: "JavaScript", level: "Advanced" }
      ]
    },
    // Tambahkan kategori lainnya
  ];

  return (
    <section className="py-5 bg-dark" id="skills">
      <div className="container py-5">
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
              <CategorySection key={index} category={category} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 

export default SkillsSection;